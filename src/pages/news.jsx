import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import newsData from "../data/newsData.js";
import Navbar from "./components/main/navbar.jsx";
import Footer from "./components/main/footer.jsx";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB.jsx";
import TractorIMG from "../img/tractor.jpg";
import NewsCard from "./components/landing/newsCard.jsx";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: 4,
          minHeight: "55vh",
          backgroundColor: "#FFF0DD",
          marginTop: "3%"
        }}
      >
        <NewsCard />
      </Box>
      <WhatsAppFab />
      <Footer />
    </>
  );
};

export default News;
