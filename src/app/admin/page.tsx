"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, BookOpen, Plus, Trash2, Settings, X
} from "lucide-react";
import {
  getUniversities, addUniversity, deleteUniversity,
  getCourses, addCourse, deleteCourse,
  type University, type Course,
} from "@/lib/storage";
import Toast from "@/components/Toast";

type Tab = "universities" | "courses";

interface ToastState {
  message: string;
  type: "success" | "error";
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("universities");
  const [universities, setUniversities] = useState<University[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [showUniForm, setShowUniForm] = useState(false);
  const [showCourseForm, setShowCourseForm] = useState(false);

  // University form
  const [uniName, setUniName] = useState("");
  const [uniLocation, setUniLocation] = useState("");
  const [uniDesc, setUniDesc] = useState("");
  const [uniEstablished, setUniEstablished] = useState("");
  const [uniStudents, setUniStudents] = useState("");
  const [uniRanking, setUniRanking] = useState("");
  const [uniImage, setUniImage] = useState("");

  // Course form
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseUniId, setCourseUniId] = useState("");
  const [courseLevel, setCourseLevel] = useState("Bachelor");
  const [courseFee, setCourseFee] = useState("");
  const [courseDesc, setCourseDesc] = useState("");

  const refresh = useCallback(() => {
    setUniversities(getUniversities());
    setCourses(getCourses());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const handleAddUni = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uniName.trim() || !uniLocation.trim()) {
      setToast({ message: "Name and Location are required.", type: "error" });
      return;
    }
    addUniversity({
      name: uniName.trim(),
      location: uniLocation.trim(),
      description: uniDesc.trim() || "A prestigious Albanian university.",
      image: uniImage.trim() || "/universities/tirana.png",
      established: uniEstablished.trim() || "N/A",
      students: uniStudents.trim() || "N/A",
      ranking: uniRanking.trim() || "N/A",
    });
    setUniName(""); setUniLocation(""); setUniDesc("");
    setUniEstablished(""); setUniStudents(""); setUniRanking("");
    setUniImage("");
    setShowUniForm(false);
    refresh();
    setToast({ message: "University added successfully!", type: "success" });
  };

  const handleDeleteUni = (id: string, name: string) => {
    deleteUniversity(id);
    refresh();
    setToast({ message: `"${name}" deleted.`, type: "success" });
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseName.trim() || !courseUniId) {
      setToast({ message: "Course name and university are required.", type: "error" });
      return;
    }
    const uni = universities.find((u) => u.id === courseUniId);
    addCourse({
      name: courseName.trim(),
      duration: courseDuration.trim() || "3 Years",
      universityId: courseUniId,
      universityName: uni?.name || "",
      level: courseLevel,
      fee: courseFee.trim() || "N/A",
      description: courseDesc.trim() || "An excellent academic program.",
    });
    setCourseName(""); setCourseDuration(""); setCourseUniId("");
    setCourseLevel("Bachelor"); setCourseFee(""); setCourseDesc("");
    setShowCourseForm(false);
    refresh();
    setToast({ message: "Course added successfully!", type: "success" });
  };

  const handleDeleteCourse = (id: string, name: string) => {
    deleteCourse(id);
    refresh();
    setToast({ message: `"${name}" deleted.`, type: "success" });
  };

  const inputClass = "w-full px-4 py-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm shadow-sm";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Manage institutions and programs</p>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Universities</p>
            <p className="text-3xl font-black text-slate-900 dark:text-white">{universities.length}</p>
          </div>
          <div className="bg-white dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Courses</p>
            <p className="text-3xl font-black text-slate-900 dark:text-white">{courses.length}</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-8">
          {(["universities", "courses"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                tab === t
                  ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-lg shadow-indigo-500/10 dark:shadow-indigo-500/25 border border-slate-200 dark:border-transparent"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
              }`}
            >
              {t === "universities" ? <Building2 className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
              {t === "universities" ? "Universities" : "Courses"}
            </button>
          ))}
        </div>

        {/* Universities Tab */}
        {tab === "universities" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="uni-tab">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Manage Universities</h2>
              <button
                onClick={() => setShowUniForm(!showUniForm)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                {showUniForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                {showUniForm ? "Cancel" : "Add University"}
              </button>
            </div>

            <AnimatePresence>
              {showUniForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleAddUni}
                  className="bg-white dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-white/5 p-6 mb-8 overflow-hidden shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">New University</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Name *</label>
                      <input className={inputClass} placeholder="University name" value={uniName} onChange={(e) => setUniName(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Location *</label>
                      <input className={inputClass} placeholder="City, Albania" value={uniLocation} onChange={(e) => setUniLocation(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Established</label>
                      <input className={inputClass} placeholder="e.g. 1957" value={uniEstablished} onChange={(e) => setUniEstablished(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Students</label>
                      <input className={inputClass} placeholder="e.g. 10,000+" value={uniStudents} onChange={(e) => setUniStudents(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Ranking</label>
                      <input className={inputClass} placeholder="e.g. #1 in Albania" value={uniRanking} onChange={(e) => setUniRanking(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Image URL</label>
                      <input className={inputClass} placeholder="e.g. /universities/tirana.png" value={uniImage} onChange={(e) => setUniImage(e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Description</label>
                      <textarea className={`${inputClass} resize-none`} rows={3} placeholder="Brief description..." value={uniDesc} onChange={(e) => setUniDesc(e.target.value)} />
                    </div>
                  </div>
                  <button type="submit" className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 text-sm">
                    Save University
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Universities List */}
            <div className="space-y-3">
              {universities.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <Building2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>No universities yet. Add one above.</p>
                </div>
              ) : (
                universities.map((uni, i) => (
                  <motion.div
                    key={uni.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-white/10 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 shrink-0 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800">
                        {uni.image ? (
                          <img src={uni.image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-indigo-500 to-purple-600">
                            {uni.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-900 dark:text-white font-semibold text-sm truncate">{uni.name}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs truncate">{uni.location} · Est. {uni.established}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteUni(uni.id, uni.name)}
                      className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}

        {/* Courses Tab */}
        {tab === "courses" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="course-tab">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Manage Courses</h2>
              <button
                onClick={() => setShowCourseForm(!showCourseForm)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                {showCourseForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                {showCourseForm ? "Cancel" : "Add Course"}
              </button>
            </div>

            <AnimatePresence>
              {showCourseForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleAddCourse}
                  className="bg-white dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-white/5 p-6 mb-8 overflow-hidden shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">New Course</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Course Name *</label>
                      <input className={inputClass} placeholder="e.g. Computer Science" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">University *</label>
                      <select className={inputClass} value={courseUniId} onChange={(e) => setCourseUniId(e.target.value)}>
                        <option value="">Select university</option>
                        {universities.map((u) => (
                          <option key={u.id} value={u.id}>{u.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Duration</label>
                      <input className={inputClass} placeholder="e.g. 4 Years" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Level</label>
                      <select className={inputClass} value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)}>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Master">Master</option>
                        <option value="Master Integrated">Master Integrated</option>
                        <option value="PhD">PhD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Fee</label>
                      <input className={inputClass} placeholder="e.g. €1,500/year" value={courseFee} onChange={(e) => setCourseFee(e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Description</label>
                      <textarea className={`${inputClass} resize-none`} rows={3} placeholder="Brief description..." value={courseDesc} onChange={(e) => setCourseDesc(e.target.value)} />
                    </div>
                  </div>
                  <button type="submit" className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 text-sm">
                    Save Course
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Courses List */}
            <div className="space-y-3">
              {courses.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>No courses yet. Add one above.</p>
                </div>
              ) : (
                courses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-white/10 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                        {course.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-900 dark:text-white font-semibold text-sm truncate">{course.name}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs truncate">{course.universityName} · {course.duration} · {course.level}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteCourse(course.id, course.name)}
                      className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
