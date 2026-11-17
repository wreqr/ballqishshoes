/* ==========================================================================
   BALLQISH STOREFRONT ENGINE - MULTI-PAGE ARCHITECTURE
   Theme: Ballqish Signature Red (#ED2024), Obsidian (#121212)
   Official Owner WhatsApp: 0896-1606-7647
   Data Produk Terpusat: products.js (window.BALLQISH_PRODUCTS)
   ========================================================================== */

(function () {
  'use strict';

  // Ambil daftar produk dari products.js (Single Source of Truth)
  const PRODUCTS = Array.isArray(window.BALLQISH_PRODUCTS) ? window.BALLQISH_PRODUCTS : [];

  // Helper format rupiah
  function formatRupiah(num) {
    return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
  }

  // Helper normalisasi item produk agar aman meski user hanya mengisi field dasar di products.js
  function normalizeProduct(raw, index) {
    const numStr = raw.number || String(index + 1).padStart(2, '0');
    const mainImg = raw.image || (raw.folder ? `${raw.folder}/foto-1.jpg` : 'assets/placeholder-model-01.svg');
    const fallbackImg = raw.fallbackImage || 'assets/placeholder-model-01.svg';
    const gallery = Array.isArray(raw.gallery) && raw.gallery.length > 0 ? raw.gallery : [mainImg];
    const sizes = Array.isArray(raw.sizes) && raw.sizes.length > 0 ? raw.sizes : ['39', '40', '41', '42', '43'];
    const specs = Array.isArray(raw.specs) && raw.specs.length > 0 ? raw.specs : [
      'Material: Kulit Sintetis PU Premium Grade A (Lentur, Tidak Mudah Retak/Pecah)',
      'Outsole: Elastis Anti-Slip (tersedia pilihan variasi outsole sesuai kebutuhan)',
      'Insole: Busa Berpori Ergonomis Peredam Benturan Tumit',
      'Konstruksi: Perakitan Presisi dengan Lem Khusus Berdaya Rekat Tinggi (Pengrajin Desa Sruni, Sidoarjo)'
    ];
    return {
      id: raw.id || `model-${numStr}`,
      number: numStr,
      name: raw.name || `Ballqish Model ${numStr}`,
      model: raw.model || `BQ-${numStr}`,
      category: raw.category || 'Sepatu Pantofel',
      price: Number(raw.price || 0),
      originalPrice: raw.originalPrice ? Number(raw.originalPrice) : 0,
      wholesalePrice: raw.wholesalePrice ? Number(raw.wholesalePrice) : 0,
      badge: raw.badge || '',
      rating: raw.rating || '4.9',
      image: mainImg,
      fallbackImage: fallbackImg,
      gallery,
      description: raw.description || 'Sepatu pantofel handmade produksi langsung pengrajin Desa Sruni, Gedangan, Sidoarjo sejak tahun 2002.',
      specs,
      sizes
    };
  }

  // State katalog (Pencarian & Urutan)
  let currentSearchQuery = '';
  let currentSortMode = 'default';

  // --- RENDER KATALOG PRODUK DINAMIS DI HALAMAN KATALOG.HTML ---
  function renderProductsCatalog() {
    const grid = document.getElementById('catalog-10-grid') || document.getElementById('catalog-grid');
    if (!grid) return;

    const allItems = PRODUCTS.map((p, idx) => normalizeProduct(p, idx));
    const q = currentSearchQuery.trim().toLowerCase();

    let items = allItems;
    if (q) {
      items = allItems.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.number.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q)
      );
    }

    if (currentSortMode === 'price-asc') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (currentSortMode === 'price-desc') {
      items = [...items].sort((a, b) => b.price - a.price);
    } else if (currentSortMode === 'name-asc') {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name, 'id'));
    }

    // Update live result counter
    const countEl = document.getElementById('catalog-result-count');
    if (countEl) {
      countEl.innerHTML = q
        ? `Ditemukan <strong>${items.length}</strong> dari ${allItems.length} model`
        : `Menampilkan <strong>${items.length}</strong> model`;
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background-color: var(--surface); border: 1px dashed var(--border-strong); border-radius: var(--radius-md); color: var(--ink-secondary);">
          <p style="font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px;">Model "${currentSearchQuery}" tidak ditemukan.</p>
          <p style="font-size: 13px; margin-bottom: 16px;">Coba cari kode lain (misal: G03, G15, G70, K01, T02) atau konsultasikan custom model via WhatsApp.</p>
          <button type="button" id="btn-reset-catalog-search" class="catalog-filter-btn active">Tampilkan Semua Model</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-catalog-search');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentSearchQuery = '';
          const searchInput = document.getElementById('catalog-search');
          const clearBtn = document.getElementById('catalog-search-clear');
          if (searchInput) searchInput.value = '';
          if (clearBtn) clearBtn.classList.remove('visible');
          renderProductsCatalog();
        });
      }
      return;
    }

    grid.innerHTML = items.map((p, idx) => `
      <article class="catalog-card-10">
        <a href="produk-detail.html?id=${p.id}" class="card-10-media" aria-label="Lihat detail ${p.name}">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            width="1080"
            height="720"
            loading="${idx < 4 ? 'eager' : 'lazy'}"
            ${idx < 2 ? 'fetchpriority="high"' : ''}
            decoding="async"
            onerror="this.onerror=null; this.src='${p.fallbackImage}';">
          ${p.badge ? `<span class="card-10-badge">${p.badge}</span>` : ''}
          <span class="card-10-num">${p.number}</span>
        </a>
        <div class="card-10-content">
          <div style="margin-bottom: 4px;">
            <span style="font-size: 10px; color: var(--ink-muted); font-weight: 600;">Model ${p.number}</span>
          </div>
          <h3 class="card-10-title"><a href="produk-detail.html?id=${p.id}">${p.name}</a></h3>

          <div class="card-10-footer mt-auto">
            <div class="card-10-pricing">
              <span class="card-price-main">${formatRupiah(p.price)}</span>
              ${p.originalPrice > p.price ? `<span class="card-price-strike">${formatRupiah(p.originalPrice)}</span>` : ''}
            </div>

            ${p.wholesalePrice > 0 ? `
              <div style="font-size: 11px; color: var(--ballqish-red); font-weight: 700; margin-bottom: 12px;">
                Grosir 12+: ${formatRupiah(p.wholesalePrice)} / psg
              </div>
            ` : '<div style="margin-bottom: 12px;"></div>'}

            <a href="produk-detail.html?id=${p.id}" class="card-10-btn">
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --- CONTROLS KATALOG (SEARCH, SORT, FILTER BUTTON) ---
  function initCatalogFilters() {
    const searchInput = document.getElementById('catalog-search');
    const clearBtn = document.getElementById('catalog-search-clear');
    const sortSelect = document.getElementById('catalog-sort');
    const filterContainer = document.getElementById('catalog-filters');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        currentSearchQuery = searchInput.value || '';
        if (clearBtn) {
          clearBtn.classList.toggle('visible', currentSearchQuery.length > 0);
        }
        renderProductsCatalog();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchQuery = '';
        clearBtn.classList.remove('visible');
        searchInput.focus();
        renderProductsCatalog();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        currentSortMode = sortSelect.value || 'default';
        renderProductsCatalog();
      });
    }

    if (filterContainer) {
      const filterBtns = filterContainer.querySelectorAll('.catalog-filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          currentSearchQuery = '';
          if (searchInput) searchInput.value = '';
          if (clearBtn) clearBtn.classList.remove('visible');
          renderProductsCatalog();
        });
      });
    }
  }

  // --- RENDER MODEL LAINNYA DI HALAMAN PRODUK-DETAIL.HTML ---
  function renderRelatedProducts(currentId) {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid || PRODUCTS.length === 0) return;

    const others = PRODUCTS
      .map((p, idx) => normalizeProduct(p, idx))
      .filter(p => p.id !== currentId)
      .slice(0, 4);

    relatedGrid.innerHTML = others.map(p => `
      <a href="produk-detail.html?id=${p.id}" class="catalog-card-10" style="text-decoration: none;">
        <div class="card-10-media">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            width="1080"
            height="720"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null; this.src='${p.fallbackImage}';">
          ${p.badge ? `<span class="card-10-badge">${p.badge}</span>` : ''}
          <span class="card-10-num">${p.number}</span>
        </div>
        <div class="card-10-content">
          <h4 class="card-10-title" style="font-size: 16px;">${p.name}</h4>
          <div class="card-10-pricing mt-auto" style="margin-bottom: 0; padding-top: 8px;">
            <span class="card-price-main" style="font-size: 16px;">${formatRupiah(p.price)}</span>
            ${p.originalPrice > p.price ? `<span class="card-price-strike">${formatRupiah(p.originalPrice)}</span>` : ''}
          </div>
        </div>
      </a>
    `).join('');
  }

  // --- RENDER DETAIL PRODUK DI HALAMAN PRODUK-DETAIL.HTML ---
  function renderSingleProductDetail() {
    const container = document.getElementById('single-product-container');
    if (!container || PRODUCTS.length === 0) return;

    // Ambil id dari parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || PRODUCTS[0].id;
    const matchedIndex = PRODUCTS.findIndex(p => p.id === productId);
    const idx = matchedIndex >= 0 ? matchedIndex : 0;
    const product = normalizeProduct(PRODUCTS[idx], idx);

    // Update document title
    document.title = `${product.name} - Ballqish Sepatu Sidoarjo`;

    // Update semantic breadcrumb name
    const breadcrumbProduct = document.getElementById('breadcrumb-product-name');
    if (breadcrumbProduct) {
      breadcrumbProduct.textContent = product.name;
    }

    // Render daftar model lainnya otomatis dari products.js
    renderRelatedProducts(product.id);

    // State pilihan ukuran & quantity
    let selectedSize = product.sizes[0];
    let selectedQty = 1;
    const discountPct = product.originalPrice > product.price
      ? Math.round((1 - (product.price / product.originalPrice)) * 100)
      : 0;

    // Helper render galeri thumbnail berbasis array .map() (bebas jumlah foto)
    function buildThumbnailGalleryHTML(images, title, fallback) {
      const hasMultiple = images.length > 1;
      return `
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
            src="${images[0]}" 
            alt="${title} - Foto 1"
            width="1080"
            height="720"
            fetchpriority="high"
            decoding="async"
            onerror="this.onerror=null; this.src='${fallback}';">

          ${hasMultiple ? `
            <button type="button" class="gallery-nav-btn next" id="gallery-btn-next" aria-label="Foto berikutnya">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <span class="gallery-counter-badge" id="gallery-counter-badge">1 / ${images.length}</span>
          ` : ''}
        </div>

        <div class="detail-thumbs-strip" id="detail-thumbs-strip" role="tablist" aria-label="Galeri Foto ${title}">
          ${images.map((imgSrc, gIdx) => `
            <button 
              type="button" 
              class="thumb-btn-img ${gIdx === 0 ? 'active' : ''}" 
              data-index="${gIdx}"
              data-src="${imgSrc}" 
              data-fallback="${fallback}" 
              role="tab"
              aria-selected="${gIdx === 0 ? 'true' : 'false'}"
              aria-label="Lihat Foto ${gIdx + 1} dari ${images.length}">
              <img 
                src="${imgSrc}" 
                alt="${title} - Thumbnail ${gIdx + 1}"
                width="1080"
                height="720"
                loading="lazy"
                decoding="async"
                onerror="this.onerror=null; this.src='${fallback}';">
            </button>
          `).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="detail-view-grid">
        <!-- Kolom Galeri Foto (Main Image + Array-Mapped Thumbnails) -->
        <div class="detail-media-gallery">
          ${buildThumbnailGalleryHTML(product.gallery, product.name, product.fallbackImage)}

          <div style="background-color: #ffffff; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 18px; margin-top: 14px;">
            <h4 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ballqish-red); font-weight: 700; margin-bottom: 8px;">
              🛡️ Kualitas Resmi Ballqish Sidoarjo:
            </h4>
            <ul style="font-size: 12.5px; color: var(--ink-secondary); line-height: 1.6; list-style: disc; padding-left: 18px;">
              <li>100% produksi langsung dari pengrajin lokal Desa Sruni, Gedangan sejak 2002 (Tangan Pertama).</li>
              <li>Bahan kulit sintetis PU Premium Grade A lentur, kuat, dan tidak mudah retak.</li>
              <li>Pilihan jenis outsole & material fleksibel sesuai kebutuhan dan anggaran.</li>
            </ul>
          </div>
        </div>

        <!-- Kolom Informasi & Order Langsung -->
        <div class="detail-info-box">
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px; flex-wrap: wrap;">
            ${product.badge ? `<span class="card-10-badge" style="position: static;">${product.badge}</span>` : ''}
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--ink-muted); font-weight: 600;">
              Ref: ${product.model}
            </span>
            <span style="font-size: 11px; color: var(--ballqish-red); font-weight: 700; background-color: var(--ballqish-red-light); padding: 2px 8px; border-radius: 4px;">
              Model No. ${product.number}
            </span>
          </div>

          <h1 class="detail-title">${product.name}</h1>

          <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; margin-bottom: 12px;">
            <span style="color: #f59e0b; letter-spacing: 1px;">★★★★★</span>
            <span style="font-weight: 700;">${product.rating}</span>
            <span style="color: var(--ink-muted);">(Rating Pelanggan Google Maps & Shopee)</span>
          </div>

          <div class="detail-price-box">
            <span class="detail-price-big">${formatRupiah(product.price)}</span>
            ${product.originalPrice > product.price ? `<span class="detail-price-coret">${formatRupiah(product.originalPrice)}</span>` : ''}
            ${discountPct > 0 ? `<span class="detail-badge-hemat">HEMAT ${discountPct}%</span>` : ''}
          </div>

          ${product.wholesalePrice > 0 ? `
            <div style="background-color: var(--ballqish-red-light); border: 1px solid rgba(237,32,36,0.2); padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 20px;">
              <span style="font-size: 12px; font-weight: 700; color: var(--ballqish-red);">
                💼 Tarif Grosir B2B (Min. 12 Pasang): ${formatRupiah(product.wholesalePrice)} / psg
              </span>
              <div style="font-size: 11px; color: var(--ink-secondary); margin-top: 2px;">
                Bisa campur ukuran & custom logo instansi untuk pemesanan dinas/toko.
              </div>
            </div>
          ` : ''}

          <p style="font-size: 14.5px; color: var(--ink-secondary); line-height: 1.7; margin-bottom: 24px;">
            ${product.description}
          </p>

          <!-- Spesifikasi List -->
          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--ink); font-weight: 700; margin-bottom: 10px;">
              Spesifikasi Produk:
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-secondary);">
              ${product.specs.map(spec => `
                <li style="display: flex; gap: 8px;">
                  <span style="color: var(--ballqish-red); font-weight: 800;">✓</span>
                  <span>${spec}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Pilihan Ukuran Standar -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; font-weight: 700; color: var(--ink);">
                Pilih Ukuran Standar (EU):
              </label>
              <span id="selected-size-label" style="font-size: 12px; font-weight: 700; color: var(--ballqish-red);">
                Ukuran: ${selectedSize}
              </span>
            </div>

            <div class="size-pill-grid" id="detail-size-selector">
              ${product.sizes.map((s, sIdx) => `
                <button type="button" class="size-pill-choice ${sIdx === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>
              `).join('')}
            </div>

            <p class="size-custom-note">
              Tersedia ukuran custom kecil (36-38) dan besar (44-45) by request dengan penyesuaian harga.
            </p>
          </div>

          <!-- Sistem Pre-Order (PO) -->
          <div class="po-flow-box">
            <div class="po-flow-title">
              <span aria-hidden="true">📋</span>
              <span>Sistem Pre-Order (PO)</span>
            </div>
            <div class="po-flow-steps">
              <span class="po-step-chip">💬 Diskusi Harga</span>
              <span class="po-step-arrow" aria-hidden="true">➔</span>
              <span class="po-step-chip">💳 Pesanan Masuk &amp; Bayar</span>
              <span class="po-step-arrow" aria-hidden="true">➔</span>
              <span class="po-step-chip">🛠️ Proses Produksi</span>
              <span class="po-step-arrow" aria-hidden="true">➔</span>
              <span class="po-step-chip">📦 Sepatu Dikirim</span>
            </div>
          </div>

          <!-- Pilihan Jumlah & Tombol Diskusi & Pesan via WhatsApp (PO) -->
          <div class="order-action-row">
            <div class="qty-stepper">
              <button type="button" id="btn-qty-minus" style="width: 40px; height: 100%; font-size: 18px; font-weight: 700; color: var(--ink);">&minus;</button>
              <span id="qty-display" style="width: 44px; text-align: center; font-weight: 800; font-size: 15px;">1</span>
              <button type="button" id="btn-qty-plus" style="width: 40px; height: 100%; font-size: 18px; font-weight: 700; color: var(--ink);">+</button>
            </div>

            <button type="button" id="btn-order-wa-owner" class="order-wa-main-btn" style="flex: 1; margin-top: 0;">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197-.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Diskusi &amp; Pesan via WhatsApp (PO)
            </button>
          </div>

          <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="katalog.html" class="nav-hyperlink" style="border: 1px solid var(--border-strong);">
              &larr; Kembali ke Katalog Sepatu
            </a>
            <a href="lokasi.html" class="nav-hyperlink" style="border: 1px solid var(--border-strong);">
              Lihat Peta Workshop Sidoarjo &rarr;
            </a>
          </div>
        </div>
      </div>
    `;

    // --- INTERACTIVE THUMBNAIL GALLERY ENGINE (Click, Prev/Next, Touch Swipe & Zoom) ---
    const mainStage = container.querySelector('#gallery-main-stage');
    const mainImg = container.querySelector('#detail-main-img');
    const thumbBtns = Array.from(container.querySelectorAll('.thumb-btn-img'));
    const btnPrev = container.querySelector('#gallery-btn-prev');
    const btnNext = container.querySelector('#gallery-btn-next');
    const counterBadge = container.querySelector('#gallery-counter-badge');
    const totalImages = product.gallery.length;
    let activeImgIndex = 0;

    function updateGalleryImage(newIndex) {
      if (!mainImg || totalImages === 0) return;
      activeImgIndex = ((newIndex % totalImages) + totalImages) % totalImages;
      const nextSrc = product.gallery[activeImgIndex];

      mainImg.classList.add('is-switching');
      setTimeout(() => {
        mainImg.src = nextSrc;
        mainImg.alt = `${product.name} - Foto ${activeImgIndex + 1}`;
        mainImg.onerror = function () {
          this.onerror = null;
          this.src = product.fallbackImage;
        };
        mainImg.classList.remove('is-switching');
      }, 90);

      if (counterBadge) {
        counterBadge.textContent = `${activeImgIndex + 1} / ${totalImages}`;
      }

      thumbBtns.forEach((btn, idx) => {
        const isCurrent = idx === activeImgIndex;
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        if (isCurrent) {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
    }

    thumbBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => updateGalleryImage(idx));
    });

    if (btnPrev) btnPrev.addEventListener('click', () => updateGalleryImage(activeImgIndex - 1));
    if (btnNext) btnNext.addEventListener('click', () => updateGalleryImage(activeImgIndex + 1));

    // Touch swipe support pada layar HP
    if (mainStage && totalImages > 1) {
      let touchStartX = 0;
      mainStage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      mainStage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 40) {
          updateGalleryImage(deltaX < 0 ? activeImgIndex + 1 : activeImgIndex - 1);
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

    // Helper kirim order via WhatsApp Owner (0896-1606-7647)
    function triggerWhatsAppOrder() {
      const isWholesale = product.wholesalePrice > 0 && selectedQty >= 12;
      const unitPrice = isWholesale ? product.wholesalePrice : product.price;
      const totalPrice = unitPrice * selectedQty;

      const text = encodeURIComponent(
`*HALO ADMIN BALLQISH SHOES (0896-1606-7647)*
Saya ingin diskusi & pesan Pre-Order (PO) sepatu pantofel berikut:

• *Model Sepatu:* ${product.name}
• *Kode Ref:* ${product.model}
• *Ukuran Pilihan:* ${selectedSize}
• *Jumlah Pesanan:* ${selectedQty} pasang
• *Estimasi Harga Satuan:* ${formatRupiah(unitPrice)} ${isWholesale ? '(Harga Grosir)' : ''}
• *Estimasi Total:* ${formatRupiah(totalPrice)}

Mohon info diskusi harga, estimasi waktu produksi PO di workshop Desa Sruni, Gedangan, Sidoarjo, dan rincian pembayarannya. Terima kasih!`
      );

      window.open(`https://wa.me/6289616067647?text=${text}`, '_blank', 'noopener,noreferrer');
    }

    // Sticky Mobile Order Bar (Thumb-Friendly di layar HP <= 768px)
    document.body.classList.add('has-sticky-order-bar');
    let stickyBar = document.getElementById('mobile-sticky-order-bar');
    if (!stickyBar) {
      stickyBar = document.createElement('div');
      stickyBar.id = 'mobile-sticky-order-bar';
      stickyBar.className = 'mobile-sticky-order-bar';
      stickyBar.innerHTML = `
        <div class="sticky-order-meta">
          <span class="sticky-order-label" id="sticky-order-meta-label"></span>
          <span class="sticky-order-price" id="sticky-order-meta-price"></span>
        </div>
        <button type="button" id="btn-sticky-order-wa" class="sticky-order-wa-btn">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197-.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span>Diskusi &amp; Pesan (PO)</span>
        </button>
      `;
      document.body.appendChild(stickyBar);
    }

    function syncStickyBar() {
      const isWholesale = product.wholesalePrice > 0 && selectedQty >= 12;
      const unitPrice = isWholesale ? product.wholesalePrice : product.price;
      const totalPrice = unitPrice * selectedQty;
      const metaLabel = document.getElementById('sticky-order-meta-label');
      const metaPrice = document.getElementById('sticky-order-meta-price');
      if (metaLabel) metaLabel.textContent = `Size ${selectedSize} • ${selectedQty} psg${isWholesale ? ' (Grosir)' : ''}`;
      if (metaPrice) metaPrice.textContent = formatRupiah(totalPrice);
    }
    syncStickyBar();

    const btnStickyWa = document.getElementById('btn-sticky-order-wa');
    if (btnStickyWa) {
      btnStickyWa.onclick = triggerWhatsAppOrder;
    }

    // Listeners ganti ukuran
    const sizeBtns = container.querySelectorAll('.size-pill-choice');
    const sizeLabel = container.querySelector('#selected-size-label');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.getAttribute('data-size');
        if (sizeLabel) sizeLabel.textContent = `Ukuran: ${selectedSize}`;
        syncStickyBar();
      });
    });

    // Listeners quantity
    const btnMinus = container.querySelector('#btn-qty-minus');
    const btnPlus = container.querySelector('#btn-qty-plus');
    const qtyDisplay = container.querySelector('#qty-display');

    if (btnMinus && btnPlus && qtyDisplay) {
      btnMinus.addEventListener('click', () => {
        if (selectedQty > 1) {
          selectedQty--;
          qtyDisplay.textContent = selectedQty;
          syncStickyBar();
        }
      });
      btnPlus.addEventListener('click', () => {
        selectedQty++;
        qtyDisplay.textContent = selectedQty;
        syncStickyBar();
      });
    }

    // Listener tombol WhatsApp order langsung ke nomor owner 0896-1606-7647
    const btnOrderWa = container.querySelector('#btn-order-wa-owner');
    if (btnOrderWa) {
      btnOrderWa.addEventListener('click', triggerWhatsAppOrder);
    }
  }

  // --- MOBILE SIDEBAR DRAWER TOGGLE ---
  function initMobileDrawer() {
    const btnToggle = document.getElementById('btn-mobile-menu-toggle');
    const drawer = document.getElementById('mobile-sidebar-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const btnClose = document.getElementById('btn-close-drawer');

    function openDrawer() {
      if (drawer) drawer.classList.add('active');
      if (backdrop) backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (drawer) drawer.classList.remove('active');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (btnToggle) btnToggle.addEventListener('click', openDrawer);
    if (btnClose) btnClose.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Escape key listener for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  // --- ENSURE VIDEO IS MUTED ON START ---
  function initVideoControl() {
    const vids = document.querySelectorAll('video');
    vids.forEach(v => {
      v.muted = true;
      v.volume = 0;
    });
  }

  // --- DOM READY INITIALIZER ---
  document.addEventListener('DOMContentLoaded', () => {
    initMobileDrawer();
    initVideoControl();
    renderProductsCatalog();
    initCatalogFilters();
    renderSingleProductDetail();

    // Sticky header shadow
    window.addEventListener('scroll', () => {
      const header = document.getElementById('main-header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 15);
      }
    });
  });

})();
