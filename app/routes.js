/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
import ImportPage from './containers/ImportPage';
import viewDbPage from './containers/ViewDbPage';

export default () => (
  <App>
    <Switch>
      <Route path="/import" component={ImportPage} />
      <Route path="/viewDb" component={viewDbPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
