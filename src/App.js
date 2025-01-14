import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";
import LandingPage from "./pages/landing";
import Categories from "./pages/categories";
import ProductPage from "./pages/product";
import ContactUs from "./pages/components/contactUs/contactUs";
import Gallery from "./pages/gallery";
import Variant from "./pages/variant";
import NotFound from "./pages/notFound";
import CategoriesMain from "./pages/categoriesMain";
import News from "./pages/news";
import NewsDetail from "./pages/newsDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<CategoriesMain />} />
      <Route path="/categories/:categoryName" element={<Categories />} />
      <Route path="/categories/:categoryName/:typeName" element={<Variant />} />
      <Route path="/product/:variantId" element={<ProductPage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route exact path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="NotFound" />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
