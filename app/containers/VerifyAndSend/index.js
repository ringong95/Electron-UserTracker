// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchColdCallData} from '../../actions/queriedData'

import Verify from './VerifyAndSend';

type Props = {};

class VerifyAndSendPage extends Component<Props> {
  props: Props;
  componentDidMount() {
    this.timerID = setInterval(
     this.emailAndUpdate,
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  emailAndUpdate(){
    // Todo Send emails baised off mailchimp API
    console.log('send email here')
    console.log('update to mongo here')
  }
  render() {
    return <Verify />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchColdCallData: data => dispatch(fetchColdCallData(data)),
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAndSendPage)