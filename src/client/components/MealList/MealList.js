import React, { useState, useEffect, useContext } from "react";
import MealItem from "./MealItem";
import Meal from "../Meal/Meal";
import { MealsContext } from "../../context/MealsContext";

import "./mealListStyle.css";

export default function MealList({ newMeals, limit, query }) {
  const meals = useContext(MealsContext);

  const availableMeals = newMeals || meals;
  const limitedMeals = availableMeals.slice(0, limit);

  const filteredMeals = limitedMeals.filter((meal) => {
    if (!query?.title || !meal.title) {
      return true; // Show all meals when no title query or meal title is provided
    }

    return meal.title.toLowerCase().includes(query.title.toLowerCase());
  });

  return (
    <section className="meal-list">
      <div className="meal-card">
        {filteredMeals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </section>
  );
}
