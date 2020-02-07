# File New Project

Let's get the project provisioned and add a few dependencies and files to help us get us started.

```bash
mkdir ottoman-round-one && cd $_ && npm init -y && npm i couchbase@^2.6.0 express body-parser ottoman dotenv --save && npm i nodemon --save-dev && touch .gitignore && echo -e "/node_modules/" >> .gitignore && touch .env && echo -e "user=Administrator \npass=password \n" >> .env && touch app.js models.js routes.js && code .
```
