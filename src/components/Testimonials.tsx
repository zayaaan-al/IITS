"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    country: "Spain",
    program: "Business Administration",
    text: "Studying in Albania was the best decision I ever made. The quality of education is exceptional, and the cost of living is incredibly affordable compared to Western Europe.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Ahmed Hassan",
    country: "Egypt",
    program: "Computer Science",
    text: "The Polytechnic University of Tirana gave me amazing opportunities. The professors are world-class and the campus facilities are modern and well-equipped.",
    rating: 5,
    avatar: "AH",
  },
  {
    name: "Sarah Chen",
    country: "China",
    program: "Architecture",
    text: "Albania's rich history and stunning architecture make it the perfect place to study. I fell in love with the country and its welcoming people.",
    rating: 5,
    avatar: "SC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-sm text-indigo-600 dark:text-indigo-300 font-medium mb-4">Student Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">What Our Students Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} className="relative bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/5 p-8 card-hover shadow-sm dark:shadow-none">
              <Quote className="w-10 h-10 text-indigo-500/10 dark:text-indigo-500/20 mb-4" />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">{t.avatar}</div>
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{t.program} · {t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
