import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';

const ToDoList = ({ todos, filters }) => {
  const list = filters !== null ? filters(todos) : todos;

  const displayTodos = list.map(todo => {
    return (
      <ToDo
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
  filters: state.filters
});

export default connect(mapStateToProps)(ToDoList);
