// @flow

import { LOADDATA, SIZETOSLICE, UPDATESTATECONTACT } from '../actions/queriedData';

export default (state: array =[], action: actionType) => {
  switch (action.type) {
    case UPDATESTATECONTACT:
      return state.map(( userData )=>{
        action.payload.forEach(()=> {
          console.log(userData)
          console.log(userData.user_email, userData.email)
          if (userData.user_email === userData.email){
            console.log('test')
            return {...userData, contactedYet:true, dateOfContact: new Date()}
          }
      
        }
      )
        return userData
      })
    case LOADDATA:
      return action.payload.data.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.name === thing.name && t.dateOfPurchase === thing.dateOfPurchase
        ))
      ).filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.name === thing.name && t.user_email === thing.user_email
      ))
    )
    case SIZETOSLICE:
      return state.splice(0, action.payload.amount)
    default:
      return state;
  }
}
