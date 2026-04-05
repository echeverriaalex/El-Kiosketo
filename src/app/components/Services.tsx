import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cake, Heart, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Cake,
    title: 'Cumpleaños de 15',
    description: 'Mesas dulces elegantes y sofisticadas para celebrar este momento único. Personalizamos cada detalle según tus colores y temática.',
    color: 'from-pink-400 to-rose-500',
    image: 'https://images.unsplash.com/photo-1705276920624-cd72e0f89dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhbmVyYSUyMHBhcnR5JTIwZGVzc2VydHN8ZW58MXx8fHwxNzc0ODIxMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Heart,
    title: 'Casamientos',
    description: 'Candy bars exclusivos que complementan perfectamente tu gran día. Diseños refinados que sorprenderán a tus invitados.',
    color: 'from-purple-400 to-indigo-500',
    image: 'https://images.unsplash.com/photo-1574004897612-c6bbad355614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FuZHklMjB0YWJsZXxlbnwxfHx8fDE3NzQ4MjEwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sparkles,
    title: 'Eventos de Bautismo',
    description: 'Experiencias sensoriales adaptadas con golosinas seleccionadas especialmente. Creamos ambientes inclusivos y seguros.',
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1772411534568-1fe0c61b21a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ4MjEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sparkles,
    title: 'Eventos Infantiles',
    description: 'Experiencias sensoriales adaptadas con golosinas seleccionadas especialmente. Creamos ambientes inclusivos y seguros.',
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1772411534568-1fe0c61b21a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ4MjEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sparkles,
    title: 'Eventos Empresariales',
    description: 'Experiencias sensoriales adaptadas con golosinas seleccionadas especialmente. Creamos ambientes inclusivos y seguros.',
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1772411534568-1fe0c61b21a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ4MjEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sparkles,
    title: 'Tu Cumpleaños',
    description: 'Experiencias sensoriales adaptadas con golosinas seleccionadas especialmente. Creamos ambientes inclusivos y seguros.',
    color: 'from-blue-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1772411534568-1fe0c61b21a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ4MjEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
          className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>

        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold flex items-center gap-2 group"
        >
          Más información
          <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function Services() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Especializados en crear experiencias dulces únicas para cada tipo de celebración
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
