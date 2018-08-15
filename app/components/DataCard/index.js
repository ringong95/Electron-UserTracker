import React from 'react'
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react'

import styles from './index.css';


const DataCard = ({ dateOfPurchase, email, dateToContact, name, phoneNumber, contactedStatus, dateOfContact }) => (
  <Container className={styles.card} text textAlign='left'>
    <p> date of purchase: {new Date(dateOfPurchase*1000 ).toString()} </p>
    <p>email: {email} </p>
  
    <p>name: {name}</p>
  
    <p>phone number: {phoneNumber}</p>
  
    <p>date to contact: {new Date(dateToContact*1000).toString() }</p>
    <p>Have we contacted them: { contactedStatus !== null ? "false" : "true" } </p>
    { dateOfContact == null ? <p /> : <p> contact date: { dateOfContact.toString() }</p> } 
  
  
  </Container>
)

DataCard.defaultProps = {
  dateOfContact: null
}

DataCard.propTypes = {
  dateOfPurchase:  PropTypes.objectOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  dateToContact: PropTypes.objectOf(PropTypes.string).isRequired,
  // products: PropTypes.arrayOf(PropTypes.string).isRequired,
  name:PropTypes.string.isRequired,
  phoneNumber:PropTypes.string.isRequired,
  contactedStatus: PropTypes.bool.isRequired, 
  dateOfContact: PropTypes.objectOf(PropTypes.string)
}

export default DataCard
