import type { Directive } from 'vue';

let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver(): void {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
      if (eventName === 'enterViewport') {
        entry.target.classList.add('entered');
      }
      if (eventName === 'exitViewport') {
        entry.target.classList.remove('entered');
      }
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  });
}

const viewport: Directive<HTMLElement> = {
  mounted: (el, bindings) => {
    ensureIntersectionObserver();
    intersectionObserver.observe(el);
  },
  beforeUnmount: (el) => {
    intersectionObserver.unobserve(el);
  },
}

export default viewport;
