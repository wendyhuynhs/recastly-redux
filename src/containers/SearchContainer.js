import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = () => {};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: data => dispatch(handleSearchChange(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
