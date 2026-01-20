"use client";

import { useEffect } from "react";
import { useDevMode } from "@/contexts/DevModeContext";

// Extend the PerformanceEntry type to include specific Web Vitals properties
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  renderTime: number;
  loadTime: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

export default function WebVitalsReporter() {
  const { isDevMode, updateWebVital } = useDevMode();

  useEffect(() => {
    if (!isDevMode || typeof window === "undefined") return;

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          updateWebVital("cls", clsValue);
        }
      }
    });

    try {
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch {
      // layout-shift not supported
    }

    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as LargestContentfulPaintEntry;
      if (lastEntry) {
        updateWebVital("lcp", lastEntry.renderTime || lastEntry.loadTime);
      }
    });

    try {
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      // LCP not supported
    }

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const firstInput = entryList.getEntries()[0] as FirstInputEntry;
      if (firstInput) {
        updateWebVital("fid", firstInput.processingStart - firstInput.startTime);
      }
    });

    try {
      fidObserver.observe({ type: "first-input", buffered: true });
    } catch {
      // FID not supported
    }

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const fcpEntry = entryList.getEntriesByName("first-contentful-paint")[0];
      if (fcpEntry) {
        updateWebVital("fcp", fcpEntry.startTime);
      }
    });

    try {
      fcpObserver.observe({ type: "paint", buffered: true });
    } catch {
      // paint not supported
    }

    // TTFB - Time to First Byte
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navigation) {
      updateWebVital("ttfb", navigation.responseStart - navigation.requestStart);
    }

    return () => {
      clsObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, [isDevMode, updateWebVital]);

  return null;
}
