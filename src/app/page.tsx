"use client";

import Hero from "@/components/Hero";
import { Playfair_Display, Montserrat } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { PORTFOLIO_CATEGORIES } from "@/constants/portfolio"; // ✅ Correct

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${montserrat.className} overflow-hidden`}>
      <Hero />

      {/* Introduction Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 via-white to-white" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 ${playfair.className} text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl`}
            >
              <span className="block">Elevating Luxury Brands</span>
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                in the Digital Age
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12 text-xl leading-relaxed text-gray-600"
            >
              We blend sophisticated design with strategic innovation to create
              compelling digital narratives for luxury brands. Our bespoke solutions
              ensure your brand's essence resonates across every digital touchpoint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6"
            >
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-navy px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">View Our Portfolio</span>
                <div className="absolute inset-0 -z-10 bg-emerald-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-navy px-8 py-4 text-lg font-bold text-navy transition-all hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-white">Contact Us</span>
                <div className="absolute inset-0 -z-10 bg-navy opacity-0 transition-all group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-16 text-center ${playfair.className} text-4xl font-bold text-white md:text-5xl`}
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(PORTFOLIO_CATEGORIES) &&
              PORTFOLIO_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/portfolio?category=${category.id}`}
                    className="group block overflow-hidden rounded-lg bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <h3 className={`mb-4 ${playfair.className} text-2xl font-semibold text-white`}>
                      {category.displayTitle}
                    </h3>
                    <p className="mb-6 text-gray-300">{category.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-emerald-400">
                      View Projects
                      <svg
                        className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
