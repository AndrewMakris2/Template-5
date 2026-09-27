import { esc, external, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

export function Services({ services, booking }) {
  const rows = services.items
    .map(
      (s) => `
      <li class="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-6 md:grid-cols-[1fr_8rem_6rem] md:items-baseline md:py-7">
        <div>
          <h3 class="font-heading text-2xl font-normal text-ink md:text-[1.7rem]">${esc(s.name)}</h3>
          ${s.description ? `<p class="mt-1 text-sm leading-relaxed text-muted">${esc(s.description)}</p>` : ''}
        </div>
        <p class="col-start-1 row-start-2 text-xs uppercase tracking-[0.15em] text-muted md:col-start-2 md:row-start-1 md:text-right">
          <span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}
        </p>
        <p class="col-start-2 row-start-1 text-right font-heading text-2xl lining-nums text-ink md:col-start-3">
          <span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}
        </p>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36" aria-labelledby="services-heading">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-4">
      <div class="lg:sticky lg:top-32">
        ${sectionLabel(services.label)}
        <h2 id="services-heading" class="mt-6 font-heading text-4xl font-light text-ink md:text-5xl lg:text-6xl">${esc(services.heading)}</h2>
        <p class="mt-6 max-w-md text-base leading-relaxed text-muted">${esc(services.intro)}</p>
        <a href="${esc(booking.url)}" ${external} class="mt-10 hidden lg:inline-flex ${buttonClasses.outline}">${esc(services.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      </div>
    </div>
    <div class="lg:col-span-7 lg:col-start-6">
      <div class="hidden grid-cols-[1fr_8rem_6rem] gap-x-6 border-b border-ink pb-3 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-muted md:grid" aria-hidden="true">
        <span>${esc(services.columnLabels.service)}</span><span class="text-right">${esc(services.columnLabels.duration)}</span><span class="text-right">${esc(services.columnLabels.price)}</span>
      </div>
      <ul class="border-t border-ink md:border-t-0">${rows}</ul>
      ${services.note ? `<p class="mt-8 text-sm italic leading-relaxed text-muted">${esc(services.note)}</p>` : ''}
      <a href="${esc(booking.url)}" ${external} class="mt-10 lg:hidden ${buttonClasses.outline}">${esc(services.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
