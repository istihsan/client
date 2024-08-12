import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Divider } from '@mui/material/';
import category from '../../../data/data.js';
import TractorImg from '../../../img/tractor.jpg';

export default function VariantMain() {
  const { categoryName, typeName } = useParams();
  console.log(categoryName, "ssss", typeName);
  const selectedCategory = category.find(cat => cat.name.toLowerCase().replace(/\s+/g, '') === categoryName.toLowerCase());
  const selectedType = selectedCategory?.type.find(type => type.name.toLowerCase().replace(/\s+/g, '') === typeName.toLowerCase());

  if (!selectedCategory || !selectedType) {
    return <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>Type or Category Not Found</Typography>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginY: '20px' }}>{selectedCategory.name}</Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px' }}>{selectedType.name}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {selectedType.variants.map((variant, index) => (
          <Box
            key={index}
            component={Link}
            to={`/product/${variant.variantName}`}
            sx={{
              width: '500px',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${TractorImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              textDecoration: 'none',
              borderRadius: '10px',
              transition: 'background-color 0.3s, transform 0.3s',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                transform: 'scale(1.05)', 
              }
            }}
          >
            <Typography variant="h4" sx={{ color: '#fff', zIndex: 1, fontSize: '2rem' }}>
              {variant.variantName}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider
        sx={{
          width: '75%',
          margin: '40px auto',
        }}
      />
    </Box>
  );
}
