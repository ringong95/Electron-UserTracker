// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { GenericScrollBox} from 'react-scroll-box';

import styles from './index.css';
import DataCard from '../../components/DataCard'
import { fetchColdCallData } from '../../actions/queriedData'

class ViewDb extends Component {
  handleSubmit(event) {
    this.props.fetchColdCallData('');    
    event.preventDefault();
  }
  render() {
    const { queriedData } = this.props
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.container} data-tid="container">
          <h2>ViewDb</h2>
          <form onSubmit={(e)=>{this.handleSubmit(e)}}>
            <button> populate infomation </button>
          </form>
          {
                queriedData.length > 1 && queriedData.map((data) =>(<DataCard 
                  key={data._id} 
                  date={data.dateOfPurchase}
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
  }
}
const mapDispatchToProps = dispatch => ({
  fetchColdCallData: data => dispatch(fetchColdCallData(data)),
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})
export default connect(mapStateToProps, mapDispatchToProps )(ViewDb)