import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import MealList from "../../components/MealList/MealList";

function HomePage() {
  return (
    <div className="main_container">
      <header>
        <h2> Discover the best meals with our Meal sharing App!!</h2>
        <p>
          With a wide variety of dishes and cuisines, you're sure to find
          something that tantalizes your taste buds.
        </p>

        <p>
          But our app is more than just a meal directory. It's a platform that
          connects you with the best restaurants in town, allowing you to book a
          table and experience the meals firsthand. With our easy-to-use
          reservation system, you can secure a spot at your favorite restaurant
          and indulge in a culinary adventure that you'll never forget.
        </p>

        <p>
          To get started, simply go to the Meals section in our app and browse
          through our wide range of dishes and cuisines. Once you've found your
          favorite meal, select it and follow the easy booking process to make a
          reservation at the restaurant of your choice.
        </p>
      </header>
      {/* show some meals and button to show */}
      <section className="featured-meals">
        <MealList limit={4} />
          </section>
      <Link to="/meals">
        <button className="btn">take to meals</button>
      </Link>
    </div>
  );
}

export default HomePage;
