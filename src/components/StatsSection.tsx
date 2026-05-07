"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Globe, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: 52, suffix: "+", label: "Universities", color: "from-indigo-500 to-blue-500" },
  { icon: GraduationCap, value: 15000, suffix: "+", label: "International Students", color: "from-purple-500 to-pink-500" },
  { icon: Globe, value: 90, suffix: "+", label: "Partner Countries", color: "from-cyan-500 to-teal-500" },
  { icon: Award, value: 98, suffix: "%", label: "Visa Approval Rate", color: "from-amber-500 to-orange-500" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted.current) {
          counted.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-32 bg-white dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-slate-950 dark:via-indigo-950/10 dark:to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-4">Market Leadership</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">The Numbers Behind Our Success</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <div className="group bg-slate-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] rounded-3xl border border-slate-200 dark:border-white/5 p-10 text-center transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
