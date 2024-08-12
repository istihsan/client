import Navbar from './components/main/navbar';
import Footer from './components/main/footer';
import GalleryMain from './components/gallery/galleryMain';
import WhatsAppFab from './components/whatsappFAB/whatsappFAB';


export default function Gallery() {
    return (
        <>
        <Navbar />
        <GalleryMain/>
        <WhatsAppFab/>
        <Footer />
        </>
    )
}