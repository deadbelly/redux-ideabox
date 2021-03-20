import React from 'react';
import { toggleComplete } from '../actions';

const ToDo = ({ id, text, completed }) => {
  const status = completed ? 'completed' : 'not-completed';

  return (
    <li className={status}>{text}</li>
  )
}

export default ToDo;
