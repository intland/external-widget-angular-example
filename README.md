
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
