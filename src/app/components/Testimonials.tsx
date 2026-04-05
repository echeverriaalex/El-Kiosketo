import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    event: 'Cumpleaños de 15',
    text: 'Increíble trabajo! La mesa dulce fue el centro de atención en la fiesta de mi hija. Todo estaba hermoso y delicioso.',
    rating: 5,
  },
  {
    name: 'Juan y Laura Martínez',
    event: 'Casamiento',
    text: 'El candy bar superó todas nuestras expectativas. Los invitados no dejaban de elogiarlo. 100% recomendable.',
    rating: 5,
  },
  {
    name: 'Familia Rodríguez',
    event: 'Evento de Autismo',
    text: 'Entendieron perfectamente las necesidades de nuestro hijo. Crearon un espacio seguro y lleno de color. Gracias!',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white p-8 rounded-3xl shadow-xl relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
        className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
      >
        <Quote className="w-6 h-6 text-white" />
      </motion.div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.event}</p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor premio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
