// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import queriedData from './queriedData';

const rootReducer = combineReducers({
  queriedData,
  router
});

export default rootReducer;
