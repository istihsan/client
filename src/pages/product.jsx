import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/main/navbar';
import { Typography } from '@mui/material';

const ProductPage = () => {
  const { variantId } = useParams();
  return (
    <>
    <Navbar/>
    <Typography>Product Page for {variantId}</Typography>
    </>
  );
};

export default ProductPage;
