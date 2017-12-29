import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Auth Route component
 *
 * If the user is authenticated, render the component otherwise
 * renders the login.
 */
export class AuthRoute extends Route {
  /**
   * @override
   */
  render() {
    let user = localStorage.getItem('user');

    if (user) {
      return super.render();
    } else {
      return (
        <Redirect to={{ pathname: '/login', state: { from: this.props.location }}} />
      );
    }
  }
}
