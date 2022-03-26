/// <reference types="resize-observer-browser" />
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WidgetApi} from '@intland/cb-widget-api';
import {fromEventPattern, merge, Observable} from 'rxjs';
import {filter, map, share, switchMap, tap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Api, TrackerItem, TrackerItemReferenceSearchResult} from '../../gen/codebeamer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public item: TrackerItem | null = null;
    public loading = true;
    public readonly token: Promise<string>;
    public readonly tracker: Observable<TrackerItemReferenceSearchResult>;
    public readonly config: Promise<any>;

    private readonly baseURL: Promise<string>;
    private readonly api: WidgetApi;
    private readonly observer: ResizeObserver;
    private readonly swagger: Promise<Api<void>>;

    constructor(private cd: ChangeDetectorRef) {
        this.api = new WidgetApi(window, 'widgetId', '*');
        this.token = this.api.authenticate().then(({token}) => token);
        this.baseURL = this.api.getBaseURL().then(({baseURL}) => baseURL);
        this.config = this.api.getConfig().then(response => response.config && JSON.parse(response.config));
        this.swagger = this.baseURL.then(baseUrl => new Api({
            baseUrl,
            customFetch: (input, init = {}) => this.token.then(token => fetch(input, {
                ...init,
                headers: {...init.headers, authorization: 'Bearer ' + token}
            }))
        }));
        this.observer = new ResizeObserver(([entry]) => {
            this.api.resize(entry.contentRect.height + 10).then(/* ignored */);
        });
        this.tracker = fromPromise(this.config)
            .pipe(filter(x => x))
            .pipe(map(x => x.trackerId[0]))
            .pipe(switchMap(tracker => this.swagger.then(api => api.v3.getItemsByTracker(tracker))))
            .pipe(map(x => x.data))
            .pipe(share());
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
            .pipe(filter(x => !!x))
            .pipe(map(x => x as string))
            .pipe(tap(() => {
                this.loading = true;
                this.cd.detectChanges();
            }))
            .pipe(switchMap(item => this.swagger.then(api =>
                api.v3.getTrackerItem(~~item)
                    .catch(() => ({data: {}})))))
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
        const item = this.item;
        const itemId = this.item.id;
        this.swagger.then(api => api.v3.updateTrackerItem(itemId, item)).then(() => {
            this.loading = false;
            this.api.reloadItem({itemId: itemId.toString()}).then(/* ignored */);
            this.cd.detectChanges();
        });
    }
}
