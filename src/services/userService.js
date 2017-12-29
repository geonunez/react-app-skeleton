//import config from 'react-global-configuration';
//import 'whatwg-fetch';

class UserService {
  login(username, password) {
    // TODO: Get the API URL
    //let url = config.get('api_user_login');

    //TODO: Use whatwg-fetch to call your API.

    return Promise.resolve({ token: 'test'})
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export const userService = new UserService();
