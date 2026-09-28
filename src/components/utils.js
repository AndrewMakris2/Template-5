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

/** Italic serif section label with a short gold rule beneath. `tone="light"` for emerald sections. */
export function sectionLabel(text, tone = 'dark', align = 'center') {
  const color = tone === 'light' ? 'text-on-ink/80' : 'text-accent';
  const rule = tone === 'light' ? 'bg-on-ink/40' : 'bg-accent';
  const wrap = align === 'center' ? 'items-center text-center' : 'items-start';
  return `<div class="flex flex-col ${wrap}"><p class="font-heading text-lg italic ${color}">${esc(text)}</p><span class="mt-3 block h-px w-10 ${rule}" aria-hidden="true"></span></div>`;
}

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles — slim, widely tracked, couture-style. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-3 bg-ink px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-on-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent',
  outline:
    'inline-flex items-center justify-center gap-3 border border-accent px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent',
  light:
    'inline-flex items-center justify-center gap-3 border border-on-ink/50 px-10 py-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-on-ink transition-colors duration-300 hover:bg-on-ink hover:text-ink focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-on-ink',
};
