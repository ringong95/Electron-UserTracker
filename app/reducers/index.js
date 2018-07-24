// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import queriedData from './queriedData';

const rootReducer = combineReducers({
  counter,
  queriedData,
  router
});

export default rootReducer;
