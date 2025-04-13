import React from "react";
import Navbar from "../main/navbar";
import ContactUsMain from "./contactUsMain";
import WhatsAppFab from "../whatsappFAB/whatsappFAB";
import Footer from "../main/footer";
import { Box } from "@mui/material";

export default function ContactUs() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flex="1" mb={10}>
        <ContactUsMain />
      </Box>
      <Footer />
      <WhatsAppFab />
    </Box>
  );
}
