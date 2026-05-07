"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { getCourses, getUniversities, type Course, type University } from "@/lib/storage";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [universities, setUniversities] = useState<University[]>([]);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [uniFilter, setUniFilter] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCourses(getCourses());
    setUniversities(getUniversities());
    setLoaded(true);
  }, []);

  const levels = [...new Set(courses.map((c) => c.level))];

  const filtered = courses.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.universityName.toLowerCase().includes(search.toLowerCase());
    const matchLevel = !levelFilter || c.level === levelFilter;
    const matchUni = !uniFilter || c.universityId === uniFilter;
    return matchSearch && matchLevel && matchUni;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-950/80 dark:via-slate-950 dark:to-indigo-950/50" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-purple-700 dark:text-purple-300 font-medium">Browse Programs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">Courses & Programs</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Find the perfect program that aligns with your career goals and academic interests.</p>
          </motion.div>

          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-sm"
              />
            </div>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-4 py-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer min-w-[160px] shadow-sm"
            >
              <option value="">All Levels</option>
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              value={uniFilter}
              onChange={(e) => setUniFilter(e.target.value)}
              className="px-4 py-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer min-w-[200px] shadow-sm"
            >
              <option value="">All Universities</option>
              {universities.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {!loaded ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-3">
                <div className="h-12 w-12 animate-shimmer rounded-xl" />
                <div className="h-5 w-3/4 animate-shimmer rounded" />
                <div className="h-4 w-full animate-shimmer rounded" />
                <div className="h-4 w-1/2 animate-shimmer rounded" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-400 mb-2">No Courses Found</h3>
            <p className="text-slate-500">
              {search || levelFilter || uniFilter ? "Try adjusting your filters." : "No courses added yet. Visit the Admin panel to add some."}
            </p>
          </motion.div>
        ) : (
          <>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{filtered.length} course{filtered.length === 1 ? "" : "s"} found</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
