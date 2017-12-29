import config from 'react-global-configuration';

const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN || '/';

config.set({
  backend_domain: backendDomain,
  api_user_login: backendDomain + '/api/v1/users/login',
});
