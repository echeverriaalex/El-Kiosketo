import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { galleryProductsImages, galleryExperienceImages } from '../utils/GalleryImages';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery
        title="Nuestra Galería"
        description="Descubre algunos de nuestros trabajos más recientes"
        images={galleryExperienceImages}
      />
      <Gallery
        title="Nuestros Productos"
        description="Descubre algunos de nuestros productos más populares"
        images={galleryProductsImages}
      />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}