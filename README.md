# Angular selective start

This project demonstrates selective bootstrapping of the number of components present on the **index.html** page and error occurs when the project built with `--prod` parameter.

## Steps to reproduce error

### Prerequisites

Install packages
```
npm i
```

### Successful way

Build the app:
```
npm run build:dev
```

Run the server
```
npm run serve
```

You will see two components working as expected. No errors in the console.

### When the errors occurs

Build the app:
```
npm run build:prod
```

Run the server
```
npm run serve
```

You will see the error in the console: **No NgModule metadata found for 'function (){}'.**
