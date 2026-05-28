---
name: Modern Minimalist Portfolio
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#cac6c3'
  on-tertiary: '#32302f'
  tertiary-container: '#0b0a09'
  on-tertiary-container: '#7c7977'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  stack-xl: 8rem
  stack-lg: 4rem
  stack-md: 2rem
  gutter: 1.5rem
  margin-desktop: 5rem
  margin-mobile: 1.25rem
---

## Brand & Style
The design system is anchored in the "Quiet Luxury" aesthetic—a philosophy where quality and intentionality speak louder than visual noise. It is designed for a high-end web development portfolio that balances technical precision with high-fashion editorial sensibilities.

The visual language follows a **Minimalist** approach with **High-Contrast** accents. It prioritizes vast negative space to allow the developer's work to breathe, using a restricted palette to signify authority and sophistication. The interface should feel like a premium gallery: silent, structured, and expensive. Interactions should be smooth and deliberate, eschewing flashy animations for subtle, refined transitions.

## Colors
The color strategy relies on a "void-and-light" contrast. 

- **Primary Background (#0A0A0A):** A deep, true black used for the vast majority of the canvas to create depth and focus.
- **Surface (#FFFFFF):** Reserved for high-impact content cards or specific modular sections to break the rhythm.
- **Gold Accent (#C5A059):** A desaturated, metallic gold. Used sparingly for calls-to-action, active navigation states, and critical highlights. It must never dominate a view.
- **Functional Neutrals:** Mid-tone grays are used for secondary text and subtle 1px borders to maintain structure without breaking the dark immersion.

## Typography
Typography is the primary decorative element. We use **Hanken Grotesk** for headlines to provide a sharp, contemporary edge with its precise geometric construction. **Inter** is utilized for body and UI text for its exceptional legibility and systematic, "tech-first" feel.

- **Scale:** Large display type should be used for project titles and hero statements, often with tight letter-spacing to create a "block" of text effect.
- **Case:** Use Uppercase for labels and small metadata (e.g., category tags or "Year") to instill a sense of hierarchy and professional rigor.
- **Rhythm:** Body text should maintain generous line heights (1.6) to ensure the minimalist aesthetic remains readable and airy.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop (12 columns) and a **Fluid** model on mobile. 

- **Whitespace as a Component:** Negative space is not "empty"—it is a functional tool used to group elements. High-level sections should be separated by `stack-xl` (128px) to emphasize the "Quiet Luxury" feel.
- **Alignment:** Content is generally left-aligned or centered within specific modules. Avoid staggered or chaotic placements.
- **Borders:** Use thin (1px) borders in `#262626` to define sections without adding visual weight. These borders act as the "scaffolding" of the portfolio.

## Elevation & Depth
This design system avoids traditional shadows to maintain its flat, modern aesthetic. Depth is communicated through:

- **Tonal Layering:** The primary background is the deepest layer (#0A0A0A). "Raised" components like cards may use a slightly lighter neutral (#161616) or a pure white (#FFFFFF) for maximum pop.
- **Stark Outlines:** Interactive elements use 1px solid outlines.
- **Selective Opacity:** Background elements or decorative text can use low-opacity white (10-20%) to sit behind the primary content, creating a subtle parallax-like layering effect without needing shadows.

## Shapes
Shapes are disciplined and architectural. 

- **Corners:** We use a "Soft" (4px) corner radius for small UI elements like buttons and input fields. This takes the edge off the brutal black/white contrast without making the UI feel "bubbly" or informal.
- **Media:** Project thumbnails and images should remain perfectly sharp (0px radius) to mimic high-end photography prints.

## Components
Consistent execution of components ensures the "premium" feel.

- **Buttons:** 
    - *Primary:* Gold background (#C5A059) with Black text. No shadow.
    - *Ghost:* White 1px border, no background, white text. Transitions to gold border on hover.
- **Input Fields:** Minimalist design—only a bottom border (1px). The border turns gold when focused.
- **Cards:** Used for project previews. Full-width images with labels in `label-md` (uppercase) positioned either directly below or overlaid in a corner.
- **Chips/Tags:** Small, sharp-cornered boxes with thin borders. Text in `label-sm`.
- **Navigation:** A fixed header with a high-blur backdrop or solid black. Links use `label-md` and transition to gold on hover with a subtle underline animation.
- **Dividers:** Horizontal lines (1px) in `#262626` used to separate long-form content or footer sections.
