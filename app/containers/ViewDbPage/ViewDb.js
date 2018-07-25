// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// refactor props and state

import styles from './index.css';
import DataCard from '../../components/DataCard'

const handleSubmit = (event, fetchColdCallData, queriedData) =>{
  console.log(queriedData)
  fetchColdCallData('');
  event.preventDefault();
}


const ViewDb = ({ fetchColdCallData, queriedData })=> (
  <div>
    <div className={styles.backButton} data-tid="backButton">
      <Link to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    </div>

    <div className={styles.container} data-tid="container">
      <h2>ViewDb</h2>
      <form onSubmit={(e) => { handleSubmit(e, fetchColdCallData, queriedData)}}>
        <button> populate infomation </button>
      </form>
      {
      queriedData.length > 1 && queriedData.map((data) =>(<DataCard 
        key={data._id} 
        dateOfPurchase={data.dateOfPurchase}
        email={data.user_email}
        dateToContact={data.dateToContact}
        products={data.order}
        name={data.user.name}
        phoneNumber={data.user.phone_number}
        acceptsMarketing={data.user.accepts_marketing}
      />))
    }
    </div>   
  </div>
  );

ViewDb.defaultProps = {
  queriedData: []
};
ViewDb.propTypes = {
  fetchColdCallData: PropTypes.func.isRequired,
  queriedData: PropTypes.arrayOf()
}
  
  export default ViewDb