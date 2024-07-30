import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import '@fontsource/poppins';

export default function Footer() {
    return (

    <Box component="footer" sx={{ backgroundColor: '#435525', color: '#fff', py: 4 }}>
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
    )
}