import React from "react";

import { RecipeCard } from "./Recipe";

const RecipeList = ({ data }) => {
  let recipes = data.map(recipe => {
    return <RecipeCard recipe={recipe} key={recipe["_id"]} full={false} />;
  });

  return <div id="recipe-list">{recipes}</div>;
};

export default RecipeList;
