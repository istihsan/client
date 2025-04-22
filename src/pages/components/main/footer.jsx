import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LogoProfindo from "../../../img/logoProfindo.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export default function Footer() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
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
            <Typography variant="body2" sx={{ my: 2 }}>
              {t("footer.tagline")} {/* Translate tagline */}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                {t("footer.address")} {/* Translate address */}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">{t("footer.phone")}</Typography>{" "}
              {/* Translate phone */}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
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
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("footer.information")} {/* Translate "Information" */}
            </Typography>
            <Link
              href="/"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              {t("footer.home")} {/* Translate "Home" */}
            </Link>
            <Link
              href="/categories"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              {t("footer.categories")} {/* Translate "Categories" */}
            </Link>
            <Link
              href="/gallery"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              {t("footer.gallery")} {/* Translate "Gallery" */}
            </Link>
            <Link
              href="/contactus"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              {t("footer.contactUs")} {/* Translate "Contact Us" */}
            </Link>
          </Grid>
          <Grid item xs={6} md={4} sx={{ minWidth: "45%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("footer.products")} {/* Translate "Products" */}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Link
                  href="/categories/treespades"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.treeSpades")} {/* Translate "Tree Spades" */}
                </Link>
                <Link
                  href="/categories/beachcleaningmachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.beachCleaningMachines")}{" "}
                  {/* Translate "Beach Cleaning Machines" */}
                </Link>
                <Link
                  href="/categories/grasscollectormachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.grassCollectorMachines")}{" "}
                  {/* Translate "Grass Collector Machines" */}
                </Link>
                <Link
                  href="/categories/grassMowerMachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.grassMowerMachines")}{" "}
                  {/* Translate "Grass Mower Machines" */}
                </Link>
                <Link
                  href="/categories/remoteControlledGrassMower"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.remoteControlledGrassMower")}{" "}
                  {/* Translate "Remote Controlled Grass Mower" */}
                </Link>
                <Link
                  href="/categories/litterCollectionEquipment"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.litterCollectionEquipment")}{" "}
                  {/* Translate "Litter Collection Equipment" */}
                </Link>
              </Box>
              <Box>
                <Link
                  href="/categories/woodChipperMachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.woodChipperMachines")}{" "}
                  {/* Translate "Wood Chipper Machines" */}
                </Link>
                <Link
                  href="/categories/spadingMachines"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.spadingMachines")}{" "}
                  {/* Translate "Spading Machines" */}
                </Link>
                <Link
                  href="/categories/aerialWorkingPlatform"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.aerialWorkingPlatform")}{" "}
                  {/* Translate "Aerial Working Platform" */}
                </Link>
                <Link
                  href="/categories/truckMountedCranes"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.truckMountedCranes")}{" "}
                  {/* Translate "Truck Mounted Cranes" */}
                </Link>
                <Link
                  href="/categories/hydraulicsGenerator"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.hydraulicsGenerator")}{" "}
                  {/* Translate "Hydraulics Generator" */}
                </Link>
                <Link
                  href="/categories/zooTechnology"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  {t("footer.zooTechnology")} {/* Translate "Zoo Technology" */}
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" color="inherit" mt={2}>
          {t("footer.copyright")} {/* Translate copyright */}
        </Typography>
      </Container>
    </Box>
  );
}
