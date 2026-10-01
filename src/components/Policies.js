import { esc, sectionLabel } from './utils.js';

/** Optional booking policies, centered couture-style. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p) => `
      <div class="border-b border-line py-10 text-center">
        <dt class="font-heading text-2xl italic text-ink">${esc(p.title)}</dt>
        <span class="mx-auto mt-4 block h-px w-8 bg-accent" aria-hidden="true"></span>
        <dd class="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">${esc(p.text)}</dd>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-16 border-t border-line bg-paper py-24 md:py-32 lg:scroll-mt-32" aria-labelledby="policies-heading">
  <div class="mx-auto max-w-5xl px-5 md:px-10">
    <div class="text-center">
      ${sectionLabel(policies.label)}
      <h2 id="policies-heading" class="mt-8 font-heading text-4xl text-ink md:text-6xl">${esc(policies.heading)}</h2>
    </div>
    <dl class="mt-14 grid border-t border-line md:grid-cols-2 md:gap-x-16">${items}</dl>
  </div>
</section>`;
}
