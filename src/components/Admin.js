import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../img/logo.svg';

/**
 * Admin Component
 */
class Admin extends Component {
  /**
   * @override
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/Admin.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/**
 * Injects from the store to component's props
 */
function mapStateToProps(state) {
  let { user } = state;
  return { user };
}

export default connect(mapStateToProps)(Admin);
