"use client";

import { EncryptedText } from "./ui/encrypted-text";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { motion } from "framer-motion";
import { Snowfall } from "react-snowfall";

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 to-black'>
      <div className='absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]' />
      <Snowfall />
      {/* Subtle gradient orbs */}
      <motion.div
        className='absolute top-40 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className='absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-6'
        >
          <h1 className='text-4xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent'>
            Hi, I'm{" "}
            <EncryptedText
              text='Nanthavy Phommathep'
              className='bg-gradient-to-br from-cyan-400 to-purple-600 bg-clip-text text-transparent'
            />
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'
        >
          Mobile Application Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto'
        >
          Specializing in Flutter development with Clean Architecture and SOLID
          Principles
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-wrap gap-4 justify-center'
        >
          <HoverBorderGradient
            as='a'
            href='#projects'
            className='px-8 py-3 text-white font-medium'
          >
            View My Work
          </HoverBorderGradient>
          <HoverBorderGradient
            as='a'
            href='#contact'
            className='px-8 py-3 text-white font-medium'
          >
            Get In Touch
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}
