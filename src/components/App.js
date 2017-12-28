import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../css/App.css';

import { AuthRoute, history } from '../helpers';

import Admin from './Admin';
import Login from './Login';
import Main from './Main';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <AuthRoute path='/admin' component={ Admin } />
          <Route path='/login' component={ Login } />
          <Route exact path='/' component={ Main } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

/**
 * Injects from the store to component's props
 */
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
