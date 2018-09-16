import React, { Component } from "react";
import "./styles/App.css";
import Recipe from "./Recipe";

class RecipeList extends Component {
  render() {
    let recipes = this.props.data.map(recipe => {
      return <Recipe recipe={recipe} key={recipe["_id"]} full={false} />;
    });
    return <div id="recipe-list">{recipes}</div>;
  }
}

export default RecipeList;
