/// <reference types="resize-observer-browser" />
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WidgetApi} from 'cb-widget-api';
import {fromEventPattern, merge} from 'rxjs';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Api, TrackerItem} from '../../gen/codebeamer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public item: TrackerItem | null = null;
    public loading = true;
    private readonly api: WidgetApi;
    private readonly observer: ResizeObserver;
    private readonly token: Promise<string>;
    private readonly swagger: Api<void>;

    constructor(private cd: ChangeDetectorRef) {
        this.api = new WidgetApi('widgetId', 'http://localhost:8080');
        this.token = this.api.authenticate().then(({token}) => token);
        this.swagger = new Api({
            customFetch: (input, init = {}) => this.token.then(token => fetch(input, {
                ...init,
                headers: {...init.headers, authorization: 'Bearer ' + token}
            }))
        });
        this.observer = new ResizeObserver(([entry]) => {
            this.api.resize(entry.contentRect.height + 10).then(/* ignored */);
        });
    }

    ngOnInit(): void {
        merge(
            // load item initially
            fromPromise(this.api.getSelectedItem())
                .pipe(map(x => x.itemId))
                .pipe(filter(x => !!x)),

            // or when the selection in Cb changes
            fromEventPattern<string>(
                handler => this.api.onSelectedItemChange(handler),
                (_, unsubscribe) => unsubscribe()
            )
        )
            .pipe(tap(() => {
                this.loading = true;
                this.cd.detectChanges();
            }))
            .pipe(switchMap(item => this.swagger.v3.getTrackerItem(~~item)))
            .pipe(map(response => response.data))
            .subscribe(result => {
                this.loading = false;
                this.item = result;
                this.cd.detectChanges();
            });

        this.observer.observe(document.documentElement);
    }

    saveForm(): void {
        this.loading = true;
        if (!this.item || !this.item.id) {
            throw new Error('existing item must be present');
        }
        const itemId = this.item.id;
        this.swagger.v3.updateTrackerItem(itemId, this.item).then(() => {
            this.loading = false;
            this.api.reloadItem({itemId: itemId.toString()}).then(/* ignored */);
            this.cd.detectChanges();
        });
    }
}
