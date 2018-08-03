// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import {fetchColdCallData, spliceOfTen} from '../../actions/queriedData'

import Verify from './VerifyAndSend';
import { userInfo } from 'os';

type Props = {};

class VerifyAndSendPage extends Component<Props> {
  props: Props;
  componentDidMount() {
    this.timerID = setInterval(
     ()=>this.emailAndUpdate(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  addMailChimpList(firstTen){

// TO DO thin list and send db thins

    const formatedRequestBody = firstTen.map((i)=>{
      const FirstName = i.user.name.split(' ')[0]
      const LastName = i.user.name.split(' ')[1]
      // console.log (, i.order.product[0].name)
      let orderAmount = `${i.order.product[0].name[0].substring(0,1)}-`
      if(i.order.product[0].name[0].substring(0,1)>=4){
        orderAmount = '4-'
      }else if (i.order.product[0].name[0].substring(0,1)== 1){
        orderAmount = ''
      }
      const rock = {
        method: "POST",
        path: "lists/ba2bacf526",
        body: JSON.stringify({ 
          email_address: i.user_email, 
          status: 'subscribed',
          merge_fields:{
            EMAIL: i.user_email,
            FNAME: FirstName,
            LNAME: LastName,
            PHONE: i.user.phone_number,
            PRODUCT: i.order.product[0].name,
            PRODLINK: `https://72hours.ca/collections/essential-emergency-kits/products/${orderAmount}person-food-and-water-replacement-kit` 
          }
        })
      }
     return rock 
    })
    console.log(formatedRequestBody)
    const url = 'https://us18.api.mailchimp.com/3.0/batches'
    axios({
      method: 'post',
      url: url,    
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Basic dGV4eHh4dDozOWZiNjlhNDg5YzM2NzAwZmI2OTkxOWY1ZjlkYzM1ZC11czE4' 
      },
      data:{
        operations: formatedRequestBody
      }
    })
    .catch(error => {
      console.log(error);
    })
    .then(response => console.log(response));
    
  }
  emailAndUpdate(){
    const sizeToSlice = 10
    const firstTen = this.props.queriedData.slice(0, sizeToSlice)
    this.addMailChimpList(firstTen)
    // Todo Send emails baised off mailchimp API

  }
  render() {
    return <Verify />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchColdCallData: data => dispatch(fetchColdCallData(data)),
  addMailChimpList: firstTen => dispatch(firstTen(firstTen))
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAndSendPage)