import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealList from "./components/MealList/MealList";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>testing</p>
      </Route>
      <Route exact path="/lol">
        <p>lol and lol</p>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
      <Route exact path="/meals">
        <MealList />
      </Route>
    </Router>
  );
}

export default App;
