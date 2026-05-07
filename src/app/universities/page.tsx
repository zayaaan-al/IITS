"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Building2 } from "lucide-react";
import { getUniversities, type University } from "@/lib/storage";
import UniversityCard from "@/components/UniversityCard";

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setUniversities(getUniversities());
    setLoaded(true);
  }, []);

  const filtered = universities.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/80 dark:via-slate-950 dark:to-purple-950/50" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-6">
              <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">Explore Institutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">Universities in Albania</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Browse our comprehensive list of accredited Albanian universities offering world-class programs.</p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search universities by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {!loaded ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden">
                <div className="h-56 animate-shimmer" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-3/4 animate-shimmer rounded" />
                  <div className="h-4 w-1/2 animate-shimmer rounded" />
                  <div className="h-4 w-full animate-shimmer rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 flex items-center justify-center">
              <Building2 className="w-10 h-10 text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-400 mb-2">No Universities Found</h3>
            <p className="text-slate-500">
              {search ? "Try adjusting your search terms." : "No universities added yet. Visit the Admin panel to add some."}
            </p>
          </motion.div>
        ) : (
          <>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{filtered.length} universit{filtered.length === 1 ? "y" : "ies"} found</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((uni, i) => (
                <UniversityCard key={uni.id} university={uni} index={i} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
