import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Link,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoProfindo from "../../../img/logoProfindoRB.png";
import "@fontsource/poppins";
import { Link as RouterLink } from "react-router-dom";
import CountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageToggle = () => {
    const newLang = currentLang === "en" ? "id" : "en";
    i18n
      .changeLanguage(newLang)
      .then(() => {
        setCurrentLang(newLang);
        console.log("Language changed to:", i18n.language);
      })
      .catch(err => {
        console.error("Language change error:", err);
      });
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#800d0e" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            pl: { xs: 1, sm: 10 }
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={logoProfindo}
              alt="ProfindoMD Logo"
              style={{ maxHeight: "40px", marginRight: "16px" }}
            />
          </Link>
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
          sx={{
            display: { sm: "none" },
            mr: { xs: 1, sm: 0 }
          }}
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
  );
}
