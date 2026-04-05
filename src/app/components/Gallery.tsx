import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1767479003771-04aff4ba6d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMGJhciUyMGNvbG9yZnVsJTIwc3dlZXRzfGVufDF8fHx8MTc3NDgyMTAyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Candy Bar Colorido',
  },
  {
    url: 'https://images.unsplash.com/photo-1574004897612-c6bbad355614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FuZHklMjB0YWJsZXxlbnwxfHx8fDE3NzQ4MjEwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mesa de Casamiento',
  },
  {
    url: 'https://images.unsplash.com/photo-1772411534568-1fe0c61b21a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ4MjEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Macarons Artesanales',
  },
  {
    url: 'https://images.unsplash.com/photo-1764380746818-18c01e96df12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0cyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0ODIxMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Postres de Chocolate',
  },
  {
    url: 'https://images.unsplash.com/photo-1770021999036-53291a3a6596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHNob3AlMjBhc3NvcnRtZW50fGVufDF8fHx8MTc3NDgyMTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Surtido de Golosinas',
  },
  {
    url: 'https://images.unsplash.com/photo-1705276920624-cd72e0f89dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhbmVyYSUyMHBhcnR5JTIwZGVzc2VydHN8ZW58MXx8fHwxNzc0ODIxMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Dulces Personalizados',
  },
];

function GalleryItem({ image, index }: { image: typeof galleryImages[0]; index: number }) {
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

export function Gallery() {
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
            Nuestra Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más recientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
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
