import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./styles/App.css";
import Recipes from "./Recipes";
import { RecipeFull } from "./Recipe";

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
      <Router>
        <div className="App">
          <header className="App-header px-3">
            <h1>
              <Link to={"/"}>Good Eats</Link>
            </h1>
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
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Recipes toggleModal={this.toggleModal} />}
            />
            <Route
              exact
              path="/recipe/:recipe"
              render={({ location }) => (
                <RecipeFull recipe={location.state.recipe} full={true} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
