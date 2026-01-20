"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ComponentMetrics {
  name: string;
  renderTime: number;
  renderCount: number;
  lastRenderTimestamp: number;
}

interface WebVitals {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface DevModeContextType {
  isDevMode: boolean;
  toggleDevMode: () => void;
  componentMetrics: Map<string, ComponentMetrics>;
  registerComponentRender: (name: string, renderTime: number) => void;
  webVitals: WebVitals;
  updateWebVital: (metric: keyof WebVitals, value: number) => void;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export function DevModeProvider({ children }: { children: ReactNode }) {
  const [isDevMode, setIsDevMode] = useState(false);
  const [componentMetrics, setComponentMetrics] = useState<Map<string, ComponentMetrics>>(new Map());
  const [webVitals, setWebVitals] = useState<WebVitals>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  const toggleDevMode = useCallback(() => {
    setIsDevMode((prev) => !prev);
  }, []);

  const registerComponentRender = useCallback((name: string, renderTime: number) => {
    setComponentMetrics((prev) => {
      const newMap = new Map(prev);
      const existing = newMap.get(name);

      newMap.set(name, {
        name,
        renderTime,
        renderCount: existing ? existing.renderCount + 1 : 1,
        lastRenderTimestamp: Date.now(),
      });

      return newMap;
    });
  }, []);

  const updateWebVital = useCallback((metric: keyof WebVitals, value: number) => {
    setWebVitals((prev) => ({
      ...prev,
      [metric]: value,
    }));
  }, []);

  return (
    <DevModeContext.Provider
      value={{
        isDevMode,
        toggleDevMode,
        componentMetrics,
        registerComponentRender,
        webVitals,
        updateWebVital,
      }}
    >
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const context = useContext(DevModeContext);
  if (context === undefined) {
    throw new Error("useDevMode must be used within a DevModeProvider");
  }
  return context;
}
