
Steps to run:
1. run `$ npm link` in `{codeBeamerRepo}/zk/cb/cb-external-widget-api/packages/cb-widget-api`
2. run `$ npm link cb-widget-api`
3. run `$ npm install` 
4. run `$ npx ng serve` to run the application in development mode

# Build Docker image (temporary)
1. run `$ ng build`
2. run `$ docker build -t "external-widget" .`

# Run Docker image example
1. run `$ docker run -e "SERVER_HOST=https://example.com" -it --rm -p 4200:4200 -p 443:443 external-widget`
   * Where `SERVER_HOST` is the https host where the app will be hosted
   * A Let's Encrypt certificate will be fetched for the above
   * Port 4200 is http
