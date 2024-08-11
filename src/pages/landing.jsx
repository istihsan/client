import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Link, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Video from '../img/video.mp4';
import logoProfindo from '../img/logoProfindoRB.png';
import NewsCard from './components/newsCard';
import Categories from './components/categoriesLanding';
import Features from './components/features';
import Footer from './components/main/footer';
import '@fontsource/poppins';
import { Link as RouterLink } from 'react-router-dom';

export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroSectionHeight = heroSection.clientHeight;
        if (window.scrollY > heroSectionHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* NavBar Start */}
      <AppBar position="fixed" sx={{ backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)' }}>
  <Toolbar>
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, pl: 10 }}>
      <img src={logoProfindo} alt="ProfindoMD Logo" style={{ maxHeight: '40px', marginRight: '16px' }} />
    </Box>
    <Box sx={{ 
      display: { xs: 'none', sm: 'flex' }, 
      alignItems: 'center', 
      justifyContent: 'flex-end', 
      flexGrow: 1, 
      pr: 15, 
      fontSize: '1.3rem',
      '& .nav-link': {
        fontFamily: 'Poppins, sans-serif',
        textDecoration: 'none',
        mx: 2,
        fontSize: '1.2rem', // Modify the font size here
        color: 'whitesmoke', // Modify text color here
        '&:hover': {
          color: '#FCC783', // Modify hover color here
        },
      }
    }}>
      <Link component={RouterLink} to="/" className="nav-link">Home</Link>
      <Link component={RouterLink} to="/categories" className="nav-link">Category</Link>
      <Link component={RouterLink} to="/gallery" className="nav-link">Gallery</Link>
      <Link component={RouterLink} to="/contactus" className="nav-link">Contact</Link>
    </Box>
    <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuClick} sx={{ display: { sm: 'none' } }}>
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
        <Link component={RouterLink} to="/" color="inherit" style={{ textDecoration: 'none' }}>Home</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link component={RouterLink} to="/categories" color="inherit" style={{ textDecoration: 'none' }}>Category</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>Order</Link>
      </MenuItem>
    </Menu>
  </Toolbar>
</AppBar>
      {/* Hero Section Start */}
      <Box component="section" id="hero-section" sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <source src={Video} type="video/mp4" />
        </video>
        <Typography variant="h1" component="h1" sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          textAlign: 'center',
          position: 'absolute',
          paddingBottom: '100px',
          top: '50%',
          left: '50%',
          width: '60%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: { xs: '3.5rem', sm: '3.5rem', md: '4.5rem' }, // Responsive font size
          lineHeight: '1.2',
        }}>
          Best Special Equipment for Your Need
        </Typography>
        <Box sx={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '100%',
          maxWidth: '400px', // Max width for button
          margin: '0 auto',
        }}>
          <Button
            component={RouterLink}
            to="/categories"
            variant="contained"
            color="primary"
            sx={{
              textDecoration: 'none',
              display: 'inline-block',
              color: '#fff',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
              border: '2px solid #fff',
              borderRadius: '0px',
              padding: '12px 75px', // Responsive button size
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
              },
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>
      {/* Horizontal Sections Start */}
      <Box sx={{ maxWidth: '100vw', p: 4, backgroundColor: '#FFF0DD', overflow: 'hidden'}}>
        <NewsCard />
      </Box>
      {/* Categories Section Start */}
      <Categories />
      {/* Features Section Start */}
      <Features />
      {/* Footer Start */}
      <Footer />
    </div>
  );
}
