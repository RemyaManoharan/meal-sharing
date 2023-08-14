import React, { useState, useEffect, useContext } from "react";
import MealItem from "./MealItem";
import Meal from "../Meal/Meal";
import { MealsContext } from "../../context/MealsContext";

import "./mealListStyle.css";

export default function MealList({ limit }) {
  const meals = useContext(MealsContext);
  const limitedMeals = meals.slice(0, limit);

  return (
    <section>
      <p>Featured Meals
        
      </p>
      <div className="meal-card">
        {limitedMeals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </section>
  );
}
