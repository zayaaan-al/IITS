"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950" />
      <div className="absolute inset-0 hero-pattern opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8 backdrop-blur-md shadow-xl dark:shadow-2xl"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse" />
          <span className="text-xs text-indigo-700 dark:text-indigo-200 font-bold uppercase tracking-[0.2em]">
            Your European Academic Gateway
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-8 font-[family-name:var(--font-heading)]"
        >
          Study in <br />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">Albania</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Experience world-class education at a fraction of the cost. 
          Discover vibrant campuses and recognized degrees in Europe&apos;s 
          rising educational hub.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/universities"
            className="group relative px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.5)]"
          >
            <div className="relative z-10 flex items-center gap-2">
              Explore Universities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <Link
            href="/courses"
            className="group px-10 py-5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
          >
            View Courses
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Universities" },
            { value: "500+", label: "Programs" },
            { value: "15K+", label: "Int'l Students" },
            { value: "€1.5K", label: "Avg. Tuition/Year" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-4 md:p-6 text-center card-hover"
            >
              <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-50/50 dark:from-slate-950 to-transparent" />
    </section>
  );
}
