import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Link, Container, Grid, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Video from '../img/video.mp4';
import logoProfindo from '../img/logoProfindoRB.png';
import NewsCard from './components/newsCard'
import Categories from './components/categoriesLanding.jsx'
import Features from './components/features'
import Footer from './components/main/footer.jsx';

export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCategoryAnchorEl(null);
  };

  const handleCategoryClick = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setCategoryAnchorEl(null);
  };

  return (
    <div>
      {/* NavBar Start */}
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
            {anchorEl ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logoProfindo} alt="ProfindoMD Logo" style={{ maxHeight: '40px' }} />
          </Typography>
        </Toolbar>
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link href="#" color="inherit" style={{textDecoration: "none",}}>Home</Link></MenuItem>
          <MenuItem onClick={handleCategoryClick}><Link href="/categories" color="inherit" style={{textDecoration: "none",}}>Category</Link></MenuItem>
          {/* <Menu
            id="category-menu"
            anchorEl={categoryAnchorEl}
            keepMounted
            open={Boolean(categoryAnchorEl)}
            onClose={handleCategoryClose}
          >
            <MenuItem onClick={handleCategoryClose}><Link href="/Tractors" color="inherit" style={{textDecoration: "none",}}>Tractors</Link></MenuItem>
            <MenuItem>
              <Link href="#" color="inherit" style={{textDecoration: "none",}}>Tractors</Link></MenuItem>
          </Menu> */}
          <MenuItem onClick={handleClose}><Link href="#" color="inherit" style={{textDecoration: "none",}}>Order</Link></MenuItem>
        </Menu>
      </AppBar>
      {/* Hero Section Start */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <source src={Video} type="video/mp4" />
        </video>
        <Typography variant="h1" component="h1" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
          Best Special Equipment for Your Need
        </Typography>
      </Box>
      {/* Horizontal Sections Start */}
      <Box sx={{ maxWidth: '100vw', p: 4, backgroundColor: '#435525', overflow: 'hidden'}}>
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
