import React, { Component } from "react";
import "./styles/App.css";
import Recipes from "./Recipes";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    document.getElementById("recipeModal").classList.toggle("show");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header px-3">
          <h1>Good Eats</h1>
          <button
            type="button"
            className="btn"
            data-toggle="modal"
            data-target="#recipeModal"
            onClick={this.toggleModal}
          >
            New Recipe
          </button>
        </header>
        <Recipes toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
