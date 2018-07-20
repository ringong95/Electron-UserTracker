// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

type Props = {};

export default class ViewDb extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.container} data-tid="container">
          <h2>ViewDb</h2>
        </div>
      </div>
    );
  }
}
