import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userAction } from '../actions';

/**
 * Logout component
 */
class Logout extends Component {
  /**
   * @override
   */
  componentWillMount() {
    this.props.dispatch(userAction.logout());
  }

  /**
   * @override
   */
  render() {
    return (
      <Redirect to='/' />
    );
  }
}

/**
 * Injects from the store to component's props
 */
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Logout);
