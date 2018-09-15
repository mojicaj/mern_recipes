import React, { Component } from 'react';
import './styles/App.css';
import Recipes from './Recipes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Great Recipes</h1>
        </header>

      <Recipes />
      </div>
    );
  }
}

export default App;
