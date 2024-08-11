import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactUsMain() {
  return (
    <Container maxWidth="lg" style={{ height: '90vh', marginTop: '5%'}}>
      <Grid container spacing={3} style={{ height: '100%' }}>

        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Box mt={4}>
              <Typography variant="h6">
                <LocationOnIcon /> Address
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Nuansa Asri Commercial No.A1 -03, Jurang Manggu Tim., Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15222
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h6">
                <EmailIcon /> Email
              </Typography>
              <Typography variant="body1" color="textSecondary">
                info@example.com
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h6">
                <PhoneIcon /> Phone
              </Typography>
              <Typography variant="body1" color="textSecondary">
                +1 234 567 8900
              </Typography>
            </Box>
          </Box>
        </Grid>


        <Grid item xs={12} md={6}>
          <Box height="100%">
            <iframe
              title="Profindo Multi Dinamika Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.175703461697!2d106.7368476!3d-6.2579443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa9e4d3b1c27%3A0xa96b55a56f26b7e1!2sPT%20Profindo%20Multi%20Dinamika!5e0!3m2!1sen!2sid!4v1723365277880!5m2!1sen!2sid"
              width="100%"
              height="90%"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUsMain;