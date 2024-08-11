import React from 'react';
import Slider from 'react-slick';
import { Container, Paper, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/15800610/pexels-photo-15800610/free-photo-of-tractors-on-field.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const GalleryMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '7%', marginTop: '7%' }}>
        <Typography variant="h4" gutterBottom>
          Tractors Life
        </Typography>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>
      </Paper>
    </Container>
  );
};

export default GalleryMain;
