// @flow

import { LOADDATA } from '../actions/queriedData';

export default (state: array =[], action: actionType) => {
  switch (action.type) {
    case LOADDATA:
      return action.payload.data.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.name === thing.name && t.dateOfPurchase === thing.dateOfPurchase
        ))
      )
    default:
      return state;
  }
}
