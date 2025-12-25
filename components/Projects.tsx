"use client";

import { BackgroundGradient } from "./ui/background-gradient";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Taxi Driver App",
    description: "Real-time navigation system with trip tracking for taxi drivers, integrated with backend services.",
    technologies: ["Flutter", "Dart", "BLoC", "Firebase", "Google Maps"],
  },
  {
    title: "Food Delivery App",
    description: "Complete food delivery solution with order management, real-time delivery tracking, and customer notifications.",
    technologies: ["Flutter", "GetX", "REST API", "Firebase", "WebSocket"],
  },
  {
    title: "Smart ODS App",
    description: "Multi-service app allowing users to submit online forms to request import quotas and track application status in real-time.",
    technologies: ["Flutter", "Riverpod", "Dynamic Forms", "REST API"],
  },
  {
    title: "DOTP App",
    description: "App for importers to request quotas with dynamic forms and monitor application steps in real-time.",
    technologies: ["Flutter", "BLoC", "Dynamic Forms", "Firebase"],
  },
  {
    title: "EV Charging App",
    description: "Displays real-time status of EV charging stations with live availability updates.",
    technologies: ["Flutter", "REST API", "WebSocket", "Google Maps"],
  },
  {
    title: "Express & Logistics App",
    description: "Parcel delivery and bus trip management with real-time tracking, passenger notifications, and ticket scanning.",
    technologies: ["Flutter", "GetX", "WebSocket", "Firebase", "QR Scanner"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16 text-lg"
        >
          Here are some of my recent works
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <BackgroundGradient className="rounded-[22px] p-6 bg-zinc-900 h-full">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200">
                    View Project
                  </button>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
