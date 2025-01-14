import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Typography
} from "@mui/material";
import newsData from "../../../data/newsData";
import TractorIMG from "../../../img/tractor.jpg";

const NewsCard = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      sx={{
        backgroundColor: "transparent",
        pt: 4,
        pb: 4
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, color: "#242105", fontWeight: "600", fontSize: "3rem" }}
      >
        OUR LATEST NEWS
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {newsData.map((news, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                backgroundColor: "transparent",
                boxShadow: 3,
                borderRadius: 0,
                alignItems: "center",
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "100px"
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "gray.800"
                  }}
                >
                  {news.title}
                </Typography>
                <Divider
                  variant="middle"
                  sx={{ my: 2, borderColor: "#E9DB5D", borderWidth: "2px" }}
                />
                <Typography variant="body2" sx={{ mt: 1, color: "gray.600" }}>
                  {news.description}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="194"
                // image={TractorIMG}
                image={news.image}
                alt={news.title}
              />
              <Button
                variant="contained"
                sx={{
                  m: "2%",
                  color: "#242105",
                  backgroundColor: "#E9DB5D",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
                onClick={() => navigate(`/news/${news.id}`)}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsCard;
