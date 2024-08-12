import React from "react";
import Navbar from "./components/main/navbar";
import Footer from './components/main/footer';
import VariantMain from "./components/variant/variantMain";
import { Box } from '@mui/material';
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";

export default function Variant() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Navbar />
            <Box
                sx={{
                    flex: '1 0 auto',
                    marginTop: '64px',
                }}
            >
                <VariantMain />
            </Box>
            <Box sx={{ flexShrink: 0 }}>
                <Footer />
                <WhatsAppFab/>
            </Box>
        </Box>
    );
}
