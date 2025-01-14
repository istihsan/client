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
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          Latest News
        </Typography>
        <Grid container spacing={4}>
          {news.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={TractorIMG}
                  //   image={item.image} (Delete comment when data is inserted)
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    color="textSecondary"
                  >
                    {new Date(item.date).toLocaleDateString()}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to={`/news/${item.id}`}
                    sx={{ mt: 2 }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <WhatsAppFab />
      <Footer />
    </>
  );
};

export default News;
