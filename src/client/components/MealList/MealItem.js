import React from "react";

function MealItem({ meal }) {
  return (
    <div>
      <h4>{meal.title}</h4>
      <p>{meal.description}</p>
      <p>{meal.price}</p>
    </div>
  );
}

export default MealItem;
