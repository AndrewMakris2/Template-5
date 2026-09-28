import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Stacked masthead: letterspaced logo centered over a centered row of links, framed by fine rules. */
export function Nav({ business, nav, social, booking }) {
  const instagram = social.find((s) => s.platform === 'instagram');
  const links = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="nav-link relative py-1 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ink/75 transition-colors hover:text-ink">${esc(l.label)}</a></li>`,
    )
    .join('');
  const mobileLinks = nav.links
    .map(
      (l) =>
        `<li class="border-b border-on-ink/15 last:border-0"><a href="${esc(l.href)}" class="block py-5 font-heading text-3xl italic text-on-ink transition-colors hover:text-on-ink/70" data-menu-link>${esc(l.label)}</a></li>`,
    )
    .join('');
  const igLink = instagram
    ? `<a href="${esc(instagram.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-accent" aria-label="${esc(instagram.label)}">${icon('instagram', 'h-[18px] w-[18px]')}</a>`
    : '';

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="site-header sticky top-0 z-50 border-b border-line/0 transition-[border-color] duration-300" data-header>
  <div class="absolute inset-0 -z-10 bg-paper/95 backdrop-blur-md" aria-hidden="true"></div>
  <nav class="mx-auto max-w-7xl px-5 md:px-10" aria-label="Primary">
    <div class="grid h-16 grid-cols-[2.5rem_1fr_2.5rem] items-center lg:h-20">
      <span class="hidden lg:block">${igLink}</span>
      <span class="lg:hidden"></span>
      <a href="#top" class="text-center font-heading text-sm uppercase leading-tight tracking-[0.2em] text-ink sm:text-xl sm:tracking-[0.35em] lg:text-2xl">${esc(business.name)}</a>
      <div class="flex justify-end">
        <button type="button" class="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
          <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
          <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
        </button>
      </div>
    </div>
    <div class="hidden border-t border-accent/30 lg:block">
      <ul class="flex h-12 items-center justify-center gap-12">${links}</ul>
    </div>
  </nav>
  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink px-8 pb-12 pt-8 text-center lg:hidden" hidden data-menu>
    <ul>${mobileLinks}</ul>
    <a href="${esc(booking.url)}" ${external} class="mt-10 ${buttonClasses.light}">${esc(booking.label)}</a>
    ${instagram ? `<a href="${esc(instagram.url)}" ${external} class="mt-8 flex items-center justify-center gap-2 text-sm text-on-ink/80">${icon('instagram', 'h-4 w-4')}${esc(instagram.label)}</a>` : ''}
  </div>
</header>`;
}
