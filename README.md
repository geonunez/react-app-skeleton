REACT APP SKELETON
==================

### Description
This skeleton it's based on facebook's **create-react-app** script, adding it other dependencies as redux, react-router, react-semantic, sass and others. With the purpose of have a solid base to build a new project based on facebook's react.

### Project structure
```bash
├── src
|   ├── actions
|   │   ├── constants.js
|   │   ├── *.actions.js
|   ├── componets
|   ├── css
|   │   ├── **/*.sass
|   ├── helpers
|   ├── img
|   ├── reducers
|   ├── services
|   ├── test
```

##### Actions:
This folders contains all actions
##### Components:
##### Css:
##### Helpers:
##### Img:
##### Reducers:
##### Services:

### Why not a index.js at components folders?
Because as almost every components has to be connected to redux, the default export it's a function and it's was a little confuise the imports when the index.js was present.
