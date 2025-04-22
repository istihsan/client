import * as React from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Img from "../../../img/tractor.jpg";
import { useTranslation } from "react-i18next";

export default function BasicCard() {
  const { t } = useTranslation();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        sx={{
          py: "6%",
          px: "10%",
          backgroundColor: "#FFF0DD",
          overflow: "hidden "
        }}
      >
        <Grid xs={6}>
          <Typography variant="h4">{t("features.title")}</Typography>
          <Typography variant="subtitle1" sx={{ mt: "2%" }}>
            {t("features.description")}
          </Typography>
          <Button
            href="/contactus"
            variant="contained"
            sx={{
              mt: "1%",
              backgroundColor: "#EB0B0D",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#E9DB5D",
                color: "#242105"
              }
            }}
          >
            {t("features.contact_us")}
          </Button>
        </Grid>
        <Grid xs={6}>
          <Card sx={{ maxWidth: "50%", ml: "20%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={Img}
                alt={t("features.image_alt")}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
