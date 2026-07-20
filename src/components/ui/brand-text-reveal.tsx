"use client";

import {
  DiaTextReveal,
  type DiaTextRevealProps,
} from "@/components/ui/dia-text-reveal";
import { BRAND_GRADIENT_COLORS } from "@/lib/brand";

type BrandTextRevealProps = Omit<DiaTextRevealProps, "colors" | "textColor"> & {
  colors?: DiaTextRevealProps["colors"];
  textColor?: DiaTextRevealProps["textColor"];
};

/**
 * DiaTextReveal com a paleta do portfolio.
 * Após o sweep, o texto permanece na cor primary do tema.
 */
export function BrandTextReveal({
  colors = [...BRAND_GRADIENT_COLORS],
  textColor = "hsl(var(--primary))",
  ...props
}: BrandTextRevealProps) {
  return (
    <DiaTextReveal colors={colors} textColor={textColor} {...props} />
  );
}
