// @flow
import React, { Component } from 'react';
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
    //   1000
    // );
    this.emailAndUpdate()
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  } 
  emailAndUpdate=() =>{
    const sizeToSlice = 10
    const firstTen = this.props.queriedData.slice(0, sizeToSlice)
    const toMailServiceBound = toMailService.bind(this)
    toMailServiceBound(firstTen, this.updateContactStatus, this.failureToEmail)
  }
  failureToEmail=(err)=>{
    console.log(err)
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

const mapDispatchToProps = dispatch => ({
  updateContactDB: data => dispatch(updateContactDB(data))
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAndSendPage)