"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Tag3d from "./testcard";

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
                <h3 className='text-4xl font-bold text-white mb-2'>7+</h3>
                <p className='text-gray-500'>Projects Finished</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-white mb-2'>1+</h3>
                <p className='text-gray-500'>Years of Experience</p>
              </div>
              <div className='col-span-2 text-sm text-gray-600 mt-4 italic'>
                Working with heart, creating with mind.
              </div>
            </motion.div>
          </div>
          <Tag3d />

          {/* Right Column: ID Card */}
          {/* Lanyard String */}
          {/* <div>
            <Tag3d />
          </div> */}
        </div>
      </div>
    </section>
  );
}
