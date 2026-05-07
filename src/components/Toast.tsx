"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onClose, 300);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-24 right-6 z-[100] max-w-sm ${exiting ? "toast-exit" : "toast-enter"}`}>
      <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${
        type === "success"
          ? "bg-emerald-50 dark:bg-emerald-950/90 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300"
          : "bg-red-50 dark:bg-red-950/90 border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-300"
      }`}>
        {type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
        <p className="text-sm font-medium flex-1">{message}</p>
        <button onClick={() => { setExiting(true); setTimeout(onClose, 300); }} className="shrink-0 hover:opacity-70 transition-opacity">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
