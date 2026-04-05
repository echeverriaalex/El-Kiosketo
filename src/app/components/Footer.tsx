import { motion } from 'motion/react';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 fill-white text-white" />
              </div>
              <span className="text-xl font-bold">Dulces Momentos</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creando experiencias dulces inolvidables para tus momentos más especiales.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Cumpleaños de 15</li>
              <li className="hover:text-white transition-colors cursor-pointer">Casamientos</li>
              <li className="hover:text-white transition-colors cursor-pointer">Eventos de Autismo</li>
              <li className="hover:text-white transition-colors cursor-pointer">Eventos Corporativos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://www.instagram.com/elkiosketo.eventos"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://www.facebook.com/profile.php?id=100089980947356"
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="mailto:karlita_1985jui@icloud.com"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Dulces Momentos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
