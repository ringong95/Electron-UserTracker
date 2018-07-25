import React from 'react'
import { Container } from 'semantic-ui-react'

import styles from './index.css';


const DataCard = ({ dateOfPurchase ,email ,dateToContact ,products ,name ,phoneNumber ,acceptsMarketing }) => (
  <Container className={styles.card} text textAlign='left'>
    <p> date of purchase: {new Date(dateOfPurchase*1000 ).toString()} </p>
    <p>email: {email} </p>

    <p>name: {name}</p>

    <p>phone number: {phoneNumber}</p>

    <p>date to contact: {new Date(dateToContact*1000).toString() }</p>
     
  </Container>
)

export default DataCard
