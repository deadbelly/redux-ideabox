import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';
import Filter from '../containers/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <Filter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
