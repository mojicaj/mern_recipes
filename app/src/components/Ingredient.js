import React from "react";

const Ingredient = ({ ingredient }) => (
  <div>
    <p>
      {ingredient.name} - {ingredient.measurement}
    </p>
  </div>
);

export default Ingredient;
