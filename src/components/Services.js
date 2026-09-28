import { esc, external, sectionLabel, buttonClasses } from './utils.js';

/** Centered, two-column couture price list with gold rules between name and details. */
export function Services({ services, booking }) {
  const items = services.items
    .map(
      (s) => `
      <li class="border-b border-line py-10 text-center">
        <h3 class="font-heading text-2xl italic text-ink md:text-[1.7rem]">${esc(s.name)}</h3>
        <span class="mx-auto mt-4 block h-px w-8 bg-accent" aria-hidden="true"></span>
        ${s.description ? `<p class="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">${esc(s.description)}</p>` : ''}
        <p class="mt-4 flex items-baseline justify-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-muted">
          <span><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</span>
          <span class="text-accent" aria-hidden="true">&mdash;</span>
          <span class="font-heading text-xl normal-case tracking-normal lining-nums text-ink"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</span>
        </p>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-16 bg-paper py-24 md:py-32 lg:scroll-mt-32" aria-labelledby="services-heading">
  <div class="mx-auto max-w-5xl px-5 md:px-10">
    <div class="text-center">
      ${sectionLabel(services.label)}
      <h2 id="services-heading" class="mt-8 font-heading text-5xl text-ink md:text-7xl">${esc(services.heading)}</h2>
      <p class="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted">${esc(services.intro)}</p>
    </div>
    <ul class="mt-14 grid border-t border-line md:grid-cols-2 md:gap-x-16">${items}</ul>
    <div class="mt-14 text-center">
      ${services.note ? `<p class="mx-auto max-w-xl font-heading text-lg italic leading-relaxed text-muted">${esc(services.note)}</p>` : ''}
      <a href="${esc(booking.url)}" ${external} class="mt-10 ${buttonClasses.solid}">${esc(services.ctaLabel)}</a>
    </div>
  </div>
</section>`;
}
