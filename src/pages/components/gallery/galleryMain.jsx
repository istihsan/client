import React from "react";
import Slider from "react-slick";
import { Container, Paper, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tractorsImages = [
  "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15800610/pexels-photo-15800610/free-photo-of-tractors-on-field.jpeg?auto=compress&cs=tinysrgb&w=600"
];

const otherImages = [
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const GalleryMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const imageStyle = {
    width: "100%",
    height: "300px", // Set a fixed height
    borderRadius: "10px",
    objectFit: "cover" // Ensures the image fills the space without stretching
  };

  return (
    <Container>
      {/* First Carousel - Tractors Life */}
      <Paper elevation={3} style={{ padding: "7%", marginTop: "7%" }}>
        <Typography variant="h4" gutterBottom>
          Tractors Life
        </Typography>
        <Slider {...settings}>
          {tractorsImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Tractor Slide ${index}`}
                style={imageStyle}
              />
            </div>
          ))}
        </Slider>
      </Paper>

      {/* Second Carousel - Custom Category */}
      <Paper
        elevation={3}
        style={{ padding: "7%", marginTop: "5%", marginBottom: "5%" }}
      >
        <Typography variant="h4" gutterBottom>
          Heavy Machineries
        </Typography>
        <Slider {...settings}>
          {otherImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Category Slide ${index}`}
                style={imageStyle}
              />
            </div>
          ))}
        </Slider>
      </Paper>
    </Container>
  );
};

export default GalleryMain;
