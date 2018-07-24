// @flow

import { LOADDATA } from '../actions/queriedData';

export default (state: array =[], action: actionType) => {
  switch (action.type) {
    case LOADDATA:
    console.log(action.payload)
      return  action.payload.data;
    default:
      return state;
  }
}
