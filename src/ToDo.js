import React, { Component } from 'react';
import ToDoStore from './stores/toDoStore'
import ToDoActions from './actions/toDoActions'


class ToDo extends Component {
  constructor(props){
      super(props);
      this.state = ToDoStore.getState();
      this.onChange = this.onChange.bind(this);
      this.editItemRealTime = this.editItemRealTime.bind(this);
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
    
  editItemRealTime(e) {
    ToDoActions.editToDo(e.target.value, this.props.del)
  }
  delItem(e) {
    console.log("in delete", this.props.del);
    ToDoActions.deleteToDo(this.props.del)
  }

  render() {
    return (
        <div className="flex">
        <input className="eachItem" onChange={this.editItemRealTime} value={this.state.list[this.props.del]}></input>
        <span className="del" onClick={this.delItem}>x</span>
        </div>
    );
  }
}


export default ToDo;
