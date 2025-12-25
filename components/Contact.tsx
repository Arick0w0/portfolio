"use client";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { EncryptedText } from "./ui/encrypted-text";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-slate-950 to-black'
    >
      {/* Subtle background orbs */}
      <motion.div
        className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className='absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl'
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className='max-w-3xl mx-auto text-center relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent'
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-300 text-lg mb-12'
        >
          I&apos;m always open to new Flutter development opportunities and
          interesting mobile app projects. Feel free to reach out!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
        >
          <HoverBorderGradient
            as='a'
            href='mailto:your.email@example.com'
            className='px-8 py-3 text-white font-medium'
          >
            Send Email
          </HoverBorderGradient>
          <HoverBorderGradient
            as='a'
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-3 text-white font-medium'
          >
            GitHub
          </HoverBorderGradient>
          <HoverBorderGradient
            as='a'
            href='https://linkedin.com/in/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-3 text-white font-medium'
          >
            LinkedIn
          </HoverBorderGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='border-t border-gray-800 pt-8'
        >
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()}{" "}
            <EncryptedText text='Rick' className='text-gray-400' />. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
