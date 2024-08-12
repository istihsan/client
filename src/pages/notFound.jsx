import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TractorPull from '../img/336094.png';
import Navbar from './components/main/navbar';
import Footer from './components/main/footer';
import WhatsAppFab from './components/whatsappFAB/whatsappFAB';


const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));


const Content = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f7e8', 
}));

const Tractor = styled(Box)(({ theme }) => ({
  width: '350px',
  height: '150px',
  backgroundImage: `url(${TractorPull})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  marginBottom: theme.spacing(4),
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  color: '#8B4513',
}));

function NotFound() {
  return (
    <MainContainer>
      <Navbar />
      <Content>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Tractor />
          </Grid>
          <Grid item sx={{marginTop:'-3.5%'}}>
            <ErrorText variant="h2">404 Error</ErrorText>
            <Typography variant="body1">Can't seem to PULL the webpage from anywhere...</Typography>
          </Grid>
        </Grid>
      </Content>
      <Footer />
      <WhatsAppFab/>
    </MainContainer>
  );
}

export default NotFound;
