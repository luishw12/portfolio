---
name: Luís Henrique Wendt — Portfólio
description: Espécime editorial — oficina tipográfica, um acento cobre.
colors:
  papel: "#F3EEE6"
  tinta: "#161513"
  mudo: "#5E5953"
  linha: "#D6D0C6"
  elevado: "#EBE6DC"
  cobre: "#9A4519"
  cobre-hover: "#7A3514"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
spacing:
  page: "clamp(1.25rem, 4vw, 3rem)"
  section: "4rem"
components:
  link-accent:
    textColor: "{colors.cobre}"
  link-accent-hover:
    textColor: "{colors.cobre-hover}"
---

# Design System: Espécime Editorial

## Overview

**Creative North Star: "The Workshop Specimen"**

Portfólio como página de espécime tipográfico: papel quente, tinta densa, regras finas, um único acento cobre. Sem dark mode, sem gradientes, sem cards flutuantes. Hierarquia de revista técnica — o trabalho fala em listas e um projeto em destaque.

**Key Characteristics:**
- Fundo papel #F3EEE6 sempre
- Um acento cobre #9A4519 (links, um CTA, focus) — AA 4.5:1+ em papel
- Newsreader só em nome e títulos de projeto
- IBM Plex Sans para corpo e UI
- IBM Plex Mono para datas, stack, paths — nunca headlines
- Divisores hairline #D6D0C6
- Poços de imagem em elevado #EBE6DC

## Colors

### Primary (Accent)
- **Cobre** (#9A4519): link "Ver", CTA email, focus, LinkedIn no colophon. Contraste AA em #F3EEE6.
- **Cobre Hover** (#7A3514): hover de links cobre.

### Neutral
- **Papel** (#F3EEE6): fundo da página.
- **Tinta** (#161513): nome, títulos, texto primário.
- **Mudo** (#5E5953): corpo, meta, subtítulos.
- **Linha** (#D6D0C6): regras horizontais e divisores de lista.
- **Elevado** (#EBE6DC): poço do projeto em destaque, fundos baixos.

### Named Rules
**The One Accent Rule.** Cobre é o único acento. Proibido roxo, azul mesh, glow, segundo accent.

**The No Dark Mode Rule.** Sempre papel claro. Sem `class="dark"`.

## Typography

**Display:** Newsreader 400/600 — nome (H1) e títulos de projeto apenas. `font-optical-sizing: auto`. H1 ~64–80px desktop, ~40px mobile.

**Body:** IBM Plex Sans 400/500 — corpo, navegação, UI.

**Mono:** IBM Plex Mono 400 — datas, stack, paths. Nunca headlines.

### Named Rules
**The Mono Metadata Rule.** Stack, períodos e paths sempre em Plex Mono, cor mudo.

**The Anti-Font Rule.** Nunca Inter, Geist, Poppins, Outfit, Satoshi, Lexend, Literata.

## Layout

- Container máx. ~72rem, padding horizontal `clamp(1.25rem, 4vw, 3rem)`.
- Coluna única editorial; seções separadas por `border-t border-linha`.
- Desktop: masthead em linha (nome | CV); mobile: mesma ordem, coluna onde necessário.
- Projeto em destaque: well elevado aspect-ratio largo, depois título + desc + stack + link Ver.

## Elevation & Depth

Sem sombras. Profundidade só por elevado vs papel e regras linha.

## Shapes

Cantos retos (0 radius). Sem pills, sem cards arredondados.

## Components

- **Masthead:** H1 Newsreader + link CV texto (mudo, hover cobre).
- **Featured project:** well elevado + título Newsreader + desc Plex Sans + stack mono + "Ver" cobre sublinhado.
- **Project list:** título Newsreader + linha desc; separadores hairline.
- **Career list:** empresa/título + período mono; sem stat cards.
- **Colophon:** email (único CTA cobre), WhatsApp, LinkedIn (cobre sublinhado), links texto puro.

## Do's and Don'ts

**Do:** regras hairline, copy curta em primeira pessoa, números reais no HTML.

**Don't:** mesh gradient, LHW gradient, logo grids, FAB, shimmer, glass, stat cards animados, rotating tech, Inter.
