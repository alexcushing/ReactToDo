import React, { Component } from 'react';
import ToDoStore from './stores/toDoStore'


class ToDo extends Component {
  constructor(props){
      super(props);
      this.state = ToDoStore.getState();
    }

  render() {
    return (
        <li className="eachItem">{this.props.todo}</li>
    );
  }
}


export default ToDo;
