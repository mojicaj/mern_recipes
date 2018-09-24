import React from "react";

import { RecipeCard } from "./Recipe";

const Recipes = ({ recipes }) => {
  let allRecipes = recipes.map(recipe => {
    return <RecipeCard recipe={recipe} key={recipe["_id"]} />;
  });

  return (
    <div className="container-fluid" id="recipe-list">
      {allRecipes}
    </div>
  );
};

export default Recipes;
