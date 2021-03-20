import React from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

const ToDo = ({ id, text, completed, toggleComplete }) => {
  const status = completed ? 'completed' : 'not-completed';

  return (
    <li
      className={status}
      onClick={() => toggleComplete(id)}
    >{text}</li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch( toggleComplete(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);
