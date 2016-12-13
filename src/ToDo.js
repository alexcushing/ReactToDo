import React, { Component } from 'react';
import ToDoStore from './stores/toDoStore'
import ToDoActions from './actions/toDoActions'


class ToDo extends Component {
  constructor(props){
      super(props);
      this.state = ToDoStore.getState();
      this.onChange = this.onChange.bind(this);
      this.delItem = this.delItem.bind(this);
    }
    
    componentDidMount() {
    ToDoStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ToDoStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
    
  delItem(e) {
    console.log("in delete", this.props.del);
    ToDoActions.deleteToDo(this.props.del)
  }

  render() {
    return (
        <div>
        <li className="eachItem">{this.props.todo}</li>
        <span className="del" onClick={this.delItem}>x</span>
        </div>
    );
  }
}


export default ToDo;
