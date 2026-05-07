"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Trophy } from "lucide-react";
import type { University } from "@/lib/storage";

interface UniversityCardProps {
  university: University;
  index?: number;
}

export default function UniversityCard({ university, index = 0 }: UniversityCardProps) {
  const gradients = [
    "from-indigo-600 to-blue-600",
    "from-purple-600 to-pink-600",
    "from-cyan-600 to-teal-600",
    "from-orange-500 to-red-500",
    "from-emerald-600 to-green-600",
    "from-violet-600 to-purple-600",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden card-hover shadow-sm dark:shadow-none"
    >
      {/* Image / Gradient Header */}
      <div className={`relative h-56 overflow-hidden`}>
        {university.image ? (
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient}`}>
            <div className="absolute inset-0 hero-pattern opacity-20" />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Ranking Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 shadow-xl">
          <Trophy className="w-3 h-3 text-amber-500 dark:text-amber-400" />
          {university.ranking}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {university.name}
        </h3>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-3">
          <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          {university.location}
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {university.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-medium text-slate-700 dark:text-slate-300">{university.students}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Est. {university.established}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
