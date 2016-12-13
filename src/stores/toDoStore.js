var alt = require('../alt');
import ToDoActions from '../actions/toDoActions'

class ToDoStore {
  constructor() {
    this.state = {list : [], current : ""};

    this.bindListeners({
      handleUpdateList: ToDoActions.UPDATE_TO_DO,
      handleLiveUpdate: ToDoActions.UPDATE_LIVE,
      handleDelete: ToDoActions.DELETE_TO_DO,
      handlelEdit: ToDoActions.EDIT_TO_DO,
      setVal: ToDoActions.SET_VAL
    });
  }

  handleLiveUpdate(value){
    this.state.current = value;
    console.log("value state: ", this.state.current)
  }
    setVal(value){
        console.log("in store")
  }
    
    handlelEdit(value){
      this.state.list.splice(value[1], 1, value[0])
      console.log("store val: ", value[0])
      console.log(value)
    }

  handleUpdateList(value) {
    console.log("pre list: " + this.state.list);
    let currArray = []
    currArray.push(value)
    this.state.list.push(value)
    this.state.current = ""
    console.log("list: " + this.state.list);
  }

  handleDelete(value){
       console.log("store" + value)
      this.state.list.splice(value, 1)
      console.log(this.state.list)
        console.log(value);
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
