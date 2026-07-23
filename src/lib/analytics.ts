"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsLocation =
  | "header_desktop"
  | "header_mobile"
  | "hero_section"
  | "about_section"
  | "contact_section"
  | "projects_section"
  | "experience_section"
  | "footer"
  | "floating_button"
  | "hire_page";

export type SocialPlatform =
  | "linkedin"
  | "github"
  | "instagram"
  | "email"
  | "whatsapp";

export type ContactChannel = "email" | "whatsapp" | "linkedin";

export type ProjectAction =
  | "visit_site"
  | "view_code"
  | "open_gallery"
  | "gallery_nav"
  | "view_github_profile";

type AnalyticsParams = Record<string, string | number | boolean>;

function track(eventName: string, params: AnalyticsParams) {
  sendGAEvent("event", eventName, params);
}

export function trackRecruiterCta(
  target: string,
  location: AnalyticsLocation
) {
  track("click_recruiter_cta", { target, location });
}

export function trackSocialClick(
  platform: SocialPlatform,
  location: AnalyticsLocation
) {
  track("click_social", { platform, location });
}

export function trackNavigation(
  target: string,
  location: AnalyticsLocation,
  device: "desktop" | "mobile" = "desktop"
) {
  track("click_navigation", { target, location, device });
}

export function trackContactClick(
  channel: ContactChannel,
  location: AnalyticsLocation
) {
  track("click_contact", { channel, location });
}

export function trackContactCopy(
  channel: ContactChannel,
  location: AnalyticsLocation
) {
  track("copy_contact", { channel, location });
}

export function trackResumeDownload(location: AnalyticsLocation) {
  trackRecruiterCta("resume_download", location);
}

export function trackProjectClick(
  action: ProjectAction,
  project: string,
  location: AnalyticsLocation = "projects_section"
) {
  track("click_project", { action, project, location });
}

export function trackExternalLink(
  target: string,
  location: AnalyticsLocation
) {
  track("click_external", { target, location });
}

export function trackExperienceToggle(
  company: string,
  action: "expand" | "collapse"
) {
  track("experience_toggle", { company, action });
}

export function trackMobileMenu(action: "open" | "close") {
  track("mobile_menu", { action });
}

export function trackScrollToTop(location: AnalyticsLocation = "footer") {
  track("scroll_to_top", { location });
}

export function trackSectionView(section: string, page: string) {
  track("section_view", { section, page });
}

export function trackScrollDepth(percent: number, page: string) {
  track("scroll_depth", { percent, page });
}

export const HOME_SECTIONS = [
  "inicio",
  "sobre",
  "destaques",
  "experiencia",
  "projetos",
  "habilidades",
  "formacao",
  "contato",
] as const;

export const HIRE_SECTIONS = [
  "hire-hero",
  "hire-facts",
  "hire-roles",
  "hire-stack",
  "hire-experience",
  "hire-projects",
  "hire-process",
  "hire-faq",
  "hire-cta",
] as const;

export const SCROLL_DEPTH_MILESTONES = [25, 50, 75, 90, 100] as const;
