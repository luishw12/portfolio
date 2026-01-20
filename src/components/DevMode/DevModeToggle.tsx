"use client";

import { useDevMode } from "@/contexts/DevModeContext";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function DevModeToggle() {
  const { isDevMode, toggleDevMode } = useDevMode();

  return (
    <motion.button
      onClick={toggleDevMode}
      className={`
        relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
        transition-all duration-300 overflow-hidden
        ${
          isDevMode
            ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 text-purple-300"
            : "bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-gray-600"
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
    >
      {/* Glow effect when active */}
      {isDevMode && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <Code2 className={`w-3.5 h-3.5 relative z-10 ${isDevMode ? "text-purple-400" : ""}`} />
      <span className="relative z-10">Dev</span>

      {/* Toggle indicator */}
      <div className={`
        w-8 h-4 rounded-full relative transition-colors duration-300
        ${isDevMode ? "bg-purple-500/30" : "bg-gray-700/50"}
      `}>
        <motion.div
          className={`
            absolute top-0.5 w-3 h-3 rounded-full
            ${isDevMode ? "bg-purple-400" : "bg-gray-500"}
          `}
          animate={{
            left: isDevMode ? "calc(100% - 14px)" : "2px",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </motion.button>
  );
}
