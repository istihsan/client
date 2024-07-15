import React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import logoProfindo from '../../../img/logoProfindoRB.png';
import '@fontsource/poppins';

// NANTI PAKE DOUBLE TABS JADI TABS ATAS KATEGORI BAWAHNYA TYPENYA

export default function Navbar() {
    return(
        <>
        <Box sx={{overflow: 'hidden', maxWidth: '100%', backgroundColor:'#D9B05A', px:'10%', py: '2%'}}>
            <Grid container spacing={2}>
                <Grid item xs={1} sx={{fontFamily: 'Poppins, sans-serif'}}> <img src={logoProfindo} alt="ProfindoMD Logo" style={{ maxHeight: '40px' }} /></Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={1} sx={{color:'whitesmoke', mt:'0.5%'}}>
                    <Link href="/" color="inherit" style={{textDecoration: "none",}}><Typography sx={{fontFamily: 'Poppins, sans-serif',}}>Home</Typography></Link>
                </Grid>
                <Grid item xs={1} sx={{color:'whitesmoke', mt:'0.5%'}}>
                    <Link href="/aboutus" color="inherit" style={{textDecoration: "none"}}><Typography sx={{fontFamily: 'Poppins, sans-serif',}}>About Us</Typography></Link>
                </Grid>
                <Grid item xs={1} sx={{color:'whitesmoke', mt:'0.5%'}}>
                    <Link href="/categories" color="inherit" style={{textDecoration: "none",}}><Typography sx={{fontFamily: 'Poppins, sans-serif',}}>Categories</Typography></Link>
                </Grid>
                <Grid item xs={2} sx={{color:'whitesmoke'}}>
                    <Link href="/contactus" color="inherit" style={{textDecoration: "none",}}><Button variant="contained" sx={{fontFamily: 'Poppins, sans-serif', borderRadius: '60px' ,color:'#F7FFA', backgroundColor:'#FCC783'}}>Contact Us</Button></Link>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}