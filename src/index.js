import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './helpers/config';
import { store } from './helpers';

import App from './components/App';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
