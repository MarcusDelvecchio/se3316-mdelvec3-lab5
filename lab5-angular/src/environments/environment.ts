import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,  //tell application where to send the user after they login. this value is just the place they were before
  },
};
