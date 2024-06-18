import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landing";
import Categories from "./pages/categories"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<LandingPage />} />
    <Route path="categories" element={<Categories />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;