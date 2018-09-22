import React from "react";

import RecipeList from "./RecipeList";

const Recipes = ({ recipes }) => (
  <div className="container-fluid">
    <RecipeList recipes={recipes} />
  </div>
);

export default Recipes;
