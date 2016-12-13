var alt = require('../alt');

class ToDoActions {
  updateToDo(value) {
    return value;
  }
  updateLive(value) {
    return value;
  }
  deleteToDo(value) {
    console.log("action" + value)
    return value;
  }
    editToDo(value, index) {
        console.log("value", value, "index", index)
    console.log("edit action" + value)
    return [value, index];
  } 
    setVal(value) {
    return value;
  }

}

module.exports = alt.createActions(ToDoActions);
