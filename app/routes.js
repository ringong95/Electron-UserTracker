/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
import ImportPage from './containers/ImportPage';
import VerifyAndSend from './containers/VerifyAndSend'

export default () => (
  <App>
    <Switch>
      <Route path="/import" component={ImportPage} />
      <Route path="/VerifyAndSend" component={VerifyAndSend} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
