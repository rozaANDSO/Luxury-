// app/contact/page.tsx
"use client"; // Add this if using client-side features

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form
      e.currentTarget.reset();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Get in Touch</h1>
          <p className="mb-12 text-lg text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>
        
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Roza belay"
                  className="mt-2 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-gold focus:ring-gold"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="luxury@example.com"
                  className="mt-2 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-gold focus:ring-gold"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message here..."
                  className="mt-2 block w-full rounded-lg border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-gold focus:ring-gold"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-gold to-amber-500 px-6 py-4 font-bold text-black shadow-lg transition-all hover:from-amber-500 hover:to-gold hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
