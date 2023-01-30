import { User } from 'oidc-client';

import {
  createOidcAuth,
  SignInType,
  LogLevel,
  OidcAuth,
} from 'vue-oidc-client/vue3';

let authObj = null;

const idsrvAuth = createOidcAuth(
  'main',
  SignInType.Window,
  'http://localhost:8080/',
  {
    authority: 'dev-m74ctzf3lm4rkl7w.us.auth0.com',
    client_id: '1WlbVaaulDwh9bBsBbcJyP3l1JcSecWc',
    // redirect_uri: 'http://localhost:8080/about',
    response_type: 'id_token token',
    scope: 'openid profile',
    automaticSilentRenew: true,
    metadata: {
      authorization_endpoint:
        'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/authorize',
      end_session_endpoint:
        'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/v2/logout?client_id=1WlbVaaulDwh9bBsBbcJyP3l1JcSecWc&returnTo=http://localhost:8080/',
      userinfo_endpoint:
        'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/userinfo',
      jwks_uri:
        'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/.well-known/jwks.json',
      issuer: 'https://dev-m74ctzf3lm4rkl7w.us.auth0.com/',
    },

    filterProtocolClaims: true,
    loadUserInfo: true,
  },
  console,
  LogLevel.Debug
);

idsrvAuth.events.addAccessTokenExpiring(function () {
  // eslint-disable-next-line no-console
  console.log('access token expiring');
});

idsrvAuth.events.addAccessTokenExpired(function () {
  // eslint-disable-next-line no-console
  console.log('access token expired');
});

idsrvAuth.events.addSilentRenewError(function (err) {
  // eslint-disable-next-line no-console
  console.error('silent renew error', err);
});

idsrvAuth.events.addUserLoaded(function () {
  // eslint-disable-next-line no-console
  console.log('user loaded', User);
});

idsrvAuth.events.addUserUnloaded(function () {
  // eslint-disable-next-line no-console
  console.log('user unloaded');
});

idsrvAuth.events.addUserSignedOut(function () {
  // eslint-disable-next-line no-console
  console.log('user signed out');
});

idsrvAuth.events.addUserSessionChanged(function () {
  // eslint-disable-next-line no-console
  console.log('user session changed');
});

export default idsrvAuth;
