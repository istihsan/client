import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material/";
import category from "../../../data/data.js";

export default function VariantMain() {
  const { categoryName, typeName } = useParams();
  const selectedCategory = category.find(
    cat =>
      cat.name.toLowerCase().replace(/\s+/g, "") === categoryName.toLowerCase()
  );
  const selectedType = selectedCategory?.type.find(
    type =>
      type.name.toLowerCase().replace(/\s+/g, "") === typeName.toLowerCase()
  );

  if (!selectedCategory || !selectedType) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "20px" }}>
        Type or Category Not Found
      </Typography>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#FFF0DD", marginBottom: "-2%" }}>
      <Typography variant="h4" sx={{ textAlign: "center", pt: "1%" }}>
        {selectedCategory.name}
      </Typography>
      <Divider
        variant="middle"
        sx={{
          my: "0.5%",
          borderColor: "#EB0B0D",
          borderWidth: "2px",
          width: "15%", // Adjust width as needed
          marginX: "auto" // Ensures centering
        }}
      />
      <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        {selectedType.name}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {selectedType.variants.map((variant, index) => (
          <Box
            key={index}
            component={Link}
            to={`/product/${variant.variantName}`}
            sx={{
              position: "relative",
              width: "100%",
              height: "500px",
              aspectRatio: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={variant.imgLink}
                alt={variant.variantName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "brightness(50%)",
                  transition: "filter 0.3s"
                }}
                onMouseEnter={e => (e.target.style.filter = "brightness(100%)")}
                onMouseLeave={e => (e.target.style.filter = "brightness(50%)")}
              />
            </Box>

            {/* Text Overlay */}
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                zIndex: 1,
                fontSize: "2rem",
                position: "absolute"
              }}
            >
              {variant.variantName}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ width: "75%", margin: "40px auto" }} />
    </Box>
  );
}
