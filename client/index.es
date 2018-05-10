import React from 'react';
import { render } from 'react-dom';

import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';

import { Provider } from 'react-redux';

import attachFastClick from 'fastclick';

import createStore from './store';
import createRouter from './modules/routes';

attachFastClick(document.body);


const store = createStore();
const routes = createRouter(store);

const node = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

render(node, document.getElementById('main'));
