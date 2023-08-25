import React from "react";
import TestComponent from "./components/TestComponent/TestComponent";
import MealList from "./components/MealList/MealList";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/Homepage/HomePage";
import Layout from "./pages/Layout";
import Mealspage from "./pages/MealsPage/Mealspage";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Reservation from "./pages/Reservation/ReservationPage";
import { MealsProvider } from "./context/MealsContext";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/meals",
        element: <Mealspage />,
      },
      {
        path: "/meals/:mealId",
        element: <Reservation />,
      },
      {
        path: "/reviews",
        element: <ReviewPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <MealsProvider limit={4}>
      <RouterProvider router={router} />
    </MealsProvider>
  );
}

export default App;

// import {
//   createBrowserRouter,
//   RouterProvider,
//   RouteObject,
// } from "react-router-dom";

{
  /* <Router>
<Route exact path="/">
  <HomePage />
</Route>
<Route exact path="/lol">
  <p>lol and lol</p>
</Route>
<Route exact path="/test-component">
  <TestComponent></TestComponent>
</Route>
<Route exact path="/meals">
  <Mealspage />
</Route>
</Router> */
}
