"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  HIRE_SECTIONS,
  HOME_SECTIONS,
  SCROLL_DEPTH_MILESTONES,
  trackScrollDepth,
  trackSectionView,
} from "@/lib/analytics";

export default function SiteAnalytics() {
  const pathname = usePathname();
  const viewedSections = useRef(new Set<string>());
  const reachedDepths = useRef(new Set<number>());

  useEffect(() => {
    viewedSections.current.clear();
    reachedDepths.current.clear();
  }, [pathname]);

  useEffect(() => {
    const page = pathname || "/";
    const sections =
      pathname === "/hire"
        ? [...HIRE_SECTIONS]
        : pathname === "/"
          ? [...HOME_SECTIONS]
          : [];

    if (sections.length === 0) {
      const onScrollOnly = () => {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;

        const percent = Math.round((window.scrollY / scrollHeight) * 100);

        SCROLL_DEPTH_MILESTONES.forEach((milestone) => {
          if (percent < milestone) return;

          const key = `${page}:${milestone}`;
          if (reachedDepths.current.has(milestone)) return;

          reachedDepths.current.add(milestone);
          trackScrollDepth(milestone, page);
        });
      };

      onScrollOnly();
      window.addEventListener("scroll", onScrollOnly, { passive: true });
      return () => window.removeEventListener("scroll", onScrollOnly);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;
          const key = `${page}:${sectionId}`;
          if (viewedSections.current.has(key)) return;

          viewedSections.current.add(key);
          trackSectionView(sectionId, page);
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -20% 0px" }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) sectionObserver.observe(element);
    });

    const onScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      SCROLL_DEPTH_MILESTONES.forEach((milestone) => {
        if (percent < milestone) return;

        const key = `${page}:${milestone}`;
        if (reachedDepths.current.has(milestone)) return;

        reachedDepths.current.add(milestone);
        trackScrollDepth(milestone, page);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
