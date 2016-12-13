import React, { Component } from 'react';
import ToDoStore from './stores/toDoStore'
import ToDoActions from './actions/toDoActions'
import ToDo from './ToDo'

class ToDoInput extends Component {
  constructor(props){
        super(props);
        this.state = ToDoStore.getState();
        this.onChange = this.onChange.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.liveAdd = this.liveAdd.bind(this);
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

  liveAdd(e) {
    ToDoActions.updateLive(e.target.value)
  }

  updateTodo(e) {
    console.log("in update to do in APP");
    e.preventDefault();
    const val = this.state.current
    console.log("UpdateToDo", this.state);
    ToDoActions.updateToDo(val)
  }

  render() {
    return (
      <div className="ToDoInput">
        <form onSubmit={this.updateTodo}>
          <input type="text" onChange={this.liveAdd} value={this.state.current}/>
          <button type="submit">Submit</button>
        </form>
        {
         this.state.list.map((todo) => {
             return (
                 <ToDo todo={todo} />
             );
         })
     }
      </div>
    );
  }
}

export default ToDoInput;
