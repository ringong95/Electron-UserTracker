// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import {fetchColdCallData, spliceOfTen} from '../../actions/queriedData'
import { toMailChimp } from './../../lib/sendUsersToMailChimp'
import { deleteActions } from '../../lib/deleteActions';
import Verify from './VerifyAndSend';
import { userInfo } from 'os';

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
    const toMailChimpBound = toMailChimp.bind(this)
    toMailChimpBound(firstTen, this.updateContactStatus)
  }
  updateContactStatus = (response)=>{

    console.log('wher are we now')
    let combinedArray = [];
    const thinnedResponse = response.data.new_members.map((member)=>{
       return "rocktime"
    })
    thinnedResponse.forEach((itm, i) => {
      combinedArray.push(Object.assign({}, itm, this.props.queriedData[i]));
    });
    console.log('rock',response.data.new_members, this.props.queriedData, combinedArray )
    const toRemove = combinedArray.map((eachUser)=>{
      //  return deleteActions(eachUser)
      

    })
  }
  render() {
    return <Verify />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchColdCallData: data => dispatch(fetchColdCallData(data)),
  updateContactDB: data => dispatch(updateContactDB(data))
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAndSendPage)