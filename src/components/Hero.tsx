// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/portfolio/hero-bg.jpg"
          alt="Luxury Portfolio Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className={`${playfair.className} text-5xl font-bold text-white md:text-7xl lg:text-8xl`}>
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                Luxury Digital
              </span>
              <span className="block bg-gradient-to-r from-emerald-200 via-white to-emerald-200 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12 text-xl text-gray-200 md:text-2xl"
          >
            Transforming luxury brands with sophisticated digital solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center gap-6"
          >
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-emerald-700 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">View Our Portfolio</span>
              <div className="absolute inset-0 -z-10 bg-emerald-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="h-40 w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent" />
      </div>
      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="h-40 w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent" />
      </div>
    </div>
  );
}
