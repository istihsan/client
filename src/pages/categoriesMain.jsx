import React from "react";
import Navbar from "./components/main/navbar";
import CategoriesMain from "./components/landing/categoriesLanding";
import Footer from "./components/main/footer";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";

export default function Categories() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Navbar />
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CategoriesMain />
      </div>
      <WhatsAppFab />
      <Footer
        style={{
          marginTop: "auto",
          width: "100%"
        }}
      />
    </div>
  );
}
