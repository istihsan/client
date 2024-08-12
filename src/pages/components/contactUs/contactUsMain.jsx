import React, { useState } from 'react';
import { Container, Grid, Typography, Box, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactUsMain() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <Container maxWidth="lg" style={{ height: '90vh', marginTop: '5%' }}>
      <Grid container spacing={3} style={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
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

        <Grid item xs={12}>
          <Box
            my={4}
            p={3}
            border={1}
            borderColor="divider"
            borderRadius="8px"
            boxShadow={3}
          >
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUsMain;
