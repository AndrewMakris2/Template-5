import { esc, sectionLabel } from './utils.js';

/** Emerald band: oval portrait with an offset gold outline beside centered text. */
export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties.map((t) => `<li>${esc(t)}</li>`).join('');

  return `
<section id="about" class="scroll-mt-16 bg-ink py-24 text-on-ink md:py-32 lg:scroll-mt-32" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-6xl items-center gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
    <figure class="relative mx-auto w-full max-w-xs sm:max-w-sm">
      <div class="absolute inset-0 translate-x-5 translate-y-5 rounded-[50%] border border-on-ink/40" aria-hidden="true"></div>
      <div class="relative aspect-[3/4] overflow-hidden rounded-[50%] bg-on-ink/10">
        <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" width="900" height="1125" />
      </div>
    </figure>
    <div class="text-center lg:text-left">
      <div class="lg:hidden">${sectionLabel(about.label, 'light')}</div>
      <div class="hidden lg:block">${sectionLabel(about.label, 'light', 'left')}</div>
      <h2 id="about-heading" class="mt-8 font-heading text-4xl italic leading-tight md:text-5xl">${esc(about.heading)}</h2>
      <div class="mt-8 space-y-5 text-base leading-relaxed text-on-ink/80 md:text-lg">${bio}</div>
      <h3 class="sr-only">${esc(about.specialtiesLabel)}</h3>
      <ul class="dot-list mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-on-ink lg:justify-start">${tags}</ul>
    </div>
  </div>
</section>`;
}
