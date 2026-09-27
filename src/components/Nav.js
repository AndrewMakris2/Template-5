import { esc, external } from './utils.js';
import { icon } from './icons.js';

export function Nav({ business, nav, social }) {
  const instagram = social.find((s) => s.platform === 'instagram');
  const links = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="nav-link relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink/80 transition-colors hover:text-ink">${esc(l.label)}</a></li>`,
    )
    .join('');
  const mobileLinks = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="block py-3 font-heading text-4xl font-light text-ink transition-colors hover:text-accent" data-menu-link>${esc(l.label)}</a></li>`,
    )
    .join('');
  const igLink = instagram
    ? `<a href="${esc(instagram.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-accent" aria-label="${esc(instagram.label)}">${icon('instagram')}</a>`
    : '';

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="site-header sticky top-0 z-50 border-b border-line/0 transition-[border-color] duration-300" data-header>
  <!-- Blur lives on its own layer: backdrop-filter on <header> itself would trap the fixed mobile menu inside it. -->
  <div class="absolute inset-0 -z-10 bg-paper/90 backdrop-blur-md" aria-hidden="true"></div>
  <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10" aria-label="Primary">
    <a href="#top" class="font-heading text-2xl font-normal tracking-wide text-ink md:text-[1.7rem]">${esc(business.name)}</a>

    <div class="hidden items-center gap-10 lg:flex">
      <ul class="flex items-center gap-8">${links}</ul>
      ${igLink}
    </div>

    <div class="flex items-center gap-1 lg:hidden">
      ${igLink}
      <button type="button" class="inline-flex h-10 w-10 items-center justify-center text-ink" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
        <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
        <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
      </button>
    </div>
  </nav>

  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper px-5 pb-10 pt-6 md:top-20 md:px-10 lg:hidden" hidden data-menu>
    <ul class="border-t border-line pt-6">${mobileLinks}</ul>
  </div>
</header>`;
}
