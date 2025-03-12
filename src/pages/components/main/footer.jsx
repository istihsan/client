import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LogoProfindo from "../../../img/logoProfindoRB.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#cc0406", color: "#fff", py: 4 }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
            >
              <img src={LogoProfindo} alt="Logo" style={{ height: "auto" }} />
            </Box>
            <Typography variant="body2" sx={{ my: 2 }}>
              One stop solution for machineries.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Nuansa Asri Commercial No.A1 -03, Jurang Manggu Tim., Kec. Pd.
                Aren Kota Tangerang Selatan, Banten 15222
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+62 81230472183</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">info@profindomd.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Information
            </Typography>
            <Link
              href="/"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="/categories"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Categories
            </Link>
            <Link
              href="/gallery"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Gallery
            </Link>
            <Link
              href="/contactus"
              color="inherit"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={6} md={4} sx={{ minWidth: "45%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Products
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Tree Spades
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Beach Cleaning Machines
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Grass Collector Machines
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Grass Mower Machines
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Remote Controlled Grass Mower
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Litter Collection Equipment
                </Link>
              </Box>
              <Box>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Wood Chipper Machines
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Spading Machines
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Aerial Working Platform
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Truck Mounted Cranes
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Hydraulics Generator
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: "none" }}
                >
                  Zoo Technology
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" color="inherit" mt={2}>
          © 2024 Profindo Multi Dinamika. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

// // import React from "react";
// // import { Box, Typography, Container, Grid, Link } from "@mui/material";
// // import { Instagram, Facebook, Twitter } from '@mui/icons-material';
// // import LogoProfindo from '../../../img/logoProfindoRB.png'

// // export default function Footer() {
// //     return (
// //         <Box component="footer" sx={{ backgroundColor: '#2B3A4A', color: '#fff', py: 4, position: 'relative', bottom: 0, width: '100%', fontFamily: 'Quinoa, sans-serif' }}>
// //             <Container>
// //                 <Grid container spacing={4}>
// //                     <Grid item xs={12} sm={4}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
// //                           <img
// //                                 src={LogoProfindo}
// //                                 alt="Logo"
// //                                 style={{ height: 'auto' }}
// //                             />
// //                         </Box>
// //                         <Typography variant="body2" sx={{ mb: 2, mt: 2 }}>
// //                             One stop solution for machineries.
// //                         </Typography>
// //                     </Grid>
// //                     <Grid item xs={12} sm={4}>
// //                         <Typography variant="body1" sx={{ mb: 2 }}>
// //                             CONTACT US
// //                         </Typography>
// //                         <Typography variant="body2" sx={{ mb: 1 }}>
// //                             Profindo Multi Dinamika
// //                         </Typography>
// //                         <Typography variant="body2" sx={{ mb: 1 }}>
// //                             Nuansa Asri Commercial No.A1 -03, Jurang Manggu Tim., Kec. Pd. Aren
// //                         </Typography>
// //                         <Typography variant="body2" sx={{ mb: 1 }}>
// //                             Kota Tangerang Selatan, Banten 15222
// //                         </Typography>
// //                     </Grid>
// //                     <Grid item xs={12} sm={4}>
// //                         <Typography variant="body1" sx={{ mb: 2 }}>
// //                             SITEMAP
// //                         </Typography>
// //                         <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
// //                             <Box component="li" sx={{ mb: 1 }}>
// //                                 <Link href="/" color="inherit" sx={{ textDecoration: 'none' }}>Home</Link>
// //                             </Box>
// //                             <Box component="li" sx={{ mb: 1 }}>
// //                                 <Link href="/category" color="inherit" sx={{ textDecoration: 'none' }}>Category</Link>
// //                             </Box>
// //                             <Box component="li" sx={{ mb: 1 }}>
// //                                 <Link href="/contact-us" color="inherit" sx={{ textDecoration: 'none' }}>Contact Us</Link>
// //                             </Box>
// //                             <Box component="li" sx={{ mb: 1 }}>
// //                                 <Link href="/gallery" color="inherit" sx={{ textDecoration: 'none' }}>Gallery</Link>
// //                             </Box>
// //                         </Box>
// //                     </Grid>
// //                 </Grid>
// //                 <Grid container spacing={4} sx={{ mt: 4 }}>
// //                     <Grid item xs={12} sm={4}>
// //                         <Typography variant="body2">FOLLOW US</Typography>
// //                         <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
// //                             <Link href="#" color="inherit"><Instagram /></Link>
// //                             <Link href="#" color="inherit"><Facebook /></Link>
// //                             <Link href="#" color="inherit"><Twitter /></Link>
// //                         </Box>
// //                     </Grid>
// //                     <Grid item xs={12} sm={4}>
// //                         <Typography variant="body2">CALL US</Typography>
// //                         <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>+62 851 5165 2312</Typography>
// //                     </Grid>
// //                 </Grid>
// //             </Container>
// //             <Box sx={{ borderTop: '1px solid #3D4B5A', mt: 4, pt: 2, textAlign: 'center' }}>
// //                 <Typography variant="body2" color="inherit">
// //                     © 2024 Profindo Multi Dinamika. All Rights Reserved
// //                 </Typography>
// //             </Box>
// //         </Box>
// //     );
// // }

// import React from "react";
// import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
// import { Facebook, Twitter, RssFeed } from '@mui/icons-material';
// import GoogleIcon from '@mui/icons-material/Google';
// import FlickrIcon from '@mui/icons-material/Camera';
// import LogoProfindo from '../../../img/logoProfindoRB.png';
// import '@fontsource-variable/lexend';

// export default function Footer() {
//     return (
//         <Box component="footer" sx={{ backgroundColor: '#1c1c1c', color: '#fff', py: 4, fontFamily: 'Lexend, sans-serif' }}>
//             <Container>
//                 <Grid container spacing={2} alignItems="flex-start">
//                     <Grid item xs={12} sm={3}>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                             <img src={LogoProfindo} alt="Logo" style={{ height: '40px', marginBottom: '8px' }} />
//                             <Typography variant="body2">One stop solution for machineries.</Typography>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={6} sm={2}>
//                         <Typography variant="subtitle2" sx={{ mb: 1 }}>About</Typography>
//                         <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>FAQS</Link>
//                         <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none'}}>About</Link>
//                     </Grid>
//                     <Grid item xs={6} sm={2}>
//                         <Typography variant="subtitle2" sx={{ mb: 1 }}>Home</Typography>
//                         <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none'}}>Category</Link>
//                         <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Contact Us</Link>
//                         <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none'}}>Gallery</Link>
//                     </Grid>
//                     <Grid item xs={6} sm={2}>
//                         <Typography variant="subtitle2" sx={{ mb: 1 }}>SHOWCASE</Typography>
//                         <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Tree Spades</Link>
//                         <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none'}}>Tree Spades</Link>

//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                         <Typography variant="subtitle2" sx={{ mb: 1 }}>ABOUT US</Typography>
//                         <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Tree Spades</Link>
//                         <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Tree Spade</Link>
//                         <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none'}}>Tree Spade</Link>
//                     </Grid>
//                 </Grid>
//                 <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 2, textAlign: 'center' }}>
//                     <Box sx={{ mb: 2 }}>
//                         <IconButton color="inherit" aria-label="Facebook"><Facebook /></IconButton>
//                         <IconButton color="inherit" aria-label="Twitter"><Twitter /></IconButton>
//                         <IconButton color="inherit" aria-label="RSS"><RssFeed /></IconButton>
//                         <IconButton color="inherit" aria-label="Google"><GoogleIcon /></IconButton>
//                         <IconButton color="inherit" aria-label="Flickr"><FlickrIcon /></IconButton>
//                     </Box>
//                     <Typography variant="body2" color="inherit">
//                     © 2024 Profindo Multi Dinamika. All Rights Reserved
//                     </Typography>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }
