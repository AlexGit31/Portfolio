/* ============================================
   日本 — Galerie photo
   ============================================ */

(async function () {
  const gallery = document.getElementById('gallery');
  const emptyState = document.getElementById('empty-state');
  const countEl = document.getElementById('photo-count');
  const lastUpdateEl = document.getElementById('last-update');
  const yearEl = document.getElementById('year');

  yearEl.textContent = new Date().getFullYear();

  // ---------- Charger le manifest ----------
  let manifest = { photos: [], generated_at: null };
  try {
    const res = await fetch('manifest.json', { cache: 'no-cache' });
    if (res.ok) {
      manifest = await res.json();
    }
  } catch (err) {
    console.warn('Manifest introuvable, mode vide.', err);
  }

  const photos = Array.isArray(manifest.photos) ? manifest.photos : [];

  if (photos.length === 0) {
    emptyState.hidden = false;
    countEl.textContent = '0';
    return;
  }

  countEl.textContent = String(photos.length).padStart(3, '0');

  if (manifest.generated_at) {
    const d = new Date(manifest.generated_at);
    lastUpdateEl.textContent = 'MAJ ' + d.toISOString().slice(0, 10);
  }

  // ---------- Construire la galerie ----------
  // Note : on n'a pas les dimensions des images à l'avance,
  // donc le masonry en CSS columns gère naturellement les hauteurs variables.
  const frag = document.createDocumentFragment();
  photos.forEach((p, i) => {
    const fig = document.createElement('figure');
    fig.className = 'photo';
    fig.dataset.index = String(i + 1).padStart(3, '0') + ' / ' + String(photos.length).padStart(3, '0');
    fig.dataset.idx = i;

    const img = document.createElement('img');
    img.src = p.src;
    img.alt = p.name || 'Photo ' + (i + 1);
    img.loading = 'lazy';
    img.decoding = 'async';

    fig.appendChild(img);
    frag.appendChild(fig);
  });
  gallery.appendChild(frag);

  // ---------- Apparition au scroll ----------
  const figs = gallery.querySelectorAll('.photo');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    figs.forEach((f) => io.observe(f));
  } else {
    figs.forEach((f) => f.classList.add('is-visible'));
  }

  // ---------- Lightbox ----------
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-image');
  const lbIndex = document.getElementById('lb-index');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  let currentIdx = -1;

  function openLightbox(idx) {
    currentIdx = idx;
    const p = photos[idx];
    lbImg.src = p.src;
    lbImg.alt = p.name || '';
    lbIndex.textContent =
      String(idx + 1).padStart(3, '0') + ' — ' + String(photos.length).padStart(3, '0');
    lb.hidden = false;
    lb.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => lb.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      lb.hidden = true;
      lbImg.src = '';
    }, 350);
    document.body.style.overflow = '';
    currentIdx = -1;
  }

  function navigate(delta) {
    if (currentIdx < 0) return;
    const next = (currentIdx + delta + photos.length) % photos.length;
    openLightbox(next);
  }

  gallery.addEventListener('click', (e) => {
    const fig = e.target.closest('.photo');
    if (!fig) return;
    const idx = Number(fig.dataset.idx);
    openLightbox(idx);
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => navigate(-1));
  lbNext.addEventListener('click', () => navigate(1));

  lb.addEventListener('click', (e) => {
    // clic en dehors de la figure
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') navigate(-1);
    else if (e.key === 'ArrowRight') navigate(1);
  });
})();
