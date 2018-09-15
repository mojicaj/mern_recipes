import React, { Component } from "react";
import "./styles/App.css";
import Ingredient from "./Ingredient";

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div
        className="card"
        onClick={() => this.setState({ open: !open })}
        aria-controls="collapse-recipe"
        aria-expanded={open}
      >
        <img src={this.props.recipe.image} />
        <h3>{this.props.recipe.name}</h3>
        <p>Servings: {this.props.recipe.servings}</p>
        <p>Prep time: {this.props.recipe.prep}</p>
        <p>Cook time: {this.props.recipe.cook}</p>
        <h5>Ingredients:</h5>
        <ul>
          {this.props.recipe.ingredients.map(ingredient => {
            return (
              <li key={ingredient["_id"]}>
                <Ingredient ingredient={ingredient} />
              </li>
            );
          })}
        </ul>
        <h5>Directions:</h5>
        <p>{this.props.recipe.instructions}</p>
      </div>
    );
  }
}

export default Recipe;

/*
Recipe JSON:
{
    "name": "Buffalo Wings",
    "servings": "6",
    "prep": "30 minutes",
    "cook": "2 hours", 
    "ingredients": [
        {
            "measurement": "1 lb",
            "name": "Chicken wings"
        },
        {
            "measurement": "3 cups",
            "name": "Hot sauce"
        }
    ],
    "instructions": "bake wings in oven at 300 degrees. Stir the pot, cover the wings",
    "image": ""
}
*/
