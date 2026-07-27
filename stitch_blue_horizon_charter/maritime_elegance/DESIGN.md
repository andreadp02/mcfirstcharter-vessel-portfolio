---
name: Maritime Elegance
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#005eb2'
  on-secondary: '#ffffff'
  secondary-container: '#4597fe'
  on-secondary-container: '#002e5d'
  tertiary: '#00070b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00222d'
  on-tertiary-container: '#2891b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3b'
  on-secondary-fixed-variant: '#004788'
  tertiary-fixed: '#baeaff'
  tertiary-fixed-dim: '#76d2f6'
  on-tertiary-fixed: '#001f29'
  on-tertiary-fixed-variant: '#004d62'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is engineered for the high-end maritime charter industry, balancing the heritage of traditional sailing with the precision of modern yachting technology. The brand personality is professional, adventurous, and serene, targeting a discerning clientele that values both luxury and the raw beauty of the ocean.

The visual style is **Minimalist with Maritime Accents**. It utilizes expansive whitespace to evoke a sense of freedom and openness found at sea. High-quality, full-bleed imagery of deep blue waters and pristine decks serves as the primary visual driver. Subtle nautical motifs—fine lines reminiscent of navigational charts, understated compass details, and precise grid layouts—provide a structured, professional framework that distinguishes the product from generic luxury services.

## Colors
The palette is derived from the varying depths of the ocean and the crisp clarity of a coastal horizon. 

- **Deep Navy (#001F3F):** Used for primary typography, navigation bars, and structural elements to convey authority and tradition.
- **Ocean Blue (#0074D9):** The primary action color, used for buttons and key interactive states.
- **Seafoam (#7FDBFF):** A light, refreshing accent used for badges, thin dividers, and subtle highlights to break the heavy blues.
- **Crisp White (#FFFFFF):** The dominant background color, ensuring a clean, high-contrast environment that feels premium and airy.
- **Surface Alt (#F8F9FA):** A very light cool grey used for section backgrounds to provide subtle separation without breaking the minimalist flow.

## Typography
The typography strategy employs a classic serif/sans-serif pairing to bridge the gap between traditional maritime luxury and modern functional utility.

**Playfair Display** is reserved for headlines and display text. Its high-contrast strokes and elegant terminals evoke the sophistication of premium editorial design. Use it with slightly tighter letter-spacing in large sizes to maintain a bespoke look.

**Inter** handles all functional and body text. It was selected for its exceptional legibility at small sizes and its neutral, systematic character. All labels and secondary information should use Inter. Use the `label-caps` style for section headers and overlines to provide a disciplined, "logged" appearance similar to ship logs or technical charts.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous vertical breathing room to maintain the serene brand essence. 

- **Grid:** A 12-column grid is used for desktop, 8 for tablet, and 4 for mobile. 
- **Gutters:** Standardized at 24px to ensure content never feels crowded.
- **Section Gaps:** Vertical spacing between major sections is intentional and large (120px), encouraging the user to linger on high-quality imagery and key value propositions.
- **Content Alignment:** Center-align hero content and key introductions for a formal, balanced feel. Use asymmetrical layouts for gallery sections to mimic the organic flow of water.

## Elevation & Depth
This design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is created through the stacking of surfaces rather than physical shadows. Use 1px borders in very light blue-grey (#E9ECEF) or semi-transparent Deep Navy (10% opacity) for cards and containers. This creates a "flat-plan" aesthetic similar to technical drawings.

Where elevation is required for interactivity (e.g., a hovered card), use a single, extremely soft ambient shadow: `0 12px 32px rgba(0, 31, 63, 0.08)`. This keeps the UI feeling light and "buoyant" rather than heavy and grounded.

## Shapes
The shape language is primarily **Soft (Level 1)**. 

Standard components like buttons and input fields use a 4px (0.25rem) corner radius. This maintains a professional, crisp edge while avoiding the harshness of 0px corners. 

**Exception:** Imagery within "About Us" or personal profile sections should use a circular or organic rounded treatment to soften the brand's appearance and emphasize the human element of the crew. Itinerary "stops" or map markers should be perfect circles.

## Components

### Buttons
- **Primary:** Deep Navy (#001F3F) background with White text. Rectangular with 4px radius. 
- **Secondary:** Transparent with a 1px Deep Navy border.
- **Text Link:** Ocean Blue (#0074D9) with a thin 1px underline that appears on hover.

### Cards & Grids
- **Itinerary Cards:** Use a White surface with a thin, 1px light blue border. Include a small "map-node" icon in Seafoam (#7FDBFF) next to the destination title.
- **Specification Grids:** Use a clean 2 or 3-column list for boat specs. Use `label-caps` for the attribute name (e.g., LENGTH) in Deep Navy at 60% opacity, paired with `body-md` for the value.

### Input Fields
- Underlined style or subtle 1px bordered boxes. Use Inter for input text. Ensure the focus state uses the Ocean Blue color for the border/line.

### Hero Sections
- Full-viewport height with high-contrast White typography overlaid on darkened sea imagery (use a 30-40% Deep Navy overlay for legibility).

### Nautical Accents
- **Dividers:** Use 1px solid lines in Seafoam (#7FDBFF), occasionally broken by a small compass icon or a diamond node to denote a transition in content.