"use client";

import { motion } from "framer-motion";
import { Clock, Building2, DollarSign } from "lucide-react";
import type { Course } from "@/lib/storage";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const icons = [
    "📐", "💻", "📊", "🎨", "🔬", "🌐", "🏗️", "✈️",
    "⚖️", "🧬", "📚", "🎵",
  ];
  const icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] rounded-3xl border border-slate-200 dark:border-white/5 p-8 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-3xl shadow-sm dark:shadow-inner group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {course.name}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2 font-light">
          {course.description}
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Duration</span>
            <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              {course.duration}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Tuition</span>
            <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-bold">
              <DollarSign className="w-4 h-4" />
              {course.fee}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
            <Building2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">
            {course.universityName}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
