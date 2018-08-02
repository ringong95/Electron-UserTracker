import React from 'react'
import { Link } from 'react-router-dom';
import styles from './index.css'


// To Do Maybe display UI like View and hen send emails based on Data and update mongo that we have sent emails
const VerifyAndSend = () => (
  <div>
    <div className={styles.backButton} data-tid="backButton">
      <Link to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    </div>   
      Test
  </div>
)

export default VerifyAndSend