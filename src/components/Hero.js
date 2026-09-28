import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/**
 * Centered title over a three-photo collage: the hero image framed in the middle,
 * flanked by the first two gallery images (decorative here — they're in the gallery).
 */
export function Hero({ hero, booking, gallery }) {
  const [left, right] = gallery.images;
  const side = (img, cls) =>
    img
      ? `<div class="hidden overflow-hidden bg-cream md:block ${cls}"><img src="${esc(img.src)}" alt="" class="h-full w-full object-cover" decoding="async" /></div>`
      : '';

  return `
<section id="top" class="bg-paper pb-20 pt-12 md:pb-28 md:pt-16" aria-labelledby="hero-heading">
  <div class="mx-auto max-w-7xl px-5 text-center md:px-10">
    <p class="text-[0.68rem] font-medium uppercase tracking-[0.35em] text-accent">${esc(hero.eyebrow)}</p>
    <h1 id="hero-heading" class="mt-6 font-heading text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-ink">${esc(hero.heading)}</h1>

    <div class="mt-12 grid grid-cols-1 items-center gap-6 md:mt-16 md:grid-cols-12">
      ${side(left, 'aspect-[3/4] md:col-span-3 md:translate-y-16')}
      <div class="relative md:col-span-6">
        <div class="aspect-[4/5] overflow-hidden bg-cream">
          <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="h-full w-full object-cover" fetchpriority="high" decoding="async" />
        </div>
        <div class="pointer-events-none absolute inset-3 border border-paper/70 md:inset-5" aria-hidden="true"></div>
      </div>
      ${side(right, 'aspect-[3/4] md:col-span-3 md:-translate-y-16')}
    </div>

    <p class="mx-auto mt-14 max-w-xl font-heading text-2xl italic leading-snug text-ink md:mt-20 md:text-3xl">${esc(hero.tagline)}</p>
    <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(hero.ctaLabel)}</a>
      <a href="${esc(hero.secondaryCtaHref)}" class="${buttonClasses.outline}">${esc(hero.secondaryCtaLabel)} ${icon('arrowRight', 'h-3.5 w-3.5')}</a>
    </div>
  </div>
</section>`;
}
