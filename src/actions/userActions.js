import { userConstants } from './';

import { userService } from '../services';

class UserActions {
  login(username, password) {
    return dispatch => {
      userService.login(username, password)
        .then(user => {
          dispatch(success(user));
        })
        .catch(err => {
          // TODO: Handle error
        });
    }

    function success(user) {
      return {
        type: userConstants.LOGIN,
        user
      }
    }
  }

  logout() {
    userService.logout();
    return {
      type: userConstants.LOGOUT
    }
  }
}

export const userActions = new UserActions();
