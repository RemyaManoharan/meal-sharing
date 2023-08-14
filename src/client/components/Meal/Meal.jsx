import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Meal.css";

function Meal({ meal }) {
  const { id, title, description, price, max_reservations } = meal;
  const fetch_url = `http://localhost:5000/api/reviews/${id}`;

  const [rating, setRating] = useState([]);

  // console.log(meal);

  const getReviews = async () => {
    try {
      const response = await fetch(fetch_url);
      if (response.ok) {
        const data = await response.json();
        setRating(data);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="card">
      <Link to={`/meals/${id}`}>
        <h4>{meal.title}</h4>
      </Link>
      <p>{meal.description}</p>
      <p>stars</p>
      <p>{meal.price}</p>
    </div>
  );
}

export default Meal;
