import axios from 'axios';

export const LOADDATA = 'LOADDATA';
export const UPDATESTATECONTACT = 'UPDATESTATECONTACT';
export const loadData = (data) => ({
  type:LOADDATA,
  payload: data, 
})
export const updateStateContact = (data) =>({
  type:UPDATESTATECONTACT,
  payload: data
})

const url = 'http://192.168.1.72:3001';

export const updateContactDB = ( stateData   ) => (dispatch)=>{
  const sentObject = stateData.map((eachOrder)=>({ id:eachOrder._id, email: eachOrder.user.email}))
  axios
  .post(
    `${url}/updateContact`,
    { data: JSON.stringify( sentObject) },
    {
      'Content-Type': 'applicat ion/json'
    }
  )
  .catch(error => {
    console.log(error);
  })
  .then(() => (
    dispatch(updateStateContact(sentObject))
  ));
}

const getRequestHeader = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  credentials: 'include',
};

export const fetchColdCallData = () => (dispatch) => {
  axios
  .get(
    `${url}/fetchColdCallData`,
    getRequestHeader  
  ).catch((error)=> {
    console.log(error);
  })
  .then((response) => {
    console.log(response)
    return dispatch(loadData(response.data))
  })  
  
}
