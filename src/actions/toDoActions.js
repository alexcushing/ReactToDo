var alt = require('../alt');

class ToDoActions {
  updateToDo(value) {
    return value;
  }
  updateLive(value) {
    return value;
  }

}

module.exports = alt.createActions(ToDoActions);