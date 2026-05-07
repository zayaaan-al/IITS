"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-white/5 border border-white/10 dark:bg-white/5 dark:border-white/10 transition-all hover:bg-white/10 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : 90,
            scale: theme === "dark" ? 0 : 1,
            opacity: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-amber-500"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : -90,
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-indigo-400"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
      
      {/* Tooltip */}
      <span className="absolute top-full mt-2 right-0 px-2 py-1 rounded bg-slate-900 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </span>
    </button>
  );
}
