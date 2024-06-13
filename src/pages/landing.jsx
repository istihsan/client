import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Link, Container, Grid, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Video from '../img/video.mp4';
import logoProfindo from '../img/logoProfindoRB.png';

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
          <MenuItem onClick={handleClose}><Link href="#" color="inherit">Home</Link></MenuItem>
          <MenuItem onClick={handleCategoryClick}>
            Category
          </MenuItem>
          <Menu
            id="category-menu"
            anchorEl={categoryAnchorEl}
            keepMounted
            open={Boolean(categoryAnchorEl)}
            onClose={handleCategoryClose}
          >
            <MenuItem onClick={handleCategoryClose}><Link href="#" color="inherit">Accessories</Link></MenuItem>
            <MenuItem>
              <Link href="#" color="inherit">
                Aftermarket Suspension
              </Link>
            </MenuItem>
          </Menu>
          <MenuItem onClick={handleClose}><Link href="#" color="inherit">Order</Link></MenuItem>
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
      {/* Footer Start */}
      <Box component="footer" sx={{ backgroundColor: '#222', color: '#fff', py: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Shop</Typography>
              <ul>
                <li><Link href="#home" color="inherit">Home</Link></li>
                <li><Link href="#category" color="inherit">Categories</Link></li>
                <li><Link href="./order.html" color="inherit">Order</Link></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Catalog</Typography>
              <ul>
                <li><Link href="./catalogPage/FBS_catalog.html" color="inherit">Fixed Back Seats</Link></li>
                <li><Link href="./catalogPage/RS_catalog.html" color="inherit">Reclinable Seats</Link></li>
                <li><Link href="./catalogPage/RH_catalog.html" color="inherit">Racing Harnesses</Link></li>
                <li><Link href="./catalogPage/ACC_catalog.html" color="inherit">Accessories</Link></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Suspension Catalog</Typography>
              <ul>
                <li><Link href="#america" color="inherit">America</Link></li>
                <li><Link href="#asia" color="inherit">Asia</Link></li>
                <li><Link href="#europe" color="inherit">Europe</Link></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Follow Us</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit"><i className="ri-instagram-fill"></i></Link>
                <Link href="#" color="inherit"><i className="ri-facebook-fill"></i></Link>
                <Link href="#" color="inherit"><i className="ri-youtube-fill"></i></Link>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="inherit">
                  Copyright &copy; 2024 Speedster Autoworks. All Right Reserved
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
