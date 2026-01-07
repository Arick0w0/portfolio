"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Tag3d from "./testcard";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  Code2,
  Database,
  Layout,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";

export default function About() {
  return (
    <section
      id='about'
      className='relative py-20 min-h-screen flex items-center justify-center bg-black overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12'
        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            About <span className='text-purple-500'>Me</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl'>
            Get to know the developer behind the code.
          </p>
        </motion.div>

        <div className='lg:relative grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(180px,auto)]'>
          {/* lift */}
          <div className='order-2  md:order-1  grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-2'>
             <div className='md:col-span-4 md:row-span-2'>
            <BackgroundGradient className='rounded-[22px] h-full p-8 bg-zinc-900 overflow-hidden'>
              <h3 className='text-2xl font-bold text-white mb-4'>Who am I?</h3>
              <div className='space-y-4 text-gray-300 leading-relaxed'>
                <p>
                  I&apos;m{" "}
                  <span className='text-purple-400 font-semibold'>
                    Nanthavy Phommathep
                  </span>
                  , a passionate Mobile Application Developer based in Laos. I
                  specialize in building high-performance, cross-platform
                  applications using <span className='text-white'>Flutter</span>{" "}
                  and <span className='text-white'>Dart</span>.
                </p>
                <p>
                  My journey involves crafting intuitive user experiences and
                  robust architectures. I believe in{" "}
                  <span className='text-white'>Clean Architecture</span> and{" "}
                  <span className='text-white'>SOLID principles</span> to ensure
                  code scalability and maintainability.
                </p>
                <p>
                  Beyond coding, I&apos;m constantly exploring new technologies
                  and cloud-based solutions to deliver impactful digital
                  products that help businesses grow.
                </p>
              </div>
            </BackgroundGradient>
          </div>

          

          {/* 3. Stats - Small Cards */}
          <div className='flex md:col-span-4 py-6 justify-between gap-6 mt-6 md:mt-0 grid grid-cols-2 md:grid-cols-4'>
            <motion.div
            whileHover={{ scale: 1.02 }}
            className='md:col-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors'
          >
            <div className='w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors'>
              <Smartphone className='w-6 h-6 text-purple-400' />
            </div>
            <h4 className='text-4xl font-bold text-white mb-1'>9+</h4>
            <p className='text-sm text-gray-400'>Mobile Apps Launched</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className='md:col-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-center items-center text-center group hover:border-blue-500/50 transition-colors'
          >
            <div className='w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors'>
              <Code2 className='w-6 h-6 text-blue-400' />
            </div>
            <h4 className='text-4xl font-bold text-white mb-1'>1+</h4>
            <p className='text-sm text-gray-400'>Years Experience</p>
          </motion.div>
          </div>

          {/* 4. Tech Stack - Wide Card */}
          <div className='md:col-span-4 bg-zinc-900 rounded-3xl p-8 border border-zinc-800'>
            <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
              <Zap className='w-5 h-5 text-yellow-400' />
              Tech Stack & Tools
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                { name: "Flutter", icon: Smartphone },
                { name: "Dart", icon: Terminal },
                { name: "Firebase", icon: Database },
                { name: "Figma", icon: Layout },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50'
                >
                  <tech.icon className='w-5 h-5 text-gray-400' />
                  <span className='text-gray-200 font-medium'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
          {/* rigth */}
          <div className='lg:absolute w-full h-full z-20  order-1 md:order-2'>
            {/* 2. 3D Tag - Tall Card */}
          <div className='md:col-span-2 md:row-span-3 relative lg:h-full min-h-[500px] md:min-h-0 rounded-3xl   overflow-hidden'>
            <div className='absolute inset-0 flex justify-left items-center w-full h-full'>
              <Tag3d />
            </div>
            <div className='absolute bottom-4 left-0 right-0 text-center pointer-events-none'>
              <p className='text-xs text-gray-500 uppercase tracking-widest'>
                Interactive 3D Card
              </p>
            </div>
          </div>
          </div>
          {/* 1. Main Bio - Large Card */}
         

          {/* 5. Quote - Full Width Bottom */}
          <div className='order-3 md:col-span-6 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl p-8 border border-indigo-500/20 flex items-center justify-center text-center'>
            <div>
              <p className='text-xl md:text-2xl font-medium text-white italic mb-2'>
                &quot;Working with heart, creating with mind.&quot;
              </p>
              <p className='text-indigo-300 text-sm'>- My Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
