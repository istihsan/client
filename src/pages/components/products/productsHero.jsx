import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardMedia, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import ImageTractor from "../../../img/tractor.jpg";
import ExcavatorMountedPDF from "../../../img/1TreeSpades/1ExcavatorMounted/BigJohn_Excavator_PDF_FILE.pdf";

export default function ProductsHero({
  variantName,
  description,
  highlight,
  downloadLink,
  imgLink
}) {
  return (
    <Box sx={{ flexGrow: 1, mx: "20%", my: "5%" }}>
      <Typography variant="h4" sx={{ color: "#800d0e" }}>
        {variantName}
      </Typography>
      <Divider
        sx={{
          borderColor: "#800d0e",
          borderWidth: "2px",
          width: `${Math.min(variantName.length * 1.75, 75)}%` // Adjust width dynamically based on variantName length, with a max width of 75%
        }}
      />
      <Typography variant="h6" sx={{ mb: "1%" }}>
        {highlight}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography sx={{ mb: "7%" }}>{description}</Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Poppins, sans-serif",
              borderRadius: "10px",
              color: "#F7FFA",
              backgroundColor: "#800d0e",
              "&:hover": { backgroundColor: "#D9B05A" }
            }}
          >
            Contact Us
          </Button>
          <a
            href={downloadLink}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins, sans-serif",
                borderRadius: "10px",
                ml: "2%",
                color: "#F7FFA",
                backgroundColor: "#D9B05A",
                "&:hover": { backgroundColor: "#006400" }
              }}
            >
              Download Specifications
            </Button>
          </a>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt="tractor" image={imgLink} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
