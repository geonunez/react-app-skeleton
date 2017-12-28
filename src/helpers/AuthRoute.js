import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class AuthRoute extends Route {

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
