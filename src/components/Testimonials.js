import { esc, sectionLabel } from './utils.js';

export function Testimonials({ testimonials }) {
  const cards = testimonials.items
    .map(
      (t) => `
      <li class="flex">
        <figure class="flex w-full flex-col bg-paper p-8 md:p-10">
          <span class="font-heading text-6xl leading-none text-accent" aria-hidden="true">&ldquo;</span>
          <blockquote class="mt-2 flex-1 font-heading text-2xl font-light italic leading-snug text-ink">
            <p>${esc(t.quote)}</p>
          </blockquote>
          <figcaption class="mt-8 border-t border-line pt-5">
            <span class="block text-xs font-medium uppercase tracking-[0.2em] text-ink">${esc(t.name)}</span>
            ${t.detail ? `<span class="mt-1 block text-sm text-muted">${esc(t.detail)}</span>` : ''}
          </figcaption>
        </figure>
      </li>`,
    )
    .join('');

  return `
<section id="testimonials" class="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36" aria-labelledby="testimonials-heading">
  <div class="mx-auto max-w-7xl px-5 md:px-10">
    <div class="mb-12 md:mb-16">
      ${sectionLabel(testimonials.label)}
      <h2 id="testimonials-heading" class="mt-6 font-heading text-4xl font-light text-ink md:text-5xl lg:text-6xl">${esc(testimonials.heading)}</h2>
    </div>
    <ul class="grid gap-4 md:gap-6 lg:grid-cols-3">${cards}</ul>
  </div>
</section>`;
}
