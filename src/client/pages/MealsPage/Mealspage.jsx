import React from "react";
import MealList from "../../components/MealList/MealList";
import Search from "../../components/Search/Search";

function Mealspage() {
  return (
    <div>
      <Search />
      <MealList limit={10} />
    </div>
  );
}

export default Mealspage;
