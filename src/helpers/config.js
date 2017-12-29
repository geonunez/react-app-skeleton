import config from 'react-global-configuration';

const env = process.env.REACT_APP_ENV || 'DEV',
  backendDomain = process.env.REACT_APP_BACKEND_DOMAIN || '/';

config.set({
  env: env.toUpperCase(),
  backend_domain: backendDomain,
  api_user_login: backendDomain + '/api/v1/users/login',
});
