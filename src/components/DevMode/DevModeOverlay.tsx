"use client";

import { useDevMode } from "@/contexts/DevModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Zap, Eye, Clock, BarChart3, X, Maximize2, Minimize2 } from "lucide-react";
import { useState, useEffect } from "react";

function getVitalColor(metric: string, value: number | null): string {
  if (value === null) return "text-muted-foreground";

  switch (metric) {
    case "lcp":
      if (value <= 2500) return "text-green-400";
      if (value <= 4000) return "text-yellow-400";
      return "text-red-400";
    case "fid":
      if (value <= 100) return "text-green-400";
      if (value <= 300) return "text-yellow-400";
      return "text-red-400";
    case "cls":
      if (value <= 0.1) return "text-green-400";
      if (value <= 0.25) return "text-yellow-400";
      return "text-red-400";
    case "fcp":
      if (value <= 1800) return "text-green-400";
      if (value <= 3000) return "text-yellow-400";
      return "text-red-400";
    case "ttfb":
      if (value <= 800) return "text-green-400";
      if (value <= 1800) return "text-yellow-400";
      return "text-red-400";
    default:
      return "text-muted-foreground";
  }
}

function getVitalStatus(metric: string, value: number | null): string {
  if (value === null) return "Aguardando...";

  switch (metric) {
    case "lcp":
      if (value <= 2500) return "Bom";
      if (value <= 4000) return "Precisa Melhorar";
      return "Ruim";
    case "fid":
      if (value <= 100) return "Bom";
      if (value <= 300) return "Precisa Melhorar";
      return "Ruim";
    case "cls":
      if (value <= 0.1) return "Bom";
      if (value <= 0.25) return "Precisa Melhorar";
      return "Ruim";
    case "fcp":
      if (value <= 1800) return "Bom";
      if (value <= 3000) return "Precisa Melhorar";
      return "Ruim";
    case "ttfb":
      if (value <= 800) return "Bom";
      if (value <= 1800) return "Precisa Melhorar";
      return "Ruim";
    default:
      return "—";
  }
}

function formatValue(metric: string, value: number | null): string {
  if (value === null) return "—";

  switch (metric) {
    case "cls":
      return value.toFixed(3);
    default:
      return `${Math.round(value)}ms`;
  }
}

export default function DevModeOverlay() {
  const { isDevMode, componentMetrics, webVitals, toggleDevMode } = useDevMode();
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<"vitals" | "components">("vitals");
  const [pageLoadTime, setPageLoadTime] = useState<number | null>(null);
  const [memoryUsage, setMemoryUsage] = useState<number | null>(null);

  useEffect(() => {
    if (!isDevMode) return;

    // Get page load time
    if (typeof window !== "undefined" && window.performance) {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navigation) {
        setPageLoadTime(navigation.loadEventEnd - navigation.startTime);
      }
    }

    // Get memory usage if available
    const updateMemory = () => {
      if (typeof window !== "undefined" && "memory" in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
        if (memory) {
          setMemoryUsage(Math.round(memory.usedJSHeapSize / 1024 / 1024));
        }
      }
    };

    updateMemory();
    const interval = setInterval(updateMemory, 2000);

    return () => clearInterval(interval);
  }, [isDevMode]);

  const sortedComponents = Array.from(componentMetrics.values()).sort(
    (a, b) => b.renderTime - a.renderTime
  );

  const vitals = [
    { key: "lcp", label: "LCP", description: "Largest Contentful Paint", icon: Eye },
    { key: "fid", label: "FID", description: "First Input Delay", icon: Zap },
    { key: "cls", label: "CLS", description: "Cumulative Layout Shift", icon: Activity },
    { key: "fcp", label: "FCP", description: "First Contentful Paint", icon: Clock },
    { key: "ttfb", label: "TTFB", description: "Time to First Byte", icon: BarChart3 },
  ];

  return (
    <AnimatePresence>
      {isDevMode && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-[100] font-mono text-xs"
        >
          <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl shadow-black/50 overflow-hidden max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-white">Dev Mode</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={toggleDevMode}
                  className="p-1.5 rounded hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Quick Stats */}
                  <div className="px-4 py-3 border-b border-gray-700/50 bg-gray-800/50">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-gray-400">Page Load:</span>
                        <span className="text-white font-medium">
                          {pageLoadTime ? `${Math.round(pageLoadTime)}ms` : "—"}
                        </span>
                      </div>
                      {memoryUsage && (
                        <div className="flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-purple-400" />
                          <span className="text-gray-400">Memory:</span>
                          <span className="text-white font-medium">{memoryUsage}MB</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-gray-700/50">
                    <button
                      onClick={() => setActiveTab("vitals")}
                      className={`flex-1 px-4 py-2 text-center transition-colors ${
                        activeTab === "vitals"
                          ? "text-white bg-gray-800/50 border-b-2 border-purple-500"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                      }`}
                    >
                      Web Vitals
                    </button>
                    <button
                      onClick={() => setActiveTab("components")}
                      className={`flex-1 px-4 py-2 text-center transition-colors ${
                        activeTab === "components"
                          ? "text-white bg-gray-800/50 border-b-2 border-purple-500"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                      }`}
                    >
                      Components ({sortedComponents.length})
                    </button>
                  </div>

                  {/* Content */}
                  <div className="max-h-80 overflow-y-auto">
                    {activeTab === "vitals" ? (
                      <div className="p-4 space-y-3">
                        {vitals.map(({ key, label, description, icon: Icon }) => {
                          const value = webVitals[key as keyof typeof webVitals];
                          return (
                            <div
                              key={key}
                              className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <Icon className={`w-4 h-4 ${getVitalColor(key, value)}`} />
                                <div>
                                  <div className="text-white font-medium">{label}</div>
                                  <div className="text-gray-500 text-[10px]">{description}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className={`font-bold ${getVitalColor(key, value)}`}>
                                  {formatValue(key, value)}
                                </div>
                                <div className={`text-[10px] ${getVitalColor(key, value)}`}>
                                  {getVitalStatus(key, value)}
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-blue-300 text-[10px] leading-relaxed">
                            💡 <strong>Dica:</strong> Interaja com a página para capturar FID.
                            LCP é medido quando o maior conteúdo visível é renderizado.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 space-y-2">
                        {sortedComponents.length === 0 ? (
                          <div className="text-center py-8 text-gray-500">
                            <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p>Nenhum componente rastreado ainda.</p>
                            <p className="text-[10px] mt-1">Os componentes aparecerão conforme renderizam.</p>
                          </div>
                        ) : (
                          sortedComponents.map((metric) => (
                            <div
                              key={metric.name}
                              className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                            >
                              <div>
                                <span className="text-white font-medium">{metric.name}</span>
                                <span className="text-gray-500 ml-2">
                                  ×{metric.renderCount}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-mono ${
                                    metric.renderTime < 10
                                      ? "text-green-400"
                                      : metric.renderTime < 50
                                      ? "text-yellow-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {metric.renderTime.toFixed(2)}ms
                                </span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-2 bg-gray-800/30 border-t border-gray-700/50">
                    <p className="text-gray-500 text-[10px] text-center">
                      🚀 Performance é prioridade
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
