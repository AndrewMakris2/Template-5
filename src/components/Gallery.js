import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

/**
 * Slideshow: one large image at a time in a swipeable track, with arrows, a
 * counter and a thumbnail rail. Without JS the track still swipes/scrolls.
 */
export function Gallery({ gallery }) {
  const total = String(gallery.images.length).padStart(2, '0');
  const slides = gallery.images
    .map(
      (img, i) => `
      <li class="w-full shrink-0 snap-center" data-show-slide>
        <div class="aspect-[4/5] overflow-hidden bg-cream md:aspect-[16/10]">
          <img src="${esc(img.full || img.src)}" alt="${esc(img.alt)}" class="h-full w-full object-cover" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async" />
        </div>
      </li>`,
    )
    .join('');
  const thumbs = gallery.images
    .map(
      (img, i) => `
      <li class="shrink-0">
        <button type="button" class="block h-20 w-16 overflow-hidden opacity-50 outline-offset-2 transition-opacity hover:opacity-100 aria-pressed:opacity-100 aria-pressed:outline aria-pressed:outline-1 aria-pressed:outline-accent md:h-24 md:w-20" aria-label="${esc(img.alt)}" aria-pressed="${i === 0}" data-show-thumb="${i}">
          <img src="${esc(img.src)}" alt="" class="h-full w-full object-cover" loading="lazy" decoding="async" />
        </button>
      </li>`,
    )
    .join('');
  const arrow = (dir, label, name, pos) =>
    `<button type="button" class="absolute top-1/2 ${pos} inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-paper/90 text-ink transition-colors hover:bg-accent hover:text-on-accent disabled:opacity-0" aria-label="${esc(label)}" aria-controls="show-track" data-show-${dir}>${icon(name, 'h-5 w-5')}</button>`;

  return `
<section id="gallery" class="scroll-mt-16 bg-cream py-24 md:py-32 lg:scroll-mt-32" aria-labelledby="gallery-heading" data-show>
  <div class="mx-auto max-w-6xl px-5 md:px-10">
    <div class="text-center">
      ${sectionLabel(gallery.label)}
      <h2 id="gallery-heading" class="mt-8 font-heading text-5xl text-ink md:text-6xl">${esc(gallery.heading)}</h2>
    </div>
    <div class="relative mt-14">
      <ul id="show-track" class="no-scrollbar flex snap-x snap-mandatory overflow-x-auto" data-show-track>${slides}</ul>
      ${arrow('prev', gallery.lightboxPrevLabel, 'chevronLeft', 'left-3 md:left-5')}
      ${arrow('next', gallery.lightboxNextLabel, 'chevronRight', 'right-3 md:right-5')}
    </div>
    <div class="mt-6 flex items-center justify-between gap-6">
      <p class="font-heading text-lg italic tabular-nums text-ink" aria-live="polite"><span data-show-current>01</span> <span class="text-muted">/ ${total}</span></p>
      <ul class="no-scrollbar flex gap-3 overflow-x-auto py-1 pr-1">${thumbs}</ul>
    </div>
  </div>
</section>`;
}
