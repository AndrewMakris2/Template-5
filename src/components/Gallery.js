import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

export function Gallery({ gallery }) {
  const items = gallery.images
    .map(
      (img, i) => `
      <li>
        <button type="button" class="group relative block aspect-[4/5] w-full overflow-hidden bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" data-lightbox-item="${i}" data-full="${esc(img.full || img.src)}" aria-label="${esc(`${gallery.openImageLabel}: ${img.alt}`)}">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" loading="lazy" decoding="async" width="800" height="1000" />
        </button>
      </li>`,
    )
    .join('');

  return `
<section id="gallery" class="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36" aria-labelledby="gallery-heading">
  <div class="mx-auto max-w-7xl px-5 md:px-10">
    <div class="mb-12 md:mb-16">
      ${sectionLabel(gallery.label)}
      <h2 id="gallery-heading" class="mt-6 font-heading text-4xl font-light text-ink md:text-5xl lg:text-6xl">${esc(gallery.heading)}</h2>
    </div>
    <ul class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">${items}</ul>
  </div>

  <dialog class="lightbox m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 backdrop:bg-transparent" aria-label="${esc(gallery.heading)}" data-lightbox>
    <div class="flex h-full w-full items-center justify-center p-4 md:p-16" data-lightbox-backdrop>
      <img src="" alt="" class="max-h-full max-w-full object-contain" data-lightbox-img />
    </div>
    <button type="button" class="absolute right-3 top-3 inline-flex h-12 w-12 items-center justify-center text-on-ink hover:text-accent" aria-label="${esc(gallery.lightboxCloseLabel)}" data-lightbox-close>${icon('close', 'h-7 w-7')}</button>
    <button type="button" class="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-on-ink hover:text-accent md:left-6" aria-label="${esc(gallery.lightboxPrevLabel)}" data-lightbox-prev>${icon('chevronLeft', 'h-8 w-8')}</button>
    <button type="button" class="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-on-ink hover:text-accent md:right-6" aria-label="${esc(gallery.lightboxNextLabel)}" data-lightbox-next>${icon('chevronRight', 'h-8 w-8')}</button>
    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-on-ink/70" aria-live="polite" data-lightbox-counter></p>
  </dialog>
</section>`;
}
