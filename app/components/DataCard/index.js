import React from 'react'
import { Container } from 'semantic-ui-react'

import styles from './index.css';


const DataCard = ({ dateOfPurchase ,email ,dateToContact ,products ,name ,phoneNumber ,acceptsMarketing, contactedStatus, dateOfContact = null }) => (
  <Container className={styles.card} text textAlign='left'>
  <p> date of purchase: {new Date(dateOfPurchase*1000 ).toString()} </p>
  <p>email: {email} </p>
  
  <p>name: {name}</p>
  
  <p>phone number: {phoneNumber}</p>
  
  <p>date to contact: {new Date(dateToContact*1000).toString() }</p>
  <p>Have we contacted them: { contactedStatus !== null ? "false" : "true" } </p>
  { dateOfContact == null ? <p></p> : <p> contact date: { dateOfContact.toString() }</p> } 
  
  
  </Container>
)

export default DataCard
