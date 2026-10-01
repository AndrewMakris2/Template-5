import { esc, sectionLabel } from './utils.js';

/** Optional FAQ (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group border-b border-line">
        <summary class="flex cursor-pointer list-none items-baseline justify-between gap-6 py-7 font-heading text-xl italic text-ink transition-colors hover:text-accent focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-2xl [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="shrink-0 font-body text-xl not-italic text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="pb-8 text-base leading-relaxed text-muted">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 border-t border-line bg-paper py-24 md:py-32 lg:scroll-mt-32" aria-labelledby="faq-heading">
  <div class="mx-auto max-w-3xl px-5 md:px-10">
    <div class="text-center">
      ${sectionLabel(faq.label)}
      <h2 id="faq-heading" class="mt-8 font-heading text-4xl text-ink md:text-6xl">${esc(faq.heading)}</h2>
    </div>
    <div class="mt-14 border-t border-line">${items}</div>
  </div>
</section>`;
}
