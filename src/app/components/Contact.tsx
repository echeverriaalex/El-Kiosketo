import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+54 223 540-1000',
    link: 'tel:+542235401000',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    content: '+54 223 540-1000',
    link: 'https://wa.me/542235401000',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    content: '@elkiosketo.eventos',
    link: 'https://www.instagram.com/elkiosketo.eventos',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: PiTiktokLogoBold,
    title: 'TikTok',
    content: '@elkiosketo.eventos',
    link: 'https://www.tiktok.com/@elkiosketo.eventos',
    color: 'from-slate-900 to-slate-950',
  },


  /*
  {
    icon: Mail,
    title: 'Email',
    content: 'info@dulcesmomentos.com',
    color: 'from-blue-400 to-cyan-500',
  },
  */
 {
    icon: MapPin,
    title: 'Ubicación',
    content: 'Rawson 3274 - Oficina 803, Mar del Plata',
    color: 'from-pink-400 to-rose-500',
    link: 'https://maps.app.goo.gl/uCoGRgejNEs5Yyvi7'
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lun - Sab: 9:00 - 20:00',
    color: 'from-emerald-400 to-teal-500',
  }
];

export function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const initialOffset = 24;

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para hacer realidad el evento de tus sueños
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -initialOffset }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -initialOffset }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de evento
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all">
                  <option>Cumpleaños de 15</option>
                  <option>Casamiento</option>
                  <option>Evento de Autismo</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu evento..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Enviar Consulta
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: initialOffset }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialOffset }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-2 hover:shadow-xl transition-shadow duration-300"
                  href={info?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white"
        >
          <h4 className="text-2xl font-bold mb-4">¿Listo para empezar?</h4>
          <p className="mb-6 opacity-90">
            Agenda una consulta gratuita y descubre cómo podemos hacer tu evento inolvidable
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Agendar Consulta
          </motion.button>
        </motion.div>


      </div>
    </section>
  );
}


<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.9565336047438!2d-57.56020160056171!3d-38.00451571546566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dea58cc8c867%3A0x9469dc40b7895487!2sRawson%203274%2C%20B7600FFR%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1776482030792!5m2!1ses!2sar"
  width="800"
  height="600"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>




