/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components never hardcode colors or fonts; they use the
 *  Tailwind utilities generated from these tokens:
 *
 *    colors.paper   → bg-paper / text-paper      (main background)
 *    colors.cream   → bg-cream                   (alternate section background)
 *    colors.ink     → text-ink / bg-ink          (primary text, dark surfaces)
 *    colors.muted   → text-muted                 (secondary text)
 *    colors.line    → border-line                (hairlines / dividers)
 *    colors.accent  → text-accent / bg-accent    (the single accent color)
 *    colors.onAccent→ text-on-accent             (text placed on the accent)
 *    colors.onInk   → text-on-ink                (text placed on ink surfaces)
 *
 *    fonts.heading  → font-heading               (headings, logo, quotes)
 *    fonts.body     → font-body                  (body copy, UI, buttons)
 *
 *  To reskin: change the values below. Keep the keys the same.
 *  If you change font families, update `fonts.googleFontsUrl` to load them
 *  (build one at https://fonts.google.com — select families, copy the URL).
 * ============================================================================
 */

export const theme = {
  // Template 5 — Luxe / Glam: ivory and champagne neutrals, deep emerald in place
  // of black, and an antique gold accent. All text/background pairs meet WCAG AA.
  colors: {
    paper: '#FBF9F4', // ivory
    cream: '#F1ECE0', // champagne
    ink: '#14332B', // deep emerald
    muted: '#56625C',
    line: '#E2DBCB',
    accent: '#85602A', // antique gold — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#F4EEDF',
  },

  fonts: {
    heading: "'Bodoni Moda', 'Didot', 'Times New Roman', Georgia, serif",
    body: "'Jost', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Jost:wght@300;400;500&display=swap',
  },
};
