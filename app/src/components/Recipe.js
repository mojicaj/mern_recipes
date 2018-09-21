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
  <div className="container w-75 recipe">
    <div className="row">
      <div className="col">
        <img
          src={recipe.image}
          className="img-fluid img-thumbnail"
          alt={recipe.name}
        />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h3>{recipe.name}</h3>
      </div>
    </div>
    <div className="row info rounded-top">
      <div className="col">
        <h6>Servings:</h6>
        <p>{recipe.servings}</p>
      </div>
      <div className="col">
        <h6>Prep time:</h6>
        <p>{recipe.prep}</p>
      </div>
      <div className="col">
        <h6>Cook time:</h6>
        <p>{recipe.cook}</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h5>Ingredients:</h5>
      </div>
      <div className="w-100" />
      <div className="col">
        <ul>
          {recipe.ingredients.map(ingredient => {
            return (
              <li key={ingredient["_id"]}>
                <Ingredient ingredient={ingredient} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h5>Directions:</h5>
      </div>
      <div className="w-100" />
      <div className="col">
        <p>{recipe.instructions}</p>
      </div>
    </div>
  </div>
);

export { RecipeCard, RecipeFull };
