import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/main/navbar';
import { Typography, Box } from '@mui/material';
import SpecificationsTable from './components/products/specificationTable.jsx';
import ProductsHero from './components/products/productsHero.jsx';
import category from '../data/data';
import Footer from './components/main/footer';
import WhatsAppFab from './components/whatsappFAB/whatsappFAB.jsx';

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
    return <Typography>Variant {variantId} not found.</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: '1 0 auto',
          marginTop: '64px',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', marginY: '20px' }}>
          Product Page for {variantId}
        </Typography>
        <ProductsHero
          variantName={variant.variantName}
          description={variant.descriptionMain}
          highlight={variant.highlight}
        />
        <SpecificationsTable
          specifications={variant.specifications}
          variantName={variant.variantName}
        />
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
      <WhatsAppFab/>
    </Box>
  );
};

export default ProductPage;
