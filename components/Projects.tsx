"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Taxi Driver App",
    description:
      "Real-time navigation system with trip tracking for taxi drivers, integrated with backend services.",
    technologies: ["Flutter", "Dart", "BLoC", "Firebase", "Google Maps"],
    image: "taxiDriver.png",
    className: "md:col-span-2",
  },
  {
    title: "Food Delivery App",
    description:
      "Complete food delivery solution with order management, real-time delivery tracking, and customer notifications.",
    technologies: ["Flutter", "GetX", "REST API", "Firebase", "WebSocket"],
    image: "foodCustomer.png",
    className: "md:col-span-1",
  },
  {
    title: "Smart ODS App",
    description:
      "Multi-service app allowing users to submit online forms to request import quotas and track application status in real-time.",
    technologies: ["Flutter", "Riverpod", "Dynamic Forms", "REST API"],
    image: "smartOds.png",
    className: "md:col-span-1",
  },
  {
    title: "DOTP App",
    description:
      "App for importers to request quotas with dynamic forms and monitor application steps in real-time.",
    technologies: ["Flutter", "BLoC", "Dynamic Forms", "Firebase"],
    image: "dtop.png",
    className: "md:col-span-2",
  },
  {
    title: "EV Charging App",
    description:
      "Displays real-time status of EV charging stations with live availability updates.",
    technologies: ["Flutter", "REST API", "WebSocket", "Google Maps"],
    image: "ev.png",
    className: "md:col-span-2",
  },
  {
    title: "Express & Logistics App",
    description:
      "Parcel delivery and bus trip management with real-time tracking, passenger notifications, and ticket scanning.",
    technologies: ["Flutter", "GetX", "WebSocket", "Firebase", "QR Scanner"],
    image: "expressDiver.png",
    className: "md:col-span-1",
  },
  {
    title: "Taxi Customer App",
    description:
      "Client application for booking rides, real-time driver tracking, and secure in-app payments.",
    technologies: ["Flutter", "Google Maps", "Firebase", "Payment Gateway"],
    image: "taxiCsteom.png",
    className: "md:col-span-1",
  },
  {
    title: "Food Driver App",
    description:
      "Dedicated app for delivery partners to manage orders, navigate to customers, and track earnings.",
    technologies: ["Flutter", "Google Maps", "Real-time DB", "GetX"],
    image: "foodDiver.png",
    className: "md:col-span-1",
  },
  {
    title: "Logistics Customer App",
    description:
      "User-friendly app for tracking parcels, booking bus tickets, and managing delivery history.",
    technologies: ["Flutter", "QR Scanner", "Payment Gateway", "FCM"],
    image: "customerExpress.png",
    className: "md:col-span-1",
  },
];

export default function Projects() {
  return (
    <section id='projects' className='bg-black py-32 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
            Selected Works
          </h2>
          <p className='text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto'>
            A collection of high-performance mobile applications built with
            Flutter
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(project.className)}
            >
              <BackgroundGradient className='h-full rounded-[22px] bg-zinc-900 p-6 flex flex-col'>
                {/* Image Container */}
                <div className='relative h-64 md:h-80 w-full overflow-hidden rounded-2xl mb-6'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10' />
                  <Image
                    src={`${
                    process.env.NODE_ENV === "production" ? "/portfolio_1" : ""
                    }/images/${project.image}`}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col'>
                  <div className='flex justify-between items-start mb-3'>
                    <h3 className='text-2xl font-bold text-white'>
                      {project.title}
                    </h3>
                    <div className='p-2 rounded-full bg-white/10 backdrop-blur-sm'>
                      <ArrowUpRight className='w-4 h-4 text-white' />
                    </div>
                  </div>

                  <p className='text-neutral-300 text-sm mb-4 flex-1'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-neutral-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
