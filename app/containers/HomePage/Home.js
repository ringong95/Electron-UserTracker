// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/ViewDB">to view data base</Link>
          <Link to="/import">to Import</Link>
          <Link to="/VerifyAndSend">to Process and Send</Link>          
        </div>
      </div>
    );
  }
}
