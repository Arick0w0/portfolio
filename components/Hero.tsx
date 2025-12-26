"use client";

import { EncryptedText } from "./ui/encrypted-text";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "./test";

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 lg:py-0'>
      <div className='w-full absolute inset-0 h-screen'></div>

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

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center'>
        {/* Left Column: Text */}
        <div className='text-center lg:text-left'>
          {/* Quote Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            <span className='text-xs text-gray-400'>Available for work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-6'
          >
            <h1 className='text-4xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent leading-tight'>
              Hi I&apos;m <br />
              <EncryptedText
                text='Nanthavy Phommathep'
                className='bg-gradient-to-br from-cyan-400 to-purple-600 bg-clip-text text-transparent'
              />
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed'
          >
            Mobile Application Developer specializing in Flutter & Dart. I build
            high-performance, scalable, and beautiful mobile applications with
            Clean Architecture and SOLID Principles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-wrap gap-4 justify-center lg:justify-start'
          >
            <button className='px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors'>
              Download CV
            </button>
            <button className='px-8 py-3 rounded-full border border-zinc-700 text-white font-medium hover:bg-zinc-900 transition-colors'>
              Explore My Projects
            </button>
          </motion.div>
        </div>

        {/* Right Column: Profile Card */}
        <div className='flex justify-center lg:justify-end'>
          {/* <CardContainer className='inter-var'>
            <CardBody className='bg-zinc-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] border-zinc-800 w-auto sm:w-[22rem] h-auto rounded-3xl p-6 border backdrop-blur-sm'>
              <div className='text-center mb-6'>
                <CardItem
                  translateZ='50'
                  className='text-2xl font-bold text-white'
                >
                  Nanthavy P.
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-purple-400 text-sm font-medium'
                >
                  Mobile Developer
                </CardItem>
              </div>


              <div className='flex justify-between items-center bg-black/40 rounded-2xl p-3 border border-zinc-800'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center'>
                    <User className='w-5 h-5 text-gray-400' />
                  </div>
                  <div>
                    <p className='text-xs text-gray-400'>@nanthavy</p>
                    <div className='flex items-center gap-1'>
                      <span className='w-1.5 h-1.5 rounded-full bg-green-500'></span>
                      <p className='text-[10px] text-green-500 font-medium'>
                        Online
                      </p>
                    </div>
                  </div>
                </div>

                <CardItem
                  translateZ={20}
                  as='button'
                  className='px-4 py-2 rounded-xl bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-700 transition-colors'
                >
                  Contact Me
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        */}
          <ThreeDCardDemo />
        </div>
      </div>
    </section>
  );
}
