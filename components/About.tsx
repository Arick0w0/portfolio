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
      className='relative pt-20 min-h-screen flex items-center justify-center bg-black overflow-hidden'
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

        <div className='lg:relative grid   grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(180px,auto)]'>
          {/* lift */}
          <div className='order-2  md:order-1  grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-2'>
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

          </div>
          {/* rigth */}
          <div className='hidden lg:block lg:absolute w-full h-full z-20  order-1 md:order-2'>
            {/* 2. 3D Tag - Tall Card */}
            <div className='md:col-span-2 md:row-span-3 relative lg:h-full min-h-[400px] md:min-h-0 rounded-3xl   overflow-hidden'>
              <div className='absolute inset-0 flex justify-left items-center w-full h-full'>
                <Tag3d />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
