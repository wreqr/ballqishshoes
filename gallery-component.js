/* ==========================================================================
   PRODUCT IMAGE GALLERY COMPONENT (ARRAY OF OBJECTS)
   ==========================================================================
   Struktur data: Array of Objects -> [{ id, src, alt }, ...]
   Tanpa dummy SVG — langsung menggunakan path file lokal Anda.
   ========================================================================== */

(function (global) {
  'use strict';

  // Default Array of Objects untuk Galeri Produk (mengarah langsung ke foto asli di assets/katalog/)
  const DEFAULT_GALLERY_IMAGES = [
    {
      id: 1,
      src: 'assets/katalog/G03/foto-1.jpg',
      alt: 'Ballqish G03 - Foto 1'
    },
    {
      id: 2,
      src: 'assets/katalog/G03/foto-2.jpg',
      alt: 'Ballqish G03 - Foto 2'
    },
    {
      id: 3,
      src: 'assets/katalog/G03/foto-3.jpg',
      alt: 'Ballqish G03 - Foto 3'
    },
    {
      id: 4,
      src: 'assets/katalog/G03/foto-4.jpg',
      alt: 'Ballqish G03 - Foto 4'
    }
  ];

  // Normalisasi agar menerima Array of Objects ({ id, src, alt }) maupun string path
  function normalizeGalleryItems(items, productTitle) {
    const source = Array.isArray(items) && items.length > 0 ? items : DEFAULT_GALLERY_IMAGES;
    return source.map((item, idx) => {
      if (typeof item === 'string') {
        return {
          id: idx + 1,
          src: item,
          alt: `${productTitle || 'Produk Ballqish'} - Foto ${idx + 1}`
        };
      }
      return {
        id: item.id !== undefined ? item.id : idx + 1,
        src: item.src,
        alt: item.alt || `${productTitle || 'Produk Ballqish'} - Foto ${idx + 1}`
      };
    });
  }

  // Render HTML komponen galeri dari Array of Objects menggunakan .map()
  function render(items, productTitle) {
    const gallery = normalizeGalleryItems(items, productTitle);
    const first = gallery[0];
    const hasMultiple = gallery.length > 1;

    return `
      <div class="product-gallery-component" data-gallery-root>
        <div class="detail-main-img-wrap" id="gallery-main-stage">
          ${hasMultiple ? `
            <button type="button" class="gallery-nav-btn prev" id="gallery-btn-prev" aria-label="Foto sebelumnya">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          ` : ''}

          <img
            id="detail-main-img"
            src="${first.src}"
            alt="${first.alt}"
            width="1080"
            height="720"
            fetchpriority="high"
            decoding="async">

          ${hasMultiple ? `
            <button type="button" class="gallery-nav-btn next" id="gallery-btn-next" aria-label="Foto berikutnya">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <span class="gallery-counter-badge" id="gallery-counter-badge">1 / ${gallery.length}</span>
          ` : ''}
        </div>

        <div class="detail-thumbs-strip" id="detail-thumbs-strip" role="tablist" aria-label="Galeri Foto ${productTitle || 'Produk'}">
          ${gallery.map((imgObj, idx) => `
            <button
              type="button"
              class="thumb-btn-img ${idx === 0 ? 'active' : ''}"
              data-id="${imgObj.id}"
              data-index="${idx}"
              data-src="${imgObj.src}"
              role="tab"
              aria-selected="${idx === 0 ? 'true' : 'false'}"
              aria-label="${imgObj.alt}">
              <img
                src="${imgObj.src}"
                alt="${imgObj.alt}"
                width="960"
                height="640"
                loading="lazy"
                decoding="async">
            </button>
          `).join('')}
        </div>
        ${gallery.length > 5 ? `
          <div class="gallery-swipe-hint">
            <span>← Geser deretan foto untuk sudut lain</span>
            <strong>${gallery.length} Foto</strong>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Pasang event listener klik thumbnail, tombol prev/next, swipe HP, & lightbox zoom
  function mount(container, items, productTitle) {
    const gallery = normalizeGalleryItems(items, productTitle);
    const mainStage = container.querySelector('#gallery-main-stage');
    const mainImg = container.querySelector('#detail-main-img');
    const thumbBtns = Array.from(container.querySelectorAll('.thumb-btn-img'));
    const btnPrev = container.querySelector('#gallery-btn-prev');
    const btnNext = container.querySelector('#gallery-btn-next');
    const counterBadge = container.querySelector('#gallery-counter-badge');
    const total = gallery.length;
    let activeIndex = 0;

    function setActiveImage(newIndex) {
      if (!mainImg || total === 0) return;
      activeIndex = ((newIndex % total) + total) % total;
      const currentObj = gallery[activeIndex];

      mainImg.classList.add('is-switching');
      setTimeout(() => {
        mainImg.src = currentObj.src;
        mainImg.alt = currentObj.alt;
        mainImg.classList.remove('is-switching');
      }, 80);

      if (counterBadge) {
        counterBadge.textContent = `${activeIndex + 1} / ${total}`;
      }

      thumbBtns.forEach((btn, idx) => {
        const isCurrent = idx === activeIndex;
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        if (isCurrent) {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
    }

    thumbBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => setActiveImage(idx));
    });

    if (btnPrev) btnPrev.addEventListener('click', () => setActiveImage(activeIndex - 1));
    if (btnNext) btnNext.addEventListener('click', () => setActiveImage(activeIndex + 1));

    // Touch swipe di layar HP
    if (mainStage && total > 1) {
      let touchStartX = 0;
      mainStage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      mainStage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 40) {
          setActiveImage(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
        }
      }, { passive: true });
    }

    // Lightbox Zoom saat foto utama diklik
    let lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'gallery-lightbox';
      lightbox.className = 'gallery-lightbox';
      lightbox.innerHTML = `
        <button type="button" class="gallery-lightbox-close" id="gallery-lightbox-close" aria-label="Tutup Zoom">&times;</button>
        <img class="gallery-lightbox-img" id="gallery-lightbox-img" src="" alt="Preview Zoom">
      `;
      document.body.appendChild(lightbox);

      const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      };
      lightbox.querySelector('#gallery-lightbox-close').addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
      });
    }

    if (mainImg) {
      mainImg.addEventListener('click', () => {
        const lbImg = document.getElementById('gallery-lightbox-img');
        if (lbImg) {
          lbImg.src = mainImg.src;
          lbImg.alt = mainImg.alt;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  }

  global.DEFAULT_GALLERY_IMAGES = DEFAULT_GALLERY_IMAGES;
  global.ProductImageGallery = {
    DEFAULT_GALLERY_IMAGES,
    render,
    mount
  };
})(window);
