var alt = require('../alt');

class ToDoActions {
  updateToDo(value) {
    return value;
  }
  updateLive(value) {
    return value;
  }
  deleteToDo(value) {
    return value;
  }
    editToDo(value, index) {
    return [value, index];
  } 
    setVal(value) {
    return value;
  }

}

module.exports = alt.createActions(ToDoActions);
