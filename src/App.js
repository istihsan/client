import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landing";
import Categories from "./pages/categories";
import ProductPage from "./pages/product";
import ContactUs from './pages/components/contactUs/contactUs';
import Gallery from './pages/gallery'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="categories" element={<Categories />} />
      <Route path="product/:variantId" element={<ProductPage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
