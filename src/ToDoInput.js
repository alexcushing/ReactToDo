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

  delItem(e) {
    console.log("in delete", this.props.index);
    ToDoActions.deleteToDo("test")
  }

  render() {
    return (
      <div className="ToDoInput">
        <h2>To Do List</h2>
        <form onSubmit={this.updateTodo}>
          <input type="text" onChange={this.liveAdd} value={this.state.current}/>
          <button type="submit" className="btn">Submit</button>
        </form>
        <ul className="toDoListUnordered">
        {
         this.state.list.map((todo, index) => {
             return (
               <div className="item">
                 <ToDo key={index} todo={todo} />
                 <span className="del" value={index} onClick={this.delItem}>x</span>
               </div>
             );
         })
     }
   </ul>
      </div>
    );
  }
}

export default ToDoInput;
