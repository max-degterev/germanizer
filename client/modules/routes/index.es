import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route path="/help" component={require('../../containers/help').default} />
    <Route path="/about" component={require('../../containers/about').default} />
    <Route path="/" component={require('../../containers/home').default} exact />
    <Route path="*" component={require('../../containers/error_404').default} />
  </Switch>
);
