import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

type GalleryImage = {
  url: string;
  title: string;
};

type GalleryProps = {
  title?: string;
  description?: string;
  images: GalleryImage[];
};

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-6"
      >
        <h3 className="text-white font-semibold text-xl">{image.title}</h3>
      </motion.div>
    </motion.div>
  );
}

export function Gallery({ title, description, images }: GalleryProps) {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <section id="gallery-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {title || 'Nuestra Galería'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description || 'Descubre algunos de nuestros trabajos más recientes'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Ver Más Trabajos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
