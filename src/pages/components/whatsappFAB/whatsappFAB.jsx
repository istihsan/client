// src/components/WhatsAppFab.js

import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/system";

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: "#25D366",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#128C7E"
  }
}));

const WhatsAppFab = () => {
  const message = "Hello, May I ask about the Tree Spades ?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6281287874415430?text=${encodedMessage}`;

  return (
    <StyledFab
      href={whatsappUrl} // Phone number should include country code, without '+'.
      target="_blank"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
    </StyledFab>
  );
};

export default WhatsAppFab;
