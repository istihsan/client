import React from "react";
import Navbar from "./components/main/navbar";
import CategoriesMain from "./components/categories/categoriesMain";
import Footer from "./components/main/footer";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";

export default function Categories() {
  return (
    <>
      <Navbar />
      <CategoriesMain />
      <WhatsAppFab />
      <Footer />
    </>
  );
}
