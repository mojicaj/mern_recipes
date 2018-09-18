import React, { Component } from "react";
import "./styles/App.css";
import Ingredient from "./Ingredient";

class Recipe extends Component {
  render() {
    const { recipe, full } = this.props;
    if (full) {
      return <RecipeFull recipe={recipe} />;
    } else {
      return <RecipeCard image={recipe.image} name={recipe.name} />;
    }
  }
}

export default Recipe;

const RecipeCard = ({ image, name }) => (
  <div className="card w-25">
    <img className="card-img-top" src={image} alt={name} />
    <h3 className="card-title">{name}</h3>
  </div>
);

const RecipeFull = ({ recipe }) => (
  <div>
    <img src={recipe.image} alt={recipe.name} />
    <h3>{recipe.name}</h3>
    <p>Servings: {recipe.servings}</p>
    <p>Prep time: {recipe.prep}</p>
    <p>Cook time: {recipe.cook}</p>
    <h5>Ingredients:</h5>
    <ul>
      {recipe.ingredients.map(ingredient => {
        return (
          <li key={ingredient["_id"]}>
            <Ingredient ingredient={ingredient} />
          </li>
        );
      })}
    </ul>
    <h5>Directions:</h5>
    <p>{recipe.instructions}</p>
  </div>
);

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
