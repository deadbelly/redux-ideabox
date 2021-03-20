import React from 'react';
import { applyFilter } from '../actions';
import { connect } from 'react-redux';

const Filter = ({applyFilter}) => {

  return (
    <>
      <button>Show All</button>
      <button>Show Active</button>
      <button>Show Completed</button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  applyFilter: () => dispatch( applyFilter() )
})

export default connect(null, mapDispatchToProps)(Filter);
