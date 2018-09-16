import React, { Component } from "react";
import "./styles/App.css";
import Recipes from "./Recipes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header px-3">
          <h1>Good Eats</h1>
          <button>New Recipe</button>
        </header>
        <Recipes />
      </div>
    );
  }
}

export default App;
