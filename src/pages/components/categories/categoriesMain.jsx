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
    <Box sx={{ width: "100%" }}>
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center"
            }}
          >
            {type.variants.map((variant, variantIndex) => (
              <Card key={variantIndex} sx={{ maxWidth: 345 }}>
                <CardActionArea
                  component={Link}
                  to={`/product/${variant.variantName}`}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    src={`https://drive.google.com/thumbnail?id=${variant.imgLink}`}
                    alt={variant.variantName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {variant.variantName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {variant.variantName} is well known for its ability to bla
                      bla bla
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
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
