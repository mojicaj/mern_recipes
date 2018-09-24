import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import getRecipes from "../util/api";

import "./styles/App.css";
import Recipes from "./Recipes";
import { RecipeFull } from "./Recipe";
import RecipeForm from "./RecipeForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.getAllRecipes = this.getAllRecipes.bind(this);
  }

  getAllRecipes() {
    getRecipes()
      .then(res => {
        this.setState({ recipes: res });
      })
      .catch(err => {
        throw err;
      });
  }

  toggleModal() {
    document.getElementById("recipeModal").classList.toggle("show");
  }

  componentDidMount() {
    this.getAllRecipes();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header px-3">
            <h1>
              <Link to={"/"} id="home">
                Good Eats
              </Link>
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
          <RecipeForm
            toggleModal={this.toggleModal}
            updateRecipes={this.getAllRecipes}
            history={this.history}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Recipes recipes={this.state.recipes} />}
            />
            <Route
              exact
              path="/recipe/:recipe"
              render={({ location, history }) => (
                <RecipeFull
                  recipe={location.state.recipe}
                  history={history}
                  updateRecipes={this.getAllRecipes}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
