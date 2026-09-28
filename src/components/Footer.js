import { esc, external, telHref } from './utils.js';
import { icon } from './icons.js';

/** Centered emerald footer with a letterspaced logo, gold rule and three centered columns. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours.map((h) => `<div><dt class="text-on-ink/60">${esc(h.days)}</dt><dd class="text-on-ink">${esc(h.time)}</dd></div>`).join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-on-ink/30 text-on-ink transition-colors hover:bg-on-ink hover:text-ink" aria-label="${esc(s.label)}">${icon(s.platform, 'h-[18px] w-[18px]')}</a></li>`,
    )
    .join('');
  const heading = 'font-heading text-lg italic text-on-ink';

  return `
<footer class="bg-ink text-on-ink/75">
  <div class="mx-auto max-w-6xl px-5 py-20 text-center md:px-10 md:py-24">
    <a href="#top" class="font-heading text-2xl uppercase tracking-[0.35em] text-on-ink md:text-3xl">${esc(business.name)}</a>
    <p class="mt-4 font-heading text-lg italic">${esc(business.tagline)}</p>
    <span class="mx-auto mt-10 block h-px w-16 bg-on-ink/40" aria-hidden="true"></span>
    <div class="mt-12 grid gap-12 text-sm md:grid-cols-3">
      <div>
        <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
        <dl class="mt-4 space-y-3">${hours}</dl>
      </div>
      <div>
        <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
        <address class="mt-4 space-y-1 not-italic">
          <p>${esc(contact.address)}</p>
          <p><a href="mailto:${esc(contact.email)}" class="text-on-ink hover:underline">${esc(contact.email)}</a></p>
          <p><a href="${esc(telHref(contact.phone))}" class="text-on-ink hover:underline">${esc(contact.phone)}</a></p>
        </address>
      </div>
      <div>
        <h2 class="${heading}">${esc(footer.socialHeading)}</h2>
        <ul class="mt-4 flex justify-center gap-3">${socials}</ul>
      </div>
    </div>
    <div class="mt-16 flex flex-col items-center gap-4 border-t border-on-ink/15 pt-8 text-[0.68rem] uppercase tracking-[0.25em] sm:flex-row sm:justify-between">
      <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
      <a href="#top" class="inline-flex items-center gap-2 text-on-ink hover:underline">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-3.5 w-3.5')}</a>
    </div>
  </div>
</footer>`;
}
