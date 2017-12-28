import { userConstants } from './';

class UserActions {
  login() {
    return dispatch => {

    }
  }

  logout() {
    return {
      type: userConstants.LOGOUT
    }
  }
}

export const userActions = new UserActions();
