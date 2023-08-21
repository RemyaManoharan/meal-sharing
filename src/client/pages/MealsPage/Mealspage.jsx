import React from "react";
import MealList from "../../components/MealList/MealList";
import Search from "../../components/Search/Search";
import useFilter from "../../components/SearchFilter/useFilter";

function Mealspage() {
  const { setSearchQuery, query ,newMeals } = useFilter();
  return (
    <div>
      <Search setSearchQuery={setSearchQuery} query={query}/>
      <MealList  newMeals= {newMeals} limit={10} query={query}/>
    </div>
  );
}
export default Mealspage;
