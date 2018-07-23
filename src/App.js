import React, { Component } from 'react';
import logo from './logo.svg';
import VisibleForm from './containers/VisibleForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <VisibleForm />
      </div>
    );
  }
}

export default App;
