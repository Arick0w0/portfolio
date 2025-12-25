"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Layout, 
  GitBranch, 
  Terminal, 
  Figma, 
  Layers,
  Cpu,
  Globe,
  Server,
  Wifi
} from "lucide-react";

const skills = [
  {
    name: "Flutter",
    category: "Mobile Framework",
    icon: Smartphone,
  },
  {
    name: "Dart",
    category: "Language",
    icon: Code2,
  },
  {
    name: "Clean Architecture",
    category: "Design Pattern",
    icon: Layers,
  },
  {
    name: "BLoC / GetX",
    category: "State Management",
    icon: Cpu,
  },
  {
    name: "Firebase",
    category: "Backend as a Service",
    icon: Database,
  },
  {
    name: "REST API",
    category: "Data Integration",
    icon: Globe,
  },
  {
    name: "WebSocket",
    category: "Real-time",
    icon: Wifi,
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    icon: GitBranch,
  },
  {
    name: "CI/CD",
    category: "DevOps",
    icon: Server,
  },
  {
    name: "Figma",
    category: "Design Tool",
    icon: Figma,
  },
  {
    name: "VS Code",
    category: "Code Editor",
    icon: Terminal,
  },
  {
    name: "UI/UX Design",
    category: "Design",
    icon: Layout,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Tools & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            My Professional Skills
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-purple-500/20 transition-colors">
                <skill.icon className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
                <p className="text-gray-500 text-xs">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
