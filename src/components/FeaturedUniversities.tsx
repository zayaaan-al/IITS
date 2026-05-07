"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getUniversities, type University } from "@/lib/storage";
import UniversityCard from "./UniversityCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedUniversities() {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    setUniversities(getUniversities().slice(0, 3));
  }, []);

  return (
    <section className="relative py-32 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-4">Elite Education</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">World-Class Institutions</h2>
          </div>
          <Link href="/universities" className="group flex items-center gap-3 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white font-bold transition-all duration-300">
            View All Partners <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, i) => (
            <UniversityCard key={uni.id} university={uni} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
