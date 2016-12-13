import React, { Component } from 'react';
import ToDoStore from './stores/toDoStore'


class ToDo extends Component {
  constructor(props){
      super(props);
      this.state = ToDoStore.getState();
    }

  render() {
    return (
      <div className="ToDoItem">
        <li>{this.props.todo}</li>
      </div>
    );
  }
}


export default ToDo;
