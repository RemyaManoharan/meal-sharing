/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
// import PropTypes from "prop-types";
import "./mealListStyle.css";

import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function MealList() {
  const fetch_url = "http://localhost:5000/api/meals";

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, []);

  console.log(meals);

  const getMeals = async () => {
    try {
      const response = await fetch(fetch_url);
      const data = await response.json();
      setMeals((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const displayMeals = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className="meal-list">
      <p>Meal list</p>
      <ul>{displayMeals}</ul>
    </section>
  );
}
