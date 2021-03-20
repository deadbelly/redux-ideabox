import React from 'react';
import { applyFilter } from '../actions';
import { connect } from 'react-redux';

const Filter = ({applyFilter}) => {
  return (
    <>
      <button
        onClick={() => applyFilter(null)}
      >Show All</button>
      <button
        onClick={() => applyFilter(false)}
      >Show Active</button>
      <button
        onClick={() => applyFilter(true)}
      >Show Completed</button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  applyFilter: value => dispatch( applyFilter(value) )
})

export default connect(null, mapDispatchToProps)(Filter);
