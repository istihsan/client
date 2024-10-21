import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Link,
  Box,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Video from "../img/video.mp4";
import logoProfindo from "../img/logoProfindoRB.png";
import NewsCard from "./components/landing/newsCard";
import Categories from "./components/landing/categoriesLanding";
import Features from "./components/landing/features";
import Footer from "./components/main/footer";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-country-flag";
import "@fontsource/poppins";

export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroSectionHeight = heroSection.clientHeight;
        if (window.scrollY > heroSectionHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageToggle = () => {
    const newLang = currentLang === "en" ? "id" : "en";
    i18n
      .changeLanguage(newLang)
      .then(() => {
        setCurrentLang(newLang);
        console.log("Language changed to:", i18n.language); // Confirm language change
      })
      .catch(err => {
        console.error("Language change error:", err);
      });
  };

  return (
    <div>
      {/* NavBar Start */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)"
        }}
      >
        <Toolbar>
          <Box
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, pl: 10 }}
          >
            <img
              src={logoProfindo}
              alt="ProfindoMD Logo"
              style={{ maxHeight: "40px", marginRight: "16px" }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
              pr: 15,
              fontSize: "1.3rem",
              "& .nav-link": {
                fontFamily: "Poppins, sans-serif",
                textDecoration: "none",
                mx: 2,
                fontSize: "1.2rem",
                color: "whitesmoke",
                "&:hover": {
                  color: "#FCC783"
                }
              }
            }}
          >
            <Link component={RouterLink} to="/" className="nav-link">
              {t("home")}
            </Link>
            <Link component={RouterLink} to="/categories" className="nav-link">
              {t("category")}
            </Link>
            <Link component={RouterLink} to="/gallery" className="nav-link">
              {t("gallery")}
            </Link>
            <Link component={RouterLink} to="/contactus" className="nav-link">
              {t("contact")}
            </Link>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ display: { sm: "none" } }}
          >
            {anchorEl ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                component={RouterLink}
                to="/categories"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Category
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                Order
              </Link>
            </MenuItem>
          </Menu>

          {/* Language Flag Toggle */}
          <IconButton onClick={handleLanguageToggle} color="inherit">
            <CountryFlag
              countryCode={currentLang === "en" ? "GB" : "ID"}
              svg
              style={{
                width: "32px",
                height: "32px"
              }}
              title={
                currentLang === "en"
                  ? "Switch to Indonesian"
                  : "Switch to English"
              }
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Hero Section Start */}
      <Box
        component="section"
        id="hero-section"
        sx={{ position: "relative", overflow: "hidden", height: "100vh" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <source src={Video} type="video/mp4" />
        </video>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            textAlign: "center",
            position: "absolute",
            paddingBottom: "100px",
            top: "50%",
            left: "50%",
            width: "60%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: { xs: "3.5rem", sm: "3.5rem", md: "4.5rem" },
            lineHeight: "1.2"
          }}
        >
          {t("heroTitle")}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto"
          }}
        >
          <Button
            component={RouterLink}
            to="/categories"
            variant="contained"
            color="primary"
            sx={{
              textDecoration: "none",
              display: "inline-block",
              color: "#fff",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              border: "2px solid #fff",
              borderRadius: "0px",
              padding: "12px 75px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000"
              }
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>
      {/* Horizontal Sections Start */}
      <Box
        sx={{
          maxWidth: "100vw",
          p: 4,
          backgroundColor: "#FFF0DD",
          overflow: "hidden"
        }}
      >
        <NewsCard />
      </Box>
      {/* Categories Section Start */}
      <Categories />
      {/* Features Section Start */}
      <Features />
      <WhatsAppFab />
      {/* Footer Start */}
      <Footer />
    </div>
  );
}
