import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import MealList from "../../components/MealList/MealList";
import mealImage from "../../assets/images/meal-prep.jpg";
import logoImg from "../../assets/images/logo.png";

function HomePage() {
  return (
    <div className="main-wrapper">
      <div className="main_container">
        <header>
          <h2> Discover the best meals with our Meal sharing App!!</h2>
          <img className="meal-image" src={mealImage} alt="mealImage" />

          <div className="sub-title">
            <p>
              A platform that connects you with the best restaurants in town,
              allowing you to book a table and experience the meals firsthand.
              With our easy-to-use reservation system, you can secure a spot at
              your favorite restaurant and indulge in a culinary adventure that
              you'll never forget.
            </p>

            <p>
              To get started, simply go to the Meals section in our app and
              browse through our wide range of dishes and cuisines. Once you've
              found your favorite meal, select it and follow the easy booking
              process to make a reservation at the restaurant of your choice.
            </p>
          </div>
        </header>
        {/* show some meals and button to show */}
        <section className="featured-meals">
          <MealList limit={4} />
        </section>
        <Link to="/meals">
          <button className="btn">All meals</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
