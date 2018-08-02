// @flow

import { LOADDATA } from '../actions/queriedData';

export default (state: array =[], action: actionType) => {
  switch (action.type) {
    case LOADDATA:
      return action.payload.data.filter((eachData) => {
        if (eachData.dateToContact >= new Date()){
          return eachData
        }
        return false
      })
    default:
      return state;
  }
}
