
#Steps to run

1. Run `npm i @intland/cb-widget-api` to download https://www.npmjs.com/package/@intland/cb-widget-api
2. Go to `node_modules/@intland/cb-external-widget-api/packages/cb-widget-api`
3. Check the node version `$ node --version`
4. Set the node version to the same in `/external-widget-angular-example` with `nvm use {version}`
5. Go back to `node_modules/@intland/cb-external-widget-api/packages/cb-widget-api`
6. Run `$ npm install`
7. Run `$ npx webpack build`
8. Run `$ npm link`
9. Go to `/external-widget-angular-example`
10. Run `$ npm link cb-widget-api`
11. Run `$ npm install` 
12. Run `export NODE_OPTIONS=--openssl-legacy-provider` -> this is just a workaround
13. Run `$ npx ng serve` to run the application in development mode

##Configuring in codebeamer
Go to SystemAdmin -> Application Configuration
```
"externalWidgetExtensions" : {
    "uri" : "http://localhost:4200/assets/extension.json"
},
```

##Deleting cache in codebeamer
If you would like to delete the cached widget config in codebeamer just hit this URL:
`http://localhost:8080/cb/hc/caches/externalWidgetExtensionConfigCache/clear.spr`

# Build Docker image (temporary)
1. run `$ ng build`
2. run `$ docker build -t "external-widget" .`

# Run Docker image example
1. run `$ docker run -e "SERVER_HOST=https://example.com" -it --rm -p 4200:4200 -p 443:443 external-widget`
   * Where `SERVER_HOST` is the https host where the app will be hosted
   * A Let's Encrypt certificate will be fetched for the above
   * Port 4200 is http
