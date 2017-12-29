import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userActions } from '../actions/userActions';

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.logout());
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
