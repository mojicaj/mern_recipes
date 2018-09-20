import React from "react";
import { Link } from "react-router-dom";

import Ingredient from "./Ingredient";

// Minimal display for recipe listings on home page
const RecipeCard = ({ recipe }) => (
  <div className="card w-25">
    <Link
      to={{
        pathname: `/recipe/${recipe.name}`,
        state: { recipe: recipe }
      }}
    >
      <img className="card-img-top" src={recipe.image} alt={recipe.name} />
      <h3 className="card-title">{recipe.name}</h3>
    </Link>
  </div>
);

// Full display for individual recipe page
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

export { RecipeCard, RecipeFull };
