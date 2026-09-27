import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

export function Hero({ hero, booking }) {
  return `
<section id="top" class="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-ink md:min-h-[calc(100svh-5rem)]" aria-labelledby="hero-heading">
  <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-80" fetchpriority="high" decoding="async" />
  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" aria-hidden="true"></div>

  <div class="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-24">
    <p class="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-on-ink/80">${esc(hero.eyebrow)}</p>
    <h1 id="hero-heading" class="max-w-4xl font-heading text-6xl font-light leading-[0.95] text-on-ink sm:text-7xl md:text-8xl lg:text-9xl">${esc(hero.heading)}</h1>
    <p class="mt-6 max-w-xl font-heading text-2xl font-light italic text-on-ink/90 md:text-3xl">${esc(hero.tagline)}</p>
    <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      <a href="${esc(booking.url)}" ${external} class="${buttonClasses.light}">${esc(hero.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      <a href="${esc(hero.secondaryCtaHref)}" class="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-on-ink">
        <span class="border-b border-on-ink/40 pb-1 transition-colors group-hover:border-on-ink">${esc(hero.secondaryCtaLabel)}</span>
      </a>
    </div>
  </div>
</section>`;
}
