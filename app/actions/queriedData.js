import axios from 'axios';

export const LOADDATA = 'LOADDATA';
const url = 'http://192.168.1.64:3001/fetchColdCallData';



export const loadData = (data) => ({
    type:LOADDATA,
    payload: data,
  }
)

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
    .then((response) => response.data)
    .then((json) => dispatch(loadData(json)))

}
