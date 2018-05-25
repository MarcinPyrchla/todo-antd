This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    lib/
    reducers/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the production mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run-script dev`

Runs the app in the developement mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
You need to run server command below as well to be able to fetch some data

The page will reload if you make edits.<br>

### `npm run-script server`

Launches the json-server which server db.json file used to store/fetch data for todo App

Open [http://localhost:8080/todos] to view json data in the browser

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`
