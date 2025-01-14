import * as React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Button,
  Divider
} from "@mui/material/";
import category from "../../../data/data.js";

export default function CategoriesMain() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const selectedCategory = category.find(
    cat =>
      cat.name.toLowerCase().replace(/\s+/g, "") === categoryName.toLowerCase()
  );

  console.log("Category Name from URL:", categoryName);
  console.log("Selected Category:", selectedCategory);

  const handleClick = typeName => {
    const variantName = typeName.toLowerCase().replace(/\s+/g, "");
    navigate(`/categories/${categoryName}/${variantName}`);
  };

  if (!selectedCategory) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "20px" }}>
        Category Not Found
      </Typography>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#FFF0DD", width: "100%" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginY: "20px" }}>
        {selectedCategory.name}
      </Typography>
      {selectedCategory.type.map((type, index) => (
        <Box key={index} sx={{ marginBottom: "20px" }}>
          <Typography variant="h6" sx={{ marginX: "11%", textAlign: "center" }}>
            {type.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginX: "11%", textAlign: "center", marginBottom: "10px" }}
          >
            {type.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center"
            }}
          >
            <CardMedia
              component="img"
              src={type.imgLink}
              alt={type.name}
              sx={{
                objectFit: "contain",
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                margin: "0 auto"
              }}
            />

            <Button
              onClick={() => handleClick(type.name)}
              variant="contained"
              sx={{
                fontFamily: "Poppins, sans-serif",
                borderRadius: "60px",
                color: "#F7FFA",
                backgroundColor: "#FCC783",
                marginX: "45%",
                marginY: "2%"
              }}
            >
              View Variants
            </Button>
          </Box>
          {index < selectedCategory.type.length - 1 && (
            <Divider
              sx={{
                width: "75%",
                margin: "20px auto"
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
