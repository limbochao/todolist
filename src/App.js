import React, { Component } from 'react';
import logo from './logo.svg';
import Todobox from './TodoList/TodoBox';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todobox/>
        
      </div>
    );
  }
}

export default App;
