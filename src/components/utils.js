/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Small uppercase section label, e.g. "About". */
export function sectionLabel(text) {
  return `<p class="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">${esc(text)}</p>`;
}

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-on-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  light:
    'inline-flex items-center justify-center gap-3 bg-paper px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper',
  outline:
    'inline-flex items-center justify-center gap-3 border border-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
