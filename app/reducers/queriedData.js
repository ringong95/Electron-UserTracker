// @flow

import { LOADDATA } from '../actions/queriedData';

export default (state: array =[], action: actionType) => {
  switch (action.type) {
    case LOADDATA:
      console.log('test',   action.payload.data.filter((eachData) => {
        if (eachData.dateToContact >= new Date()){
          return eachData
        }
        return false
      }))
      
      return  action.payload.data;
    default:
      return state;
  }
}
