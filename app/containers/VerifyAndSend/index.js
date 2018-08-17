// @flow
import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateContactDB } from '../../actions/queriedData'
import  toMailService  from './../../lib/sendUsersToMailService'
import Verify from './VerifyAndSend';

type Props = {};

class VerifyAndSendPage extends Component<Props> {
  props: Props;
  componentDidMount() {
    // this.timerID = setInterval(
    //  ()=>this.emailAndUpdate(),
    //   60000
    // );
    this.emailAndUpdate()
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  } 
  emailAndUpdate=() => {
    const sizeToSlice = 10
    const firstTen = this.props.queriedData.slice(0, sizeToSlice)
    const toMailServiceBound = toMailService.bind(this)
    toMailServiceBound(firstTen, this.sendOutSMS, this.failureToEmail,  this.updateContactStatus)
  }
  failureToEmail = (err) =>{
    console.log(err)
  }
  sendOutSMS = (firstTen, _callback, prevResponse) => {
    const url = 'http://192.168.1.72:3001/sendSms'; 
    axios
    .post(
      url,
      { data: JSON.stringify(firstTen) },
      { 'Content-Type': 'application/json' }
    )
    .catch(error => {
      console.log(error);
    })
    .then(response => response);
    _callback(prevResponse)
  }
  
  updateContactStatus = (response)=>{
    const sizeToSlice = 10
    const firstTen = this.props.queriedData.slice(0, sizeToSlice)
    if(response.data.error_count > 0){
      console.log('error')
      response.data.errors.forEach((element) => {
        console.log(element);
      });
      // return null
    }
    
    this.props.updateContactDB(firstTen)
  }
  
  render() {
    return <Verify />;
  }
}

VerifyAndSendPage.defaultProps = {
  queriedData: []
}
VerifyAndSendPage.propTypes = {
  queriedData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.any)
    ),
    updateContactDB: PropTypes.func.isRequired
  }
  
  const mapDispatchToProps = dispatch => ({
    updateContactDB: data => dispatch(updateContactDB(data))
  });
  
  const mapStateToProps = (state) => ({
    queriedData: state.queriedData
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(VerifyAndSendPage)