import React from 'react';
import { render } from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';

import attachFastClick from 'fastclick';

import createStore from './store';
import createRouter from './modules/routes';
import { restoreSession, setSession } from './modules/session';

attachFastClick(document.body);

const store = createStore();
const routes = createRouter(store);

const session = restoreSession();
if (session) store.dispatch(setSession(session));

const node = (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>{routes}</Router>
  </Provider>
);

render(node, document.getElementById('main'));
