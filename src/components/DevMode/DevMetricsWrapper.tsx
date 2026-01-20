"use client";

import { useRef, useEffect, ComponentType, ReactNode } from "react";
import { useDevMode } from "@/contexts/DevModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

interface WithDevMetricsProps {
  children?: ReactNode;
}

export function withDevMetrics<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string
) {
  return function WithDevMetricsComponent(props: P & WithDevMetricsProps) {
    const { isDevMode, registerComponentRender, componentMetrics } = useDevMode();
    const renderStartRef = useRef<number>(0);

    // Measure render time
    renderStartRef.current = performance.now();

    useEffect(() => {
      const renderTime = performance.now() - renderStartRef.current;
      registerComponentRender(componentName, renderTime);
    });

    const metrics = componentMetrics.get(componentName);

    return (
      <div className="relative">
        <WrappedComponent {...props} />

        <AnimatePresence>
          {isDevMode && metrics && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-2 left-2 z-50"
            >
              <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-md text-xs font-mono">
                <Clock className="w-3 h-3 text-purple-400" />
                <span className="text-gray-400">{componentName}:</span>
                <span
                  className={`font-semibold ${
                    metrics.renderTime < 10
                      ? "text-green-400"
                      : metrics.renderTime < 50
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {metrics.renderTime.toFixed(2)}ms
                </span>
                <span className="text-gray-500">×{metrics.renderCount}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
}

// Simple wrapper component for sections
interface DevMetricsWrapperProps {
  name: string;
  children: ReactNode;
}

export function DevMetricsWrapper({ name, children }: DevMetricsWrapperProps) {
  const { isDevMode, registerComponentRender, componentMetrics } = useDevMode();
  const renderStartRef = useRef<number>(performance.now());
  const hasRegisteredRef = useRef<boolean>(false);

  useEffect(() => {
    if (!hasRegisteredRef.current) {
      const renderTime = performance.now() - renderStartRef.current;
      registerComponentRender(name, renderTime);
      hasRegisteredRef.current = true;
    }
  }, [name, registerComponentRender]);

  const metrics = componentMetrics.get(name);

  return (
    <div className="relative">
      {children}

      <AnimatePresence>
        {isDevMode && metrics && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-4 right-4 z-50"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg text-xs font-mono shadow-lg shadow-purple-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-300 font-medium">{name}</span>
              <span className="text-gray-500">|</span>
              <span
                className={`font-bold ${
                  metrics.renderTime < 10
                    ? "text-green-400"
                    : metrics.renderTime < 50
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {metrics.renderTime.toFixed(1)}ms
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
