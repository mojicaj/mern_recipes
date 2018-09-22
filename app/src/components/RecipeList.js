import React from "react";

import { RecipeCard } from "./Recipe";

const RecipeList = ({ recipes }) => {
  let allRecipes = recipes.map(recipe => {
    return <RecipeCard recipe={recipe} key={recipe["_id"]} />;
  });

  return <div id="recipe-list">{allRecipes}</div>;
};

export default RecipeList;
