import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../css/App.css';

import { history } from '../helpers';

import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <Route exact path='/' component={ Main } />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
