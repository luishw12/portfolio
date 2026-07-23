"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function FloatingHireButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/hire") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/hire"
            aria-label="Página para recrutadores — contratar Luís Henrique Wendt"
            className={cn(
              "group relative flex items-center gap-2 overflow-hidden rounded-full",
              "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25",
              "border border-white/10 backdrop-blur-sm",
              "transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.03]",
              "pl-4 pr-5 py-3 sm:pl-5 sm:pr-6 sm:py-3.5"
            )}
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              aria-hidden="true"
            />

            <span className="relative flex size-8 items-center justify-center rounded-full bg-white/15">
              <Briefcase className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400 border-2 border-purple-600" />
              </span>
            </span>

            <span className="relative flex flex-col items-start leading-none">
              <span className="text-sm font-semibold tracking-tight">Contratar</span>
              <span className="text-[10px] text-white/75 mt-0.5 hidden sm:block">
                Para recrutadores
              </span>
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
