import { esc, sectionLabel } from './utils.js';

/** One featured quote set large, the rest beneath it in two quieter columns. */
export function Testimonials({ testimonials }) {
  const [featured, ...rest] = testimonials.items;
  const cite = (t) =>
    `<figcaption class="mt-6 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ink">${esc(t.name)}${t.detail ? `<span class="mt-1 block font-heading text-sm normal-case italic tracking-normal text-muted">${esc(t.detail)}</span>` : ''}</figcaption>`;
  const others = rest
    .map(
      (t) => `
      <li>
        <figure class="text-center">
          <blockquote class="font-heading text-xl italic leading-relaxed text-ink md:text-2xl"><p>&ldquo;${esc(t.quote)}&rdquo;</p></blockquote>
          ${cite(t)}
        </figure>
      </li>`,
    )
    .join('');

  return `
<section id="testimonials" class="scroll-mt-16 bg-paper py-24 md:py-32 lg:scroll-mt-32" aria-labelledby="testimonials-heading">
  <div class="mx-auto max-w-5xl px-5 md:px-10">
    <div class="text-center">
      ${sectionLabel(testimonials.label)}
      <h2 id="testimonials-heading" class="sr-only">${esc(testimonials.heading)}</h2>
    </div>
    ${
      featured
        ? `<figure class="mx-auto mt-12 max-w-4xl text-center">
      <span class="block font-heading text-7xl leading-none text-accent" aria-hidden="true">&ldquo;</span>
      <blockquote class="-mt-4 font-heading text-3xl italic leading-snug text-ink md:text-5xl md:leading-[1.2]"><p>${esc(featured.quote)}</p></blockquote>
      ${cite(featured)}
    </figure>`
        : ''
    }
    ${others ? `<ul class="mt-20 grid gap-14 border-t border-line pt-16 md:grid-cols-2 md:gap-16">${others}</ul>` : ''}
  </div>
</section>`;
}
