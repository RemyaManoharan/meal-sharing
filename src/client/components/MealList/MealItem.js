import React from "react";
import "./mealListStyle.css";

function MealItem({ meal }) {
  return (
    <div className="card">
      <h4>{meal.title}</h4>
      <p>{meal.description}</p>
      <p>stars</p>
      <p>{meal.price}</p>
    </div>
  );
}

export default MealItem;
