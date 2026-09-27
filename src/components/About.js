import { esc, sectionLabel } from './utils.js';

export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties
    .map(
      (t) =>
        `<li class="border border-ink/80 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink">${esc(t)}</li>`,
    )
    .join('');

  return `
<section id="about" class="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
    <figure class="md:col-span-5">
      <div class="aspect-[4/5] overflow-hidden bg-cream">
        <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" width="900" height="1125" />
      </div>
    </figure>
    <div class="flex flex-col justify-center md:col-span-6 md:col-start-7">
      ${sectionLabel(about.label)}
      <h2 id="about-heading" class="mt-6 font-heading text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">${esc(about.heading)}</h2>
      <div class="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">${bio}</div>
      <h3 class="mt-12 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-muted">${esc(about.specialtiesLabel)}</h3>
      <ul class="mt-4 flex flex-wrap gap-3">${tags}</ul>
    </div>
  </div>
</section>`;
}
