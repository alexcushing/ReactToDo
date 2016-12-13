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
    this.setState({current : value})
  }
    setVal(value){
        console.log("in store")
  }
    
    handlelEdit(value){
      let myList = this.state.list
      myList.splice(value[1], 1, value[0])
      this.setState({list : myList})
    }

  handleUpdateList(value) {
    let currArray = []
    currArray.push(value)
    let myList = this.state.list
    myList.push(value)
    this.setState({list : myList})
    this.setState({current : ""})
  }

  handleDelete(value){
      let myList = this.state.list
      myList.splice(value, 1)
      this.setState({list : myList})
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
