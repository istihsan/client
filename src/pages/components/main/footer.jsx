import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LogoProfindo from "../../../img/logoProfindoRB.png";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { Block } from "@mui/icons-material";

export default function Footer() {
  const { t } = useTranslation(); // Initialize translation hook
  const message = "Hello, May I ask about the Tree Spades ?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6281287874415430?text=${encodedMessage}`;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgb(214, 214, 214)",
        color: "whitesmoke",
        py: 4,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.7)" // Add shadow here
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
            >
              <img
                src={LogoProfindo}
                alt={t("footer.logoAlt")}
                style={{ height: "auto" }}
              />
            </Box>
            <Typography variant="body2" sx={{ my: 2, color: "black" }}>
              {t("footer.tagline")} {/* Translate tagline */}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, color: "black" }} />
              <Typography variant="body2" sx={{ color: "black" }}>
                {t("footer.address")} {/* Translate address */}
              </Typography>
            </Box>
            <Link
              href={whatsappUrl}
              target="_blank"
              color="inherit"
              display="block"
              sx={{ textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: "black" }} />
                <Typography variant="body2" sx={{ color: "black" }}>
                  {t("footer.phone")}
                </Typography>{" "}
                {/* Translate phone */}
              </Box>
            </Link>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, color: "black" }} />
              <Typography variant="body2" sx={{ color: "black" }}>
                <a
                  href="mailto:info@profindomd.com"
                  style={{
                    all: "unset", // Resets all inherited and default styles
                    cursor: "pointer" // Ensures it still behaves like a link
                  }}
                >
                  {t("footer.email")} {/* Translate email */}
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography variant="h6" sx={{ mb: 2, color: "black" }}>
              {t("footer.information")} {/* Translate "Information" */}
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none", color: "black" }}
            >
              {t("footer.home")} {/* Translate "Home" */}
            </Link>
            <Link
              component={RouterLink}
              to="/categories"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none", color: "black" }}
            >
              {t("footer.categories")} {/* Translate "Categories" */}
            </Link>
            <Link
              component={RouterLink}
              to="/gallery"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none", color: "black" }}
            >
              {t("footer.gallery")} {/* Translate "Gallery" */}
            </Link>
            <Link
              component={RouterLink}
              to="/contactus"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none", color: "black" }}
            >
              {t("footer.contactUs")} {/* Translate "Contact Us" */}
            </Link>
          </Grid>
          <Grid item xs={6} md={4} sx={{ minWidth: "45%" }}>
            <Typography variant="h6" sx={{ mb: 2, color: "black" }}>
              {t("footer.products")} {/* Translate "Products" */}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Link
                  component={RouterLink}
                  to="/categories/treespades"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.treeSpades")} {/* Translate "Tree Spades" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/beachcleaningmachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.beachCleaningMachines")}{" "}
                  {/* Translate "Beach Cleaning Machines" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/grasscollectormachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.grassCollectorMachines")}{" "}
                  {/* Translate "Grass Collector Machines" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/grassmowermachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.grassMowerMachines")}{" "}
                  {/* Translate "Grass Mower Machines" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/remotecontrolledgrassmower"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.remoteControlledGrassMower")}{" "}
                  {/* Translate "Remote Controlled Grass Mower" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/littercollectionequipment"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.litterCollectionEquipment")}{" "}
                  {/* Translate "Litter Collection Equipment" */}
                </Link>
              </Box>
              <Box>
                <Link
                  component={RouterLink}
                  to="/categories/woodchippermachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.woodChipperMachines")}{" "}
                  {/* Translate "Wood Chipper Machines" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/spadingmachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.spadingMachines")}{" "}
                  {/* Translate "Spading Machines" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/aerialworkingplatform"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.aerialWorkingPlatform")}{" "}
                  {/* Translate "Aerial Working Platform" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/truckmountedcranes"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.truckMountedCranes")}{" "}
                  {/* Translate "Truck Mounted Cranes" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/hydraulicsgenerator"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.hydraulicsGenerator")}{" "}
                  {/* Translate "Hydraulics Generator" */}
                </Link>
                <Link
                  component={RouterLink}
                  to="/categories/zootechnology"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none", color: "black" }}
                >
                  {t("footer.zooTechnology")} {/* Translate "Zoo Technology" */}
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="inherit"
          mt={2}
          sx={{ color: "black" }}
        >
          {t("footer.copyright")} {/* Translate copyright */}
        </Typography>
      </Container>
    </Box>
  );
}
