import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import GalleryMain from "./components/gallery/galleryMain";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";
import Box from "@mui/material/Box"; // Import Box from Material-UI

export default function Gallery() {
  return (
    <Box
      sx={{ backgroundColor: "#fff0DD", marginTop: "-1%", paddingTop: "2%" }}
    >
      <Navbar />
      <GalleryMain />
      <WhatsAppFab />
      <Footer />
    </Box>
  );
}
