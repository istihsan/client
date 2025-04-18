import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Divider
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function ContactUsMain() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:profindo.md@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "auto",
        marginTop: { xs: "10%", md: "5%" },
        paddingX: { xs: 2, md: 0 }
      }}
    >
      <Grid container spacing={3} sx={{ height: "100%" }}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
            sx={{
              textAlign: { xs: "center", md: "left" },
              paddingX: { xs: 2, md: 0 }
            }}
          >
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Divider
              sx={{
                borderColor: "#EB0B0D",
                borderWidth: "2px",
                width: { xs: "50%", md: "35%" }, // Adjust width for smaller screens
                marginX: { xs: "auto", md: 0 } // Center on small screens
              }}
            />
            <Box mt={4}>
              <Typography variant="h6">
                <LocationOnIcon /> Address
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Nuansa Asri Commercial No.A1 -03, Jurang Manggu Tim., Kec. Pd.
                Aren, Kota Tangerang Selatan, Banten 15222
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h6">
                <EmailIcon /> Email
              </Typography>
              <Typography variant="body1" color="textSecondary">
                profindo.md@gmail.com
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h6">
                <PhoneIcon /> Phone
              </Typography>
              <Typography variant="body1" color="textSecondary">
                (+62) 813 1011 1715 /// (+62) 21 7349 2072
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
        <Divider
          variant="middle"
          sx={{
            mt: "5%",
            borderColor: "#EB0B0D",
            borderWidth: "2px",
            width: "90%",
            marginX: "auto"
          }}
        />
        <Grid item xs={12}>
          <Box
            mb={4}
            p={{ xs: 2, md: 3 }} // Adjust padding for smaller screens
            border={1}
            borderColor="divider"
            borderRadius="8px"
            boxShadow={3}
          >
            <Typography
              variant="h5"
              gutterBottom
              textAlign={{ xs: "center", md: "left" }}
            >
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      width: { xs: "100%", md: "auto" }, // Full width on small screens
                      display: "block",
                      marginX: { xs: "auto", md: 0 } // Center on small screens
                    }}
                  >
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
