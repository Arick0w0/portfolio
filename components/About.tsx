"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section
      id='about'
      className='relative py-20 min-h-screen flex items-center justify-center bg-black overflow-hidden'
    >
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "opacity-50"
        )}
      />

      {/* Radial gradient overlay */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column: Text & Stats */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-4xl md:text-5xl font-bold text-white mb-8'
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='space-y-6 text-gray-400 text-lg leading-relaxed'
            >
              <p>
                I&apos;m{" "}
                <span className='text-white font-semibold'>
                  Nanthavy Phommathep
                </span>
                , a Mobile Application Developer passionate about building
                modern, high-performance applications with an intuitive user
                experience.
              </p>
              <p>
                I enjoy working with the latest technologies like{" "}
                <span className='text-purple-400'>Flutter</span>,{" "}
                <span className='text-purple-400'>Dart</span>, and cloud-based
                development, blending creativity with precision to deliver
                impactful solutions.
              </p>
              <p>
                With experience in Clean Architecture and SOLID principles,
                I&apos;m committed to helping users and businesses grow in the
                digital era through functional, aesthetic, and scalable digital
                products.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='grid grid-cols-2 gap-8 mt-12'
            >
              <div>
                <h3 className='text-4xl font-bold text-white mb-2'>20+</h3>
                <p className='text-gray-500'>Projects Finished</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-white mb-2'>3+</h3>
                <p className='text-gray-500'>Years of Experience</p>
              </div>
              <div className='col-span-2 text-sm text-gray-600 mt-4 italic'>
                Working with heart, creating with mind.
              </div>
            </motion.div>
          </div>

          {/* Right Column: ID Card */}
          <div className='flex justify-center lg:justify-end relative'>
            {/* Lanyard String */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 200 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='absolute top-[-200px] left-1/2 w-1 bg-zinc-800 z-0'
            />

            <motion.div
              initial={{ y: -100, opacity: 0, rotate: -5 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.8,
              }}
              whileHover={{ rotate: 2, scale: 1.02 }}
              className='relative z-10 bg-[#0a0a0a] border border-zinc-800 p-6 rounded-2xl w-72 shadow-2xl shadow-purple-500/10 transform rotate-3'
            >
              {/* Card Hole */}
              <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-zinc-800 rounded-full' />

              <div className='flex flex-col items-center text-center mt-4'>
                <div className='w-32 h-32 bg-zinc-800 rounded-xl mb-4 overflow-hidden relative'>
                  {/* Placeholder for Profile Image */}
                  <div className='absolute inset-0 flex items-center justify-center text-4xl'>
                    👨‍💻
                  </div>
                </div>
                <h3 className='text-xl font-bold text-white'>Nanthavy P.</h3>
                <p className='text-purple-400 text-sm font-medium mb-6'>
                  Mobile Developer
                </p>

                <div className='w-full h-12 bg-white rounded-lg flex items-center justify-center'>
                  {/* Barcode simulation */}
                  <div className='flex gap-1 h-8 items-center px-4 w-full justify-between'>
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className='bg-black w-1 h-full'
                        style={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }}
                      />
                    ))}
                  </div>
                </div>
                <p className='text-xs text-gray-600 mt-2'>ID: 88392019</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
