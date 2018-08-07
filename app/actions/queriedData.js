import axios from 'axios';

export const LOADDATA = 'LOADDATA';
export const SLICEOFFTEN = 'SLICEOFFTEN';
export const UPDATESTATECONTACT = 'UPDATESTATECONTACT';
const url = 'http://192.168.1.72:3001/fetchColdCallData';



export const loadData = (data) => ({
    type:LOADDATA,
    payload: data, 
})

export const spliceOfTen = (amount) => ({
  type: SLICEOFFTEN,
  payload: amount,
})

export const updateContactDB = ( ) => ({

})

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
  console.log('tst')
  axios
    .get(
      url,
      getRequestHeader  
    ).catch((error)=> {
      console.log(error);
    })
    .then((response) => {
      console.log('what append')
      console.log(response.data)
      return dispatch(loadData(response.data))
    })  

}
