# Steps to run

1. Make sure your OS uses Node.js `v16.20.2`.
2. Clone or download this repository.
3. If you downloaded this repository, unzip it and navigate to the `external-widget-angular-example-master` folder.
4. If you cloned this repository, navigate to the `external-widget-angular-example` folder.
5. Open a Terminal or Command Prompt window and run `npm install`.
4. Run `export NODE_OPTIONS=--openssl-legacy-provider` (Linux OS) or `set NODE_OPTIONS=--openssl-legacy-provider` (Windows OS) -> this is just a workaround.
5. Run `npx ng serve` to run the application in development mode.
6. You can access the app at http://localhost:4200/

# Configuring in codebeamer
Go to SystemAdmin -> Application Configuration
```
"externalWidgetExtensions" : {
    "uri" : "http://localhost:4200/assets/extension.json"
},
```

## Deleting cache in codebeamer
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
