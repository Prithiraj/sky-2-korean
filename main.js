const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const syncHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

if (menuToggle && nav) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    menuToggle.querySelector('.sr-only').textContent = 'Open navigation';
  };

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
    menuToggle.querySelector('.sr-only').textContent = expanded ? 'Open navigation' : 'Close navigation';
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });
}

const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  reveals.forEach((item) => observer.observe(item));
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

function getDubaiTimeParts() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dubai',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return { hour: Number(map.hour), minute: Number(map.minute) };
}

function updateOpenStatus() {
  const node = document.querySelector('[data-open-status]');
  if (!node) return;

  try {
    const { hour, minute } = getDubaiTimeParts();
    const minutes = hour * 60 + minute;
    const lunchOpen = minutes >= 12 * 60 && minutes < 14 * 60;
    const dinnerOpen = minutes >= 18 * 60 && minutes < 23 * 60;
    const open = lunchOpen || dinnerOpen;

    node.textContent = open ? 'Open now · Dubai time' : 'Closed now · 12–2 PM · 6–11 PM';
    node.dataset.open = String(open);
  } catch {
    node.textContent = 'Hours: 12–2 PM · 6–11 PM';
  }
}
updateOpenStatus();
setInterval(updateOpenStatus, 60_000);

async function initEmbers() {
  if (reducedMotion) return;
  const canvas = document.querySelector('[data-ember-canvas]');
  if (!canvas) return;

  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    const count = 34;
    const positions = new Float32Array(count * 3);
    const drift = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const x = 0.5 + Math.random() * 4.2;
      const y = -3 + Math.random() * 2.7;
      const z = (Math.random() - 0.5) * 1.6;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      drift[i] = 0.004 + Math.random() * 0.008;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xf3a55d,
      size: 0.055,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    let frame;
    const animate = () => {
      const attr = geometry.attributes.position;
      for (let i = 0; i < count; i += 1) {
        attr.array[i * 3 + 1] += drift[i];
        attr.array[i * 3] += Math.sin(performance.now() * 0.0008 + i) * 0.00035;
        if (attr.array[i * 3 + 1] > 1.25) {
          attr.array[i * 3 + 1] = -3;
          attr.array[i * 3] = 0.5 + Math.random() * 4.2;
        }
      }
      attr.needsUpdate = true;
      points.rotation.z = Math.sin(performance.now() * 0.00015) * 0.015;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = undefined;
      } else if (!document.hidden && !frame) {
        animate();
      }
    });
  } catch (error) {
    console.info('Three.js enhancement unavailable; static hero remains fully functional.', error);
  }
}

initEmbers();
