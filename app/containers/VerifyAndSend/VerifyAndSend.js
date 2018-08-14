import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import styles from './index.css'

import ViewDb from './../../components/ViewDB'

// To Do Maybe display UI like View and hen send emails based on Data and update mongo that we have sent emails
const VerifyAndSend = ({queriedData}) => (
  <div>
    <div className={styles.backButton} data-tid="backButton">
      <Link to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
      <ViewDb queriedData={queriedData} showContactStatus={true}/>
    </div>   
      Test
  </div>
)
const mapDispatchToProps = dispatch => ({
  fetchColdCallData: data => dispatch(fetchColdCallData(data)),
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAndSend)
