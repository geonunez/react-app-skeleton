import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../img/logo.svg';

/**
 * Main component
 *
 */
class Main extends Component {
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
          To get started, edit <code>src/components/Main.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/**
 * Injects from the store to component's props
 */
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Main);
