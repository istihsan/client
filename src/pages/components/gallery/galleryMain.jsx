import React from "react";
import Slider from "react-slick";
import { Container, Paper, Typography, Divider } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import TRIFLEX1 from "../../../img/4. Grass Mower Machines/12. TRIFLEX/PHOTOS/PERUZZO_TRIFLEX_10.jpg";
import MotoFOX1 from "../../../img/4. Grass Mower Machines/9. MOTOFOX/PHOTOS/PERUZZO_MOTOFOX_10.jpg";
import MotoFOX2 from "../../../img/4. Grass Mower Machines/9. MOTOFOX/PHOTOS/PERUZZO_MOTOFOX_11.jpg";
import FOXS4 from "../../../img/4. Grass Mower Machines/8. FOX-S/PHOTOS/PERUZZO_FOXS_13.jpg";

const tractorsImages = [
  "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2253359/pexels-photo-2253359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/15800610/pexels-photo-15800610/free-photo-of-tractors-on-field.jpeg?auto=compress&cs=tinysrgb&w=600"
];

const otherImages = [TRIFLEX1, MotoFOX1, MotoFOX2, FOXS4];

const GalleryMain = () => {
  const { t } = useTranslation();
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
          {t("galleryp.tractorsLife")}
        </Typography>
        <Divider
          sx={{
            marginBottom: "2%",
            borderColor: "#EB0B0D",
            borderWidth: "2px",
            width: "20%" // Adjust width as needed
          }}
        />
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
          {t("galleryp.grassMowerMachines")}
        </Typography>
        <Divider
          sx={{
            marginBottom: "2%",
            borderColor: "#EB0B0D",
            borderWidth: "2px",
            width: "37.5%" // Adjust width as needed
          }}
        />
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
