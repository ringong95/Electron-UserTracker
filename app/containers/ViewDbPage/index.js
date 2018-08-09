// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { fetchColdCallData } from '../../actions/queriedData'

import ViewDb from './ViewDb';


type Props = {};

class ViewDbPage extends Component<Props> {
  props: Props;
  render() {  
    console.log(this.props.queriedData)
    
    return <ViewDb fetchColdCallData={this.props.fetchColdCallData} queriedData={this.props.queriedData} />;
  }
}

ViewDbPage.defaultProps = {
  queriedData: []
};  
ViewDbPage.propTypes = {
  fetchColdCallData: PropTypes.func.isRequired,
  queriedData: PropTypes.arrayOf()
}

const mapDispatchToProps = dispatch => ({
  fetchColdCallData: data => dispatch(fetchColdCallData(data)),
});

const mapStateToProps = (state) => ({
  queriedData: state.queriedData
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewDbPage)
