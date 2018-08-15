import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import styles from './index.css'

import ViewDb from '../../components/ViewDb'

// To Do Maybe display UI like View and hen send emails based on Data and update mongo that we have sent emails
const VerifyAndSend = ({queriedData}) => (
  <div>
    <div className={styles.backButton} data-tid="backButton">
      <Link to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
      <ViewDb queriedData={queriedData} showContactStatus />
    </div>   
      Test
  </div>
)

VerifyAndSend.defaultProps = {
  queriedData: []
}
VerifyAndSend.propTypes = {
  queriedData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.any)
    )
}


const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})

export default connect(mapStateToProps)(VerifyAndSend)
