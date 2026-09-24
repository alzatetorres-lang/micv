/**
 * Narrativa por scroll. Efectos portados de componentes de 21st.dev a TS sin
 * framework (la web es Astro estático; no se añade React ni framer-motion):
 *
 *  - Container Scroll Animation (Aceternity) ... [data-showcase]
 *  - Text Reveal (Magic UI) ...................... [data-manifesto]
 *  - Stacking Cards (Daniel Petho) ............... [data-stack]
 *  - Scroll Based Velocity (Magic UI) ............ [data-velocity]
 *  - Sticky Scroll Reveal (Aceternity) ........... [data-sticky-reveal]
 *  - Timeline + Tracing Beam (Aceternity) ........ [data-beam]
 *  - Animated Hero (rotating words) .............. [data-rotator]
 *  - Number Ticker (Magic UI) .................... [data-ticker]
 *  - Card Spotlight .............................. [data-spotlight]
 *
 * Todo el contenido es HTML real y visible sin JS. Con prefers-reduced-motion
 * no se arma nada: la página queda en su estado final, estática.
 */
import Lenis from 'lenis';

type Part = { read: () => void; write: () => void };

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const vh = () => window.innerHeight;

const parts: Part[] = [];
let queued = false;
const frame = () => {
  queued = false;
  // Primero todas las lecturas de layout, después todas las escrituras.
  for (const p of parts) p.read();
  for (const p of parts) p.write();
};
const schedule = () => {
  if (!queued) {
    queued = true;
    requestAnimationFrame(frame);
  }
};

/* ------------------------------------------------------------------ */
/* Scroll suave con inercia                                            */
/* ------------------------------------------------------------------ */
function initLenis(): Lenis {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.95,
    autoRaf: true,
    anchors: { offset: -88 },
  });
  lenis.on('scroll', schedule);
  return lenis;
}

/* ------------------------------------------------------------------ */
/* Hero: frases que rotan                                              */
/* ------------------------------------------------------------------ */
function initRotators() {
  document.querySelectorAll<HTMLElement>('[data-rotator]').forEach(rot => {
    const items = Array.from(rot.children) as HTMLElement[];
    if (items.length < 2) return;
    let i = 0;
    let visible = true;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(rot);
    setInterval(() => {
      if (!visible || document.hidden) return;
      const prev = items[i];
      i = (i + 1) % items.length;
      prev.classList.remove('is-on');
      prev.classList.add('is-off');
      items[i].classList.add('is-on');
      // La frase que sale vuelve abajo sin animarse, lista para su próximo turno.
      setTimeout(() => {
        prev.style.transition = 'none';
        prev.classList.remove('is-off');
        void prev.offsetHeight;
        prev.style.transition = '';
      }, 900);
    }, 2800);
  });
}

/* ------------------------------------------------------------------ */
/* Cifras que cuentan al entrar en pantalla                            */
/* ------------------------------------------------------------------ */
function initTickers() {
  const els = document.querySelectorAll<HTMLElement>('[data-ticker]');
  if (!els.length) return;
  const run = (el: HTMLElement) => {
    const to = Number(el.dataset.to);
    const from = Number(el.dataset.from ?? 0);
    const t0 = performance.now();
    const dur = 1700;
    const step = (t: number) => {
      const k = clamp((t - t0) / dur);
      const eased = 1 - Math.pow(2, -10 * k); // easeOutExpo
      el.textContent = String(Math.round(lerp(from, to, k === 1 ? 1 : eased)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) { run(e.target as HTMLElement); io.unobserve(e.target); }
    }
  }, { threshold: 0.6 });
  els.forEach(el => { el.textContent = el.dataset.from ?? '0'; io.observe(el); });
}

/* ------------------------------------------------------------------ */
/* Container Scroll: el dispositivo se endereza y la web corre dentro  */
/* ------------------------------------------------------------------ */
function initShowcase() {
  document.querySelectorAll<HTMLElement>('[data-showcase]').forEach(sec => {
    const card = sec.querySelector<HTMLElement>('[data-showcase-card]');
    const title = sec.querySelector<HTMLElement>('[data-showcase-title]');
    const screen = sec.querySelector<HTMLImageElement>('[data-showcase-screen]');
    if (!card || !title || !screen) return;
    let top = 0, height = 0, h = 0, mobile = false;
    parts.push({
      read() {
        const r = sec.getBoundingClientRect();
        top = r.top; height = r.height; h = vh(); mobile = window.innerWidth < 768;
      },
      write() {
        // Fase 1: de entrar por abajo a quedar fijado arriba -> se endereza.
        const a = clamp((h - top) / (h * 0.92));
        // Fase 2: fijado -> la captura se desplaza dentro de la pantalla.
        const b = clamp(-top / Math.max(1, height - h));
        const rot = lerp(22, 0, a);
        const scale = mobile ? lerp(0.82, 1, a) : lerp(1.06, 1, a);
        card.style.transform = `rotateX(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        title.style.transform = `translate3d(0, ${lerp(40, -30, a).toFixed(1)}px, 0)`;
        title.style.opacity = String(clamp(0.2 + a * 1.2) * (1 - clamp((b - 0.85) / 0.15)));
        screen.style.objectPosition = `50% ${(b * 100).toFixed(2)}%`;
      },
    });
  });
}

/* ------------------------------------------------------------------ */
/* Text Reveal: el manifiesto se ilumina palabra a palabra             */
/* ------------------------------------------------------------------ */
function initManifesto() {
  document.querySelectorAll<HTMLElement>('[data-manifesto]').forEach(sec => {
    const words = Array.from(sec.querySelectorAll<HTMLElement>('[data-word]'));
    const bar = sec.querySelector<HTMLElement>('[data-manifesto-bar]');
    let p = 0;
    const last: number[] = [];
    parts.push({
      read() {
        const r = sec.getBoundingClientRect();
        p = clamp(-r.top / Math.max(1, r.height - vh()));
      },
      write() {
        const n = words.length;
        const q = p * 1.12; // termina de iluminarse un poco antes de soltar
        words.forEach((w, i) => {
          const o = +(0.14 + 0.86 * clamp((q - i / n) * n)).toFixed(2);
          if (last[i] !== o) { w.style.opacity = String(o); last[i] = o; }
        });
        if (bar) bar.style.transform = `scaleX(${p.toFixed(3)})`;
      },
    });
  });
}

/* ------------------------------------------------------------------ */
/* Stacking Cards: los proyectos se apilan                             */
/* ------------------------------------------------------------------ */
function initStack() {
  const mq = matchMedia('(min-width: 768px)');
  document.querySelectorAll<HTMLElement>('[data-stack]').forEach(stack => {
    const cards = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack-card]'));
    const n = cards.length;
    let p = 0;
    parts.push({
      read() {
        const r = stack.getBoundingClientRect();
        p = clamp(-r.top / Math.max(1, r.height - vh()));
      },
      write() {
        cards.forEach((c, i) => {
          if (!mq.matches) { c.style.transform = ''; c.style.filter = ''; return; }
          const target = 1 - (n - 1 - i) * 0.045;
          const k = clamp((p - i / n) / (1 - i / n || 1));
          const s = lerp(1, target, k);
          c.style.transform = `scale(${s.toFixed(4)})`;
          c.style.filter = `brightness(${lerp(1, 0.9 + i * 0.015, k).toFixed(3)})`;
        });
      },
    });
  });
}

/* ------------------------------------------------------------------ */
/* Velocity Scroll: la banda de herramientas acelera con el scroll     */
/* ------------------------------------------------------------------ */
function initVelocity(lenis: Lenis) {
  document.querySelectorAll<HTMLElement>('[data-velocity]').forEach(row => {
    const track = row.querySelector<HTMLElement>('[data-velocity-track]');
    if (!track) return;
    const base = Number(row.dataset.velocity ?? 40); // px/s
    let x = 0, dir = base < 0 ? -1 : 1, last = performance.now(), running = false;
    const speed = Math.abs(base);
    const tick = (t: number) => {
      if (!running) return;
      const dt = Math.min(64, t - last) / 1000;
      last = t;
      const v = lenis.velocity; // px/frame aprox.
      if (v > 0.2) dir = base < 0 ? -1 : 1;
      else if (v < -0.2) dir = base < 0 ? 1 : -1;
      const boost = 1 + Math.min(12, Math.abs(v) * 0.9);
      const half = track.scrollWidth / 2;
      x -= dir * speed * boost * dt;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
      requestAnimationFrame(tick);
    };
    new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      if (running) { last = performance.now(); requestAnimationFrame(tick); }
    }).observe(row);
  });
}

/* ------------------------------------------------------------------ */
/* Sticky Scroll Reveal: capacidades con panel fijo                    */
/* ------------------------------------------------------------------ */
function initStickyReveal() {
  document.querySelectorAll<HTMLElement>('[data-sticky-reveal]').forEach(sec => {
    const items = Array.from(sec.querySelectorAll<HTMLElement>('[data-sr-item]'));
    const slides = Array.from(sec.querySelectorAll<HTMLElement>('[data-sr-slide]'));
    const panel = sec.querySelector<HTMLElement>('[data-sr-panel]');
    const counter = sec.querySelector<HTMLElement>('[data-sr-count]');
    let active = -1, next = 0;
    parts.push({
      read() {
        const mid = vh() * 0.5;
        let best = Infinity;
        items.forEach((it, i) => {
          const r = it.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - mid);
          if (d < best) { best = d; next = i; }
        });
      },
      write() {
        if (next === active) return;
        active = next;
        items.forEach((it, i) => it.classList.toggle('is-active', i === active));
        slides.forEach((s, i) => {
          const on = i === active;
          s.classList.toggle('is-active', on);
          s.toggleAttribute('inert', !on);
          if (on) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true');
        });
        panel?.style.setProperty('--sr', String(active));
        panel?.setAttribute('data-sr-index', String(active));
        if (counter) counter.textContent = String(active + 1).padStart(2, '0');
      },
    });
  });
}

/* ------------------------------------------------------------------ */
/* Timeline: el rayo recorre la trayectoria                            */
/* ------------------------------------------------------------------ */
function initBeam() {
  document.querySelectorAll<HTMLElement>('[data-beam]').forEach(list => {
    const beam = list.querySelector<HTMLElement>('[data-beam-line]');
    const dots = Array.from(list.querySelectorAll<HTMLElement>('[data-beam-dot]'));
    if (!beam) return;
    let p = 0, height = 1;
    const offs: number[] = [];
    parts.push({
      read() {
        const r = list.getBoundingClientRect();
        height = r.height;
        p = clamp((vh() * 0.62 - r.top) / Math.max(1, height));
        dots.forEach((d, i) => { offs[i] = d.getBoundingClientRect().top - r.top; });
      },
      write() {
        beam.style.transform = `scaleY(${p.toFixed(4)})`;
        dots.forEach((d, i) => d.classList.toggle('is-lit', offs[i] <= p * height + 4));
      },
    });
  });
}

/* ------------------------------------------------------------------ */
/* Spotlight: el borde de la tarjeta se ilumina bajo el cursor         */
/* ------------------------------------------------------------------ */
function initSpotlight() {
  if (!matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--sx', `${e.clientX - r.left}px`);
      el.style.setProperty('--sy', `${e.clientY - r.top}px`);
    }, { passive: true });
  });
}

/* ------------------------------------------------------------------ */
/* Raíl de capítulos (escritorio ancho)                                */
/* ------------------------------------------------------------------ */
function initRail(lenis: Lenis) {
  const rail = document.querySelector<HTMLElement>('[data-rail]');
  const chapters = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
  if (!rail || chapters.length < 3) return;
  const links = chapters.map((ch, i) => {
    if (!ch.id) ch.id = `capitulo-${i + 1}`;
    const a = document.createElement('a');
    a.href = `#${ch.id}`;
    a.className = 'rail-link';
    a.innerHTML = `<span class="rail-dot"></span><span class="rail-label">${ch.dataset.chapter}</span>`;
    a.addEventListener('click', ev => { ev.preventDefault(); lenis.scrollTo(ch, { offset: -88 }); });
    rail.appendChild(a);
    return a;
  });
  rail.hidden = false;
  let current = -1, next = 0;
  parts.push({
    read() {
      const mid = vh() * 0.4;
      next = 0;
      chapters.forEach((ch, i) => { if (ch.getBoundingClientRect().top <= mid) next = i; });
    },
    write() {
      if (next === current) return;
      current = next;
      links.forEach((l, i) => l.classList.toggle('is-active', i === current));
    },
  });
}

export function initStory(): void {
  if (typeof window === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('story-on');
  const lenis = initLenis();
  initRotators();
  initTickers();
  initShowcase();
  initManifesto();
  initStack();
  initVelocity(lenis);
  initStickyReveal();
  initBeam();
  initSpotlight();
  initRail(lenis);

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  schedule();
}
