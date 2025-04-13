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
import { useTranslation } from "react-i18next";

const NewsCard = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

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
        {t("latest news")}
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
                marginTop: "2.5%",
                marginBottom: "100px",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
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
                  sx={{ my: 2, borderColor: "#EB0B0D", borderWidth: "2px" }}
                />
                <Typography variant="body2" sx={{ mt: 1, color: "gray.600" }}>
                  {news.description}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "-15%",
                  width: "100%"
                }}
              >
                <CardMedia
                  component="img"
                  height="130%"
                  image={news.image}
                  alt={news.title}
                  sx={{ objectFit: "contain" }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#EB0B0D",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#E9DB5D",
                      color: "#242105"
                    }
                  }}
                  onClick={() => navigate(`/news/${news.id}`)}
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsCard;
