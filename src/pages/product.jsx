import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/main/navbar';
import { Typography } from '@mui/material';
import SpecificationsTable from './components/products/specificationTable.jsx';
import ProductsHero from './components/products/productsHero.jsx';
import category from '../data/data';
import Footer from './components/main/footer';

const ProductPage = () => {
  const { variantId } = useParams();

  // nyari variantnya
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
    return null; // handler kalo ga ketemu (JANGAN DIOTAK ATIK)
  };

  const variant = findVariant();

  if (!variant) {
    return <Typography>Variant {variantId} not found.</Typography>; // kalo ga ketemu variantnya
  }

  return (
    <>
    <Navbar/>
    <Typography>Product Page for {variantId}</Typography>
    <ProductsHero
    variantName={variant.variantName}
    description={variant.descriptionMain}
    highlight={variant.highlight}/>
    <SpecificationsTable 
    specifications={variant.specifications}
    variantName={variant.variantName}/>
    </>
  );
};

export default ProductPage;
