import React, { Component } from 'react';
import ToDoInput from "./ToDoInput"
import FontAwesome from "react-fontawesome"

const App = () => {
    return (
      <div className="App">
        <FontAwesome name='rocket' />
        <ToDoInput />
      </div>
    );
}

export default App;
