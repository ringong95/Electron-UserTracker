// @flow
import React, { Component } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { fetchColdCallData } from '../../actions/queriedData'
import ViewDb from '../../components/ViewDb';
import styles from './index.css';

type Props = {};

class ImportPage extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      submited: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    Papa.parse(this.state.file, {
      complete: data => {
        console.log('All done!');
        const url = 'http://192.168.1.72:3001/export';
        const headlessData = data.data.slice(1);
        headlessData.map(indData => {
          if( /(Deluxe Kit)|(Emergency Kit)/g.test(indData[17] )){
            axios
              .post(
                url,
                { data: JSON.stringify(indData) },
                {
                  'Content-Type': 'application/json'
                }
              )
              .catch(error => {
                console.log(error);
              })
              .then(response => response);
            return indData;
          }
         
        });
        this.props.fetchColdCallData()
        
      }
    });
           // setTimeout(    fetchColdCallData(), 0)

  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
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
         <div className={styles.formcontainer}>
          <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <button disabled={this.state.submited} type="submit">
              Upload
            </button>
          </form>
         </div>

          <ViewDb queriedData={this.props.queriedData} />

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

export default connect(mapStateToProps, mapDispatchToProps)(ImportPage)
