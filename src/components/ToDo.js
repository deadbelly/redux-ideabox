import React from 'react';

const ToDo = ({ id, text, completed }) => {
  const status = completed ? 'completed' : 'not-completed';

  return (
    <li className={status}>{text}</li>
  )
}

export default ToDo;
