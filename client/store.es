import config from 'uni-config';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const reducers = {
  route: require('./modules/routes/state').reducer,
  session: require('./modules/session').reducer,

  home: require('./containers/home/state/reducer').default,
};

const middleware = [
  require('redux-thunk').default,
  require('./modules/network/middleware').default,
  require('./modules/promise').middleware,
];

if (config.debug) middleware.push(require('redux-immutable-state-invariant').default());

if (config.sandbox) {
  middleware.push(require('redux-logger').createLogger({
    duration: true,
    colors: false,
    level: {
      prevState: () => false,
      nextState: () => false,
      action: () => 'log',
      error: () => 'error',
    },
  }));
}

export default () => createStore(combineReducers(reducers), applyMiddleware(...middleware));
