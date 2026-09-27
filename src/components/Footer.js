import { esc, external, telHref } from './utils.js';
import { icon } from './icons.js';

export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours
    .map(
      (h) =>
        `<div class="flex justify-between gap-6 py-1.5"><dt>${esc(h.days)}</dt><dd class="text-on-ink">${esc(h.time)}</dd></div>`,
    )
    .join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-11 w-11 items-center justify-center border border-on-ink/25 text-on-ink transition-colors hover:border-accent hover:bg-accent hover:text-on-accent" aria-label="${esc(s.label)}">${icon(s.platform)}</a></li>`,
    )
    .join('');
  const heading = 'text-[0.7rem] font-medium uppercase tracking-[0.3em] text-on-ink/60';

  return `
<footer class="bg-ink text-on-ink/70">
  <div class="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
    <div class="grid gap-14 md:grid-cols-12 md:gap-10">
      <div class="md:col-span-4">
        <a href="#top" class="font-heading text-4xl font-light text-on-ink">${esc(business.name)}</a>
        <p class="mt-4 max-w-xs font-heading text-xl font-light italic">${esc(business.tagline)}</p>
      </div>
      <div class="md:col-span-3 md:col-start-6">
        <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
        <dl class="mt-5 text-sm">${hours}</dl>
      </div>
      <div class="md:col-span-3 md:col-start-10">
        <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
        <address class="mt-5 space-y-2 text-sm not-italic leading-relaxed">
          <p>${esc(contact.address)}</p>
          <p><a href="mailto:${esc(contact.email)}" class="text-on-ink transition-colors hover:text-accent">${esc(contact.email)}</a></p>
          <p><a href="${esc(telHref(contact.phone))}" class="text-on-ink transition-colors hover:text-accent">${esc(contact.phone)}</a></p>
        </address>
        <h2 class="${heading} mt-10">${esc(footer.socialHeading)}</h2>
        <ul class="mt-5 flex gap-3">${socials}</ul>
      </div>
    </div>
    <div class="mt-20 flex flex-col-reverse gap-6 border-t border-on-ink/15 pt-8 text-xs tracking-wide sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
      <a href="#top" class="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-on-ink transition-colors hover:text-accent">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
    </div>
  </div>
</footer>`;
}
