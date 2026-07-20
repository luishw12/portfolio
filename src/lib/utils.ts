import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Ano de início na área de desenvolvimento */
export const CAREER_START_YEAR = 2022

/** Anos de experiência desde CAREER_START_YEAR (atualizado automaticamente) */
export function getYearsOfExperience() {
  return new Date().getFullYear() - CAREER_START_YEAR
}
