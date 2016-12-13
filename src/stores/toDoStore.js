var alt = require('../alt');
import ToDoActions from '../actions/toDoActions'

class ToDoStore {
  constructor() {
    this.state = {list : [], current : ""};

    this.bindListeners({
      handleUpdateList: ToDoActions.UPDATE_TO_DO,
      handleLiveUpdate: ToDoActions.UPDATE_LIVE
    });
  }

  handleLiveUpdate(value){
    this.state.current = value;
    console.log("value state: ", this.state.current)
  }

  handleUpdateList(value) {
    console.log("pre list: " + this.state.list);
    let currArray = []
    currArray.push(value)
    this.state.list.push(value)
    this.state.current = ""
    console.log("list: " + this.state.list);
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
