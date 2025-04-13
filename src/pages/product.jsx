import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/main/navbar";
import { Typography, Box } from "@mui/material";
import SpecificationsTable from "./components/products/specificationTable.jsx";
import ProductsHero from "./components/products/productsHero.jsx";
import category from "../data/data";
import Footer from "./components/main/footer";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB.jsx";
import PhotoGallery from "./components/products/photoGallery.jsx";
import NotFound from "./notFound.jsx";

const ProductPage = () => {
  const { variantId } = useParams();

  const findVariant = () => {
    for (const cat of category) {
      for (const type of cat.type) {
        for (const variant of type.variants) {
          if (variant.variantName === variantId) {
            return variant;
          }
        }
      }
    }
    return null;
  };

  const variant = findVariant();

  if (!variant) {
    return <NotFound />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: "1 0 auto",
          marginTop: "64px"
        }}
      >
        <ProductsHero
          variantName={variant.variantName}
          description={variant.descriptionMain}
          highlight={variant.highlight}
          downloadLink={variant.downloadLink}
          imgLink={variant.imgLink}
        />
        {variant.specifications && variant.specifications.length > 0 && (
          <SpecificationsTable
            specifications={variant.specifications}
            variantName={variant.variantName}
          />
        )}
      </Box>
      <Box sx={{ marginY: "20px" }}>
        <PhotoGallery photos={variant.photos} />
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
      <WhatsAppFab />
    </Box>
  );
};

export default ProductPage;
