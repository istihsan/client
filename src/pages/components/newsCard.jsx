import React from 'react';
import TractorImg from '../../img/tractor.jpg'
import { Box, Button, Card, CardContent, CardMedia, Grid, Divider, Typography } from '@mui/material';

const cards = [
  {
    title: "Lorem Ipsum",
    img: TractorImg,
    link: "/products/digitalprintingsmall"
  },
  {
    title: "Lorem Ipsum",
    img: TractorImg,
    link: "/products/digitalprintinglarge"
  },
  {
    title: "Lorem Ipsum",
    img: TractorImg,
    link: "/products/officesupplies"
  },
  {
    title: "Lorem Ipsum",
    img: TractorImg,
    link: "/products/merchandise"
  }
];

const ProductCard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{
        background: '#2B430E'
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, cid) => (
          <Grid item key={cid} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: 'auto',
                background: '#A8B41D',
                boxShadow: 3,
                borderRadius: 2
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'gray.800' }}
                >
                  {card.title}
                </Typography>
                <Divider variant= "middle"/>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: 'gray.600' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="194"
                image={card.img}
                alt={card.title}
              />
              <Button variant="contained" sx={{m: "2%", color: "#242105", backgroundColor: "#E9DB5D"}}>
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
