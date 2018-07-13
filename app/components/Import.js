// @flow
import React, { Component } from 'react';
import Papa from "papaparse";
import axios from 'axios';

import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      submited: false,
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this) 
  }

  onFormSubmit(e) {
    e.preventDefault() // Stop form submit
    Papa.parse(this.state.file, {
      complete: (data) => {
        console.log("All done!");
        const url = "http://192.168.1.211:3001/export ";
        const headlessData = data.data.slice(1);
        headlessData.map(indData => {
          axios
            .post(url, JSON.stringify(indData))
            .then(response => console.log(response));
            return true;
        });
      
      }
    });
   
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }
 
  processFile(theFile) {
    console.log(theFile);
   
  }

  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container} data-tid="container">
          <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <button disabled={this.state.submited} type="submit">Upload</button>
          </form>

        </div>
      </div>
    );
  }
}
