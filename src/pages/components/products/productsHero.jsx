import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import ImageTractor from '../../../img/tractor.jpg'

export default function ProductsHero({variantName, description, highlight}) {
  return (
    <Box sx={{ flexGrow: 1, m: "5%" }}>
        <Typography variant='h4' sx={{ color: "#006400" }}>
        {variantName}    
        </Typography>
        <Typography variant='h6' sx={{mb: "1%"}}>
        {highlight}
        </Typography> 
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <Typography sx={{mb:"7%"}}>
            {description}  
            </Typography>
            <Button variant="contained" sx={{fontFamily: 'Poppins, sans-serif', borderRadius: '10px' ,color:'#F7FFA', backgroundColor:'#D9B05A', '&:hover': {backgroundColor: '#006400', }}}>Contact Us</Button>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="tractor"
                    image={ImageTractor}
                />
            </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
