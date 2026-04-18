import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

import video1 from '../../../assets/videos/video1.mov';

export function Demo() {
    const titleRef = useRef("demo");
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
                    Nosotros en acción
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Un vistazo real de como llevamos color, sabor y alegria a cada evento!
                </p>
            </motion.div>
            <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
                <video
                    className="h-full w-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src={video1} type="video/mp4" />
                    Tu navegador no soporta la reproduccion de video.
                </video>
            </div>
            </div>
        </section>
    );
}