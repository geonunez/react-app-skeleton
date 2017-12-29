REACT APP SKELETON
==================

### Description
This skeleton it's based on facebook's **create-react-app** script, adding it a common dependencies as redux, react-router, react-semantic, sass and others. With the purpose of have a solid base to build a new web project based on facebook's react.

### Dependencies added
* node-sass-chokidar
* npm-run-all
* react-dom
* react-router-dom
* react-global-configuration
* react-helmet
* react-redux
* redux
* redux-logger
* redux-thunk
* semantic-ui-css
* semantic-ui-react

### Project structure
```bash
├── src
|   ├── actions
|   │   ├── constants.js
|   │   ├── userAction.js
|   ├── componets
|   │   ├── Admin.js
|   │   ├── App.js
|   │   ├── Login.js
|   │   ├── Logout.js
|   │   ├── Main.js
|   │   ├── NotFound.js
|   ├── css
|   │   ├── App.sass
|   │   ├── Login.sass
|   ├── helpers
|   │   ├── AuthRoute.js
|   │   ├── config.js
|   │   ├── history.js
|   │   ├── store.js
|   ├── img
|   ├── reducers
|   │   ├── rootReducer.js
|   │   ├── userReducer.js
|   ├── services
|   │   ├── userService.js
|   ├── test
```

##### Actions:
Actions folder has the flux's actions of the application.
##### Components:
Components folder contains app's components.
##### Css:
Css folder has the applications styles
##### Helpers:
Helpers folder has application's utils as store, history, etc.
##### Img:
As the folder name said, is for image.
##### Reducers:
Reducers' folder contains the flux's reducers of the application.
##### Services:
Services folder has the logic to consume and API,

### Why not a index.js at components folders?
Because as almost every components has to be connected to redux, the default export it's a function and it's was a little confuise the imports when the index.js was present.
