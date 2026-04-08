import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { galleryImages } from '../app/utils/GalleryImages';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery
        title="Nuestra Galería"
        description="Descubre algunos de nuestros trabajos más recientes"
        images={galleryImages}
      />
      <Gallery
        title="Nuestros Productos"
        description="Descubre algunos de nuestros productos más populares"
        images={galleryImages}
      />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
