
#Steps to run

1. Go to `{codeBeamerRepo}/zk/cb/cb-external-widget-api/packages/cb-widget-api`
2. Check the node version `$ node --version`
3. Set the node version to the same in `/external-widget-angular-example` with `nvm use {version}`
4. Go back to `{codeBeamerRepo}/zk/cb/cb-external-widget-api/packages/cb-widget-api`
5. run `$ npm install`
6. run `$ npx webpack build`
7. run `$ npm link`
8. Go to `/external-widget-angular-example`
9. run `$ npm link cb-widget-api`
10. run `$ npm install` 
11. run `export NODE_OPTIONS=--openssl-legacy-provider` -> this is just a workaround
12. run `$ npx ng serve` to run the application in development mode

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
