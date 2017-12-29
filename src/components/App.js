import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../css/App.css';

import { AuthRoute, history } from '../helpers';

import Admin from './Admin';
import Login from './Login';
import Logout from './Logout';
import Main from './Main';
import NotFound from './NotFound';

/**
 * App components
 *
 * Route logic.
 */
class App extends Component {
  /**
   * @override
   */
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <AuthRoute path='/admin' component={ Admin } />
          <Route path='/login' component={ Login } />
          <Route path='/Logout' component={ Logout } />
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
