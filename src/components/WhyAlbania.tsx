"use client";

import { motion } from "framer-motion";
import { DollarSign, Sun, Shield, Globe, BookOpen, Heart } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Affordable Tuition", description: "Tuition fees start from just €1,000/year — one of the lowest in Europe.", color: "from-emerald-500 to-green-500" },
  { icon: Sun, title: "Mediterranean Climate", description: "Enjoy 300+ sunny days per year with beautiful beaches and mountains.", color: "from-amber-500 to-orange-500" },
  { icon: Shield, title: "Safe & Welcoming", description: "Albania is known for its hospitality and safety for international students.", color: "from-blue-500 to-cyan-500" },
  { icon: Globe, title: "European Degrees", description: "All degrees follow the Bologna system and are recognized across Europe.", color: "from-purple-500 to-pink-500" },
  { icon: BookOpen, title: "English Programs", description: "Many universities offer full degree programs taught in English.", color: "from-indigo-500 to-violet-500" },
  { icon: Heart, title: "Vibrant Student Life", description: "Rich culture, nightlife, historical sites, and a growing international community.", color: "from-rose-500 to-pink-500" },
];

export default function WhyAlbania() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-sm text-indigo-600 dark:text-indigo-300 font-medium mb-4">Why Albania?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">The Perfect Study Destination</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Discover why thousands of international students choose Albania for their higher education journey.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group bg-white dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-white/5 p-8 card-hover shadow-sm dark:shadow-none">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <r.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{r.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
