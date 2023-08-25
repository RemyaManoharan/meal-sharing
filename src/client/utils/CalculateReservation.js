import React, { useEffect, useState, useContext } from "react";
import { MealsContext } from "../context/MealsContext";

function CalculateReservation() {
  const meals = useContext(MealsContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations data from your API
    fetch("http://localhost:5000/api/reservations")
      .then((response) => response.json())
      .then((data) => setReservations(data))
      .catch((error) => console.error("Error fetching reservations:", error));
  }, []);

 const calculateRemainingSpots = (meal) => {
    const now = new Date();
    const futureReservations = reservations.filter((reservation) => {
      return (
        reservation.meal_id === meal.id &&
        new Date(reservation.created_date) >= now
      );
    });
    const remainingSpots = meal.max_reservations - futureReservations.length;
    return remainingSpots;
  };

  return {calculateRemainingSpots};
}

export default CalculateReservation;
