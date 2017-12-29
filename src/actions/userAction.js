import { userConstants } from './';
import { userService } from '../services';

/**
 * User Action class
 */
class UserAction {
  /**
   * Login action
   *
   * @param {string} username
   * @param {string} password
   */
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

  /**
   * Logout action
   */
  logout() {
    userService.logout();
    return {
      type: userConstants.LOGOUT
    }
  }
}

export const userAction = new UserAction();
