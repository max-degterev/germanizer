import React from 'react';
import Route from 'react-router/lib/Route';

export default () => (
  <div>
    <Route path="/" component={require('../../containers/home').default} />
    <Route path="/about" component={require('../../containers/about').default} />
    <Route path="*" component={require('../../containers/error_404').default} />
  </div>
);
