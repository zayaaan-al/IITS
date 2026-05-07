"use client";

import { motion } from "framer-motion";
import {
  MapPin, Users, DollarSign, Sun, Shield,
  Coffee, Mountain, Landmark, Heart, Globe
} from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Low Cost of Living", stat: "€300-500/mo", desc: "Monthly living expenses including rent, food, and transport." },
  { icon: Sun, title: "300+ Sunny Days", stat: "Mediterranean", desc: "Enjoy year-round pleasant climate with stunning coastlines." },
  { icon: Shield, title: "Safe Country", stat: "Top 30", desc: "Ranked among the safest countries in Europe for students." },
  { icon: Globe, title: "Bologna System", stat: "EU Standard", desc: "Degrees recognized across Europe and internationally." },
  { icon: Coffee, title: "Rich Culture", stat: "3000+ Years", desc: "Ancient history, UNESCO sites, and vibrant modern culture." },
  { icon: Mountain, title: "Natural Beauty", stat: "70% Mountains", desc: "From pristine beaches to dramatic alpine landscapes." },
];

const studentLife = [
  { title: "Affordable Lifestyle", desc: "Albania offers one of the most affordable lifestyles in Europe. A cup of coffee costs under €1, and a full meal under €5.", icon: Coffee },
  { title: "Cultural Immersion", desc: "Experience a unique blend of Ottoman, Italian, and Greek cultural influences reflected in architecture, cuisine, and traditions.", icon: Landmark },
  { title: "Travel Opportunities", desc: "Located in the heart of the Balkans, Albania gives easy access to Greece, Montenegro, North Macedonia, and Italy.", icon: MapPin },
  { title: "Growing Community", desc: "Join a rapidly growing international student community with students from over 90 countries worldwide.", icon: Users },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 dark:from-cyan-950/60 dark:via-slate-950 dark:to-indigo-950/60" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-500/20 mb-6">
              <Heart className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300 font-medium">Discover Albania</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">About Studying in Albania</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">Albania is a hidden gem of European education — offering affordable tuition, beautiful Mediterranean surroundings, EU-standard degrees, and a welcoming multicultural environment.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-sm text-indigo-600 dark:text-indigo-300 font-medium mb-4">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">A European Education at a Fraction of the Cost</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>Albania has emerged as one of Europe&apos;s most attractive destinations for international students. With tuition fees starting from just €1,000 per year and living costs significantly lower than Western Europe, students can achieve a world-class education without breaking the bank.</p>
                <p>All Albanian universities follow the Bologna Process, ensuring that degrees are recognized across the European Union and beyond. Many programs are taught entirely in English, making it accessible to students worldwide.</p>
                <p>Beyond academics, Albania offers a rich cultural experience with its UNESCO World Heritage sites, stunning Adriatic and Ionian coastlines, and a nightlife and food scene that rivals any European capital.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { label: "Tuition From", value: "€1,000/yr", gradient: "from-indigo-600 to-blue-600" },
                { label: "Living Cost", value: "€300/mo", gradient: "from-emerald-600 to-teal-600" },
                { label: "Programs", value: "500+", gradient: "from-purple-600 to-pink-600" },
                { label: "Int'l Students", value: "15,000+", gradient: "from-amber-600 to-orange-600" },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 text-center shadow-xl`}>
                  <p className="text-3xl font-black text-white mb-1">{item.value}</p>
                  <p className="text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-sm text-indigo-600 dark:text-indigo-300 font-medium mb-4">Key Benefits</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Why Albania Stands Out</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-white/5 p-8 card-hover shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <b.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-bold">{b.stat}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{b.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-sm text-purple-700 dark:text-purple-300 font-medium mb-4">Student Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Life Beyond the Classroom</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Albania offers a vibrant, safe, and affordable lifestyle that complements your academic journey.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/universities/vlora.png" alt="Coastal Life" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/universities/arts.png" alt="Cultural Hub" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/universities/tirana.png" alt="City Life" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/universities/epoka.png" alt="Modern Campus" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-8">
              {studentLife.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
