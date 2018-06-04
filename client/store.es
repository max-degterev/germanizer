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

if (config.debug) {
  middleware.push(require('redux-immutable-state-invariant').default());
  middleware.push(require('redux-logger').createLogger({ duration: true }));
}


export default () => createStore(combineReducers(reducers), applyMiddleware(...middleware));
