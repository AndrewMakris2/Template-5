import { esc, sectionLabel, buttonClasses } from './utils.js';

/** Optional bridal / events packages on the deep ink band. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const items = events.packages
    .map(
      (p) => `
      <li class="border-b border-on-ink/20 py-10 text-center md:border-b-0 md:border-l md:px-8 md:py-4 md:first:border-l-0">
        <h3 class="font-heading text-2xl italic md:text-[1.7rem]">${esc(p.name)}</h3>
        <span class="mx-auto mt-4 block h-px w-8 bg-on-ink/40" aria-hidden="true"></span>
        ${p.description ? `<p class="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-ink/75">${esc(p.description)}</p>` : ''}
        <p class="mt-5 font-heading text-xl lining-nums">${esc(p.price)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-16 bg-ink py-24 text-on-ink md:py-32 lg:scroll-mt-32" aria-labelledby="events-heading">
  <div class="mx-auto max-w-6xl px-5 md:px-10">
    <div class="text-center">
      ${sectionLabel(events.label, 'light')}
      <h2 id="events-heading" class="mt-8 font-heading text-5xl md:text-7xl">${esc(events.heading)}</h2>
      <p class="mx-auto mt-8 max-w-xl text-base leading-relaxed text-on-ink/80">${esc(events.intro)}</p>
    </div>
    <ul class="mt-14 grid border-t border-on-ink/20 md:grid-cols-3 md:border-t-0">${items}</ul>
    <div class="mt-14 text-center">
      ${events.note ? `<p class="mx-auto max-w-xl font-heading text-lg italic leading-relaxed text-on-ink/80">${esc(events.note)}</p>` : ''}
      <a href="#contact" class="mt-10 ${buttonClasses.light}">${esc(events.ctaLabel)}</a>
    </div>
  </div>
</section>`;
}
