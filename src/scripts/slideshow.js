/**
 * Gallery slideshow: arrows, thumbnails and a counter drive a native scroll-snap
 * track, so swiping on touch devices works too.
 */
export function initSlideshow() {
  document.querySelectorAll('[data-show]').forEach((root) => {
    const track = root.querySelector('[data-show-track]');
    const slides = [...root.querySelectorAll('[data-show-slide]')];
    const thumbs = [...root.querySelectorAll('[data-show-thumb]')];
    const prev = root.querySelector('[data-show-prev]');
    const next = root.querySelector('[data-show-next]');
    const current = root.querySelector('[data-show-current]');
    if (!track || !slides.length) return;

    let index = 0;
    const goTo = (i) => track.scrollTo({ left: slides[i].offsetLeft, behavior: 'smooth' });
    const sync = () => {
      index = Math.round(track.scrollLeft / track.clientWidth);
      index = Math.max(0, Math.min(slides.length - 1, index));
      if (current) current.textContent = String(index + 1).padStart(2, '0');
      thumbs.forEach((t, n) => t.setAttribute('aria-pressed', String(n === index)));
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
    };

    prev?.addEventListener('click', () => goTo(Math.max(0, index - 1)));
    next?.addEventListener('click', () => goTo(Math.min(slides.length - 1, index + 1)));
    thumbs.forEach((t, i) => t.addEventListener('click', () => goTo(i)));
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goTo(Math.max(0, index - 1));
      if (e.key === 'ArrowRight') goTo(Math.min(slides.length - 1, index + 1));
    });
    let raf;
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(sync);
    }, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });
}
