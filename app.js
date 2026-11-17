/* ==========================================================================
   BALLQISH STOREFRONT ENGINE - MULTI-PAGE ARCHITECTURE
   Theme: Ballqish Signature Red (#ED2024), Obsidian (#121212)
   Official Owner WhatsApp: 0896-1606-7647
   Koleksi: 6 Model Sepatu Pantofel Pilihan (foto produk/model-01 s/d model-06)
   ========================================================================== */

(function () {
  'use strict';

  // --- 6 MODEL SEPATU PANTOFEL ASLI BALLQISH ---
  // Foto diambil langsung dari folder: foto produk/model-01 s/d model-06
  const PRODUCTS = [
    {
      id: "g38-hitam",
      number: "01",
      name: "Ballqish G38 Hitam Loafer",
      model: "G38-BLK",
      category: "Slip-On Tanpa Tali",
      price: 85000,
      originalPrice: 125000,
      wholesalePrice: 65000,
      badge: "Best Seller",
      rating: "4.9",
      reviewsCount: 384,
      folder: "foto produk/model-01",
      image: "foto produk/model-01/foto-1.jpg",
      fallbackImage: "assets/placeholder-model-01.svg",
      gallery: [
        "foto produk/model-01/foto-1.jpg",
        "foto produk/model-01/foto-2.jpg",
        "foto produk/model-01/foto-3.jpg",
        "foto produk/model-01/foto-4.jpg"
      ],
      description: "Model pantofel slip-on paling legendaris dari Ballqish. Menjadi pilihan utama guru, dosen, pegawai negeri sipil (PNS), dan karyawan kantor karena outsole elastis anti-slip yang empuk dan nyaman untuk berdiri mengajar atau berjalan seharian.",
      specs: [
        "Material: Kulit Sintetis PU Premium Grade A (Lentur, Tidak Mudah Retak/Pecah)",
        "Outsole: Elastis Anti-Slip & Tidak Berdecit di Keramik (variasi sol fleksibel sesuai kebutuhan)",
        "Insole: Busa Berpori Ergonomis Peredam Benturan Tumit",
        "Tinggi Hak: 2.5 cm (Kemiringan anatomis ideal tanpa beban betis)",
        "Konstruksi: Perakitan Presisi dengan Lem Khusus Berdaya Rekat Tinggi (Pengrajin Desa Sruni, Sidoarjo)"
      ],
      sizes: ["38", "39", "40", "41", "42", "43", "44", "45"]
    },
    {
      id: "g70-executive",
      number: "02",
      name: "Ballqish G70 New Executive Doff",
      model: "G70-MATTE",
      category: "Slip-On Tanpa Tali",
      price: 89000,
      originalPrice: 130000,
      wholesalePrice: 68000,
      badge: "Koleksi Favorit",
      rating: "4.9",
      reviewsCount: 260,
      folder: "foto produk/model-02",
      image: "foto produk/model-02/foto-1.jpg",
      fallbackImage: "assets/placeholder-model-02.svg",
      gallery: [
        "foto produk/model-02/foto-1.jpg",
        "foto produk/model-02/foto-2.jpg",
        "foto produk/model-02/foto-3.jpg",
        "foto produk/model-02/foto-4.jpg"
      ],
      description: "Menghadirkan finishing doff hitam matte yang tenang, elegan, dan berwibawa. Dilengkapi hidden elastic gusset di samping yang memudahkan Anda melepas dan memasang sepatu dengan cepat.",
      specs: [
        "Material: PU Leather Premium Grade A Matte Finish Tahan Gesekan",
        "Outsole: Outsole Elastis Doff Solid Anti-Licin (tersedia pilihan variasi outsole)",
        "Insole: Bantalan Busa Berpori Ergonomis Anti-Lelah",
        "Grip: Pola Alur Grip Multi-Directional di Bawah Sol",
        "Konstruksi: Perakitan Presisi Lem Khusus Daya Rekat Tinggi untuk mobilitas harian"
      ],
      sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
      id: "t42-derby",
      number: "03",
      name: "Ballqish T42 Classic Derby Lace-Up",
      model: "T42-LACE",
      category: "Bertali (Lace-Up)",
      price: 95000,
      originalPrice: 140000,
      wholesalePrice: 72000,
      badge: "Klasik Formal",
      rating: "4.85",
      reviewsCount: 215,
      folder: "foto produk/model-03",
      image: "foto produk/model-03/foto-1.jpg",
      fallbackImage: "assets/placeholder-model-03.svg",
      gallery: [
        "foto produk/model-03/foto-1.jpg",
        "foto produk/model-03/foto-2.jpg",
        "foto produk/model-03/foto-3.jpg",
        "foto produk/model-03/foto-4.jpg"
      ],
      description: "Siluet pantofel bertali klasik dengan 4 pasang eyelets kokoh. Pilihan sempurna untuk upacara formal kenegaraan, sidang kelulusan skripsi sarjana, wisuda, maupun pelantikan dinas.",
      specs: [
        "Material: Kulit Sintetis PU Premium Grade A Kilap Halus Formal",
        "Tali: Waxed Cotton Laces Tahan Putus & Rapi",
        "Outsole: Outsole Elastis Anti-Slip dengan Perakitan Lem Khusus Daya Rekat Tinggi",
        "Tinggi Hak: 3 cm Berwibawa",
        "Kenyamanan: Bagian kerah tumit dilapisi busa empuk anti-lecet"
      ],
      sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
      id: "g80-monkstrap",
      number: "04",
      name: "Ballqish G80 Double Monkstrap",
      model: "G80-MNK",
      category: "Double Monkstrap",
      price: 99000,
      originalPrice: 145000,
      wholesalePrice: 75000,
      badge: "Gaya Eropa",
      rating: "4.92",
      reviewsCount: 178,
      folder: "foto produk/model-04",
      image: "foto produk/model-04/foto-1.jpg",
      fallbackImage: "assets/placeholder-model-04.svg",
      gallery: [
        "foto produk/model-04/foto-1.jpg",
        "foto produk/model-04/foto-2.jpg",
        "foto produk/model-04/foto-3.jpg",
        "foto produk/model-04/foto-4.jpg"
      ],
      description: "Gaya Eropa yang memadukan dua gesper logam anti-karat dengan kepraktisan slip-on. Tampil modern, tegas, dan berwibawa di setiap acara formal.",
      specs: [
        "Gesper: Double Buckle Alloy Logam Anti-Karat",
        "Material: PU Leather Premium Grade A",
        "Outsole: Outsole Elastis Anti-Slip (fleksibel sesuai pilihan kebutuhan)",
        "Insole: Bantalan Busa Berpori Ergonomis Empuk",
        "Karakter: Modern, Tegas & Berwibawa"
      ],
      sizes: ["39", "40", "41", "42", "43"]
    },
    {
      id: "t50-brogue",
      number: "05",
      name: "Ballqish T50 Wingtip Brogue",
      model: "T50-BRG",
      category: "Bertali (Brogue Wingtip)",
      price: 105000,
      originalPrice: 155000,
      wholesalePrice: 78000,
      badge: "Eksklusif",
      rating: "4.95",
      reviewsCount: 142,
      folder: "foto produk/model-05",
      image: "foto produk/model-05/foto-1.jpg",
      fallbackImage: "assets/placeholder-model-05.svg",
      gallery: [
        "foto produk/model-05/foto-1.jpg",
        "foto produk/model-05/foto-2.jpg",
        "foto produk/model-05/foto-3.jpg",
        "foto produk/model-05/foto-4.jpg"
      ],
      description: "Karya ketelitian pengrajin Sidoarjo dengan aksen perforasi ukir Wingtip Medallion di bagian toe cap. Tampilan elegan dan berkelas untuk acara resmi, pesta, maupun resepsi.",
      specs: [
        "Aksen: Perforasi Medallion Handmade Presisi",
        "Material: Kulit Sintetis PU Premium Grade A Kilau Halus",
        "Outsole: Outsole Elastis Anti-Slip Tahan Aus (tersedia pilihan variasi sol)",
        "Tali: Lilin Waxed Berkualitas Tinggi",
        "Konstruksi: Perakitan Presisi Lem Khusus Daya Rekat Tinggi"
      ],
      sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
      id: "g38-mocca",
      number: "06",
      name: "Ballqish G38 Cokelat Mocca Loafer",
      model: "G38-BRN",
      category: "Slip-On Tanpa Tali",
      price: 85000,
      originalPrice: 125000,
      wholesalePrice: 65000,
      badge: "Warna Hangat",
      rating: "4.88",
      reviewsCount: 165,
      folder: "foto produk/model-06",
      image: "foto produk/model-06/foto-1.jpg",
      fallbackImage: "assets/placeholder-model-06.svg",
      gallery: [
        "foto produk/model-06/foto-1.jpg",
        "foto produk/model-06/foto-2.jpg",
        "foto produk/model-06/foto-3.jpg",
        "foto produk/model-06/foto-4.jpg"
      ],
      description: "Varian warna cokelat mocca bernuansa klasik hangat. Sangat serasi dipadukan dengan celana chino cokelat/krem, seragam dinas PDH cokelat pemda, maupun kemeja batik.",
      specs: [
        "Warna: Mocca Earth Tone Elegan",
        "Material: Kulit Sintetis PU Premium Grade A Lentur Lembut",
        "Outsole: Outsole Elastis Hitam Solid Anti-Licin",
        "Insole: Busa Berpori Ergonomis Lembut",
        "Perawatan: Cukup dilap kain basah atau semir netral"
      ],
      sizes: ["38", "39", "40", "41", "42", "43"]
    }
  ];

  // Helper format rupiah
  function formatRupiah(num) {
    return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
  }

  // --- RENDER 6 PRODUK DI HALAMAN KATALOG.HTML ---
  function render6ProductsCatalog(filter = 'all') {
    const grid = document.getElementById('catalog-10-grid') || document.getElementById('catalog-grid');
    if (!grid) return;

    let items = PRODUCTS;
    if (filter === 'slip-on') {
      items = PRODUCTS.filter(p => p.category.toLowerCase().includes('slip-on'));
    } else if (filter === 'lace-monk') {
      items = PRODUCTS.filter(p => p.category.toLowerCase().includes('bertali') || p.category.toLowerCase().includes('monkstrap'));
    }

    grid.innerHTML = items.map((p, idx) => `
      <article class="catalog-card-10">
        <a href="produk-detail.html?id=${p.id}" class="card-10-media" aria-label="Lihat detail ${p.name}">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            width="1080"
            height="720"
            loading="${idx < 2 ? 'eager' : 'lazy'}"
            ${idx === 0 ? 'fetchpriority="high"' : ''}
            decoding="async"
            onerror="this.onerror=null; this.src='${p.fallbackImage}';">
          <span class="card-10-badge">${p.badge}</span>
          <span class="card-10-num">${p.number}</span>
        </a>
        <div class="card-10-content">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span class="card-10-category">${p.category}</span>
            <span style="font-size: 10px; color: var(--ink-muted); font-weight: 600;">Model ${p.number}</span>
          </div>
          <h3 class="card-10-title"><a href="produk-detail.html?id=${p.id}">${p.name}</a></h3>

          <div class="card-10-footer mt-auto">
            <div class="card-10-pricing">
              <span class="card-price-main">${formatRupiah(p.price)}</span>
              <span class="card-price-strike">${formatRupiah(p.originalPrice)}</span>
            </div>

            <div style="font-size: 11px; color: var(--ballqish-red); font-weight: 700; margin-bottom: 14px;">
              Grosir 12+: ${formatRupiah(p.wholesalePrice)} / psg
            </div>

            <a href="produk-detail.html?id=${p.id}" class="card-10-btn">
              Lihat Detail & Pesan &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --- INTERACTIVE FILTER PILLS UNTUK KATALOG.HTML ---
  function initCatalogFilters() {
    const filterContainer = document.getElementById('catalog-filters');
    if (!filterContainer) return;

    const filterBtns = filterContainer.querySelectorAll('.catalog-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter') || 'all';
        render6ProductsCatalog(filterVal);
      });
    });
  }

  // --- RENDER DETAIL PRODUK DI HALAMAN PRODUK-DETAIL.HTML ---
  function renderSingleProductDetail() {
    const container = document.getElementById('single-product-container');
    if (!container) return;

    // Ambil id dari parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || "g38-hitam";
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

    // Update document title
    document.title = `${product.name} - Ballqish Sepatu Sidoarjo`;

    // Update semantic breadcrumb name
    const breadcrumbProduct = document.getElementById('breadcrumb-product-name');
    if (breadcrumbProduct) {
      breadcrumbProduct.textContent = product.name;
    }

    // State pilihan ukuran & quantity
    let selectedSize = product.sizes[0];
    let selectedQty = 1;
    const discountPct = Math.round((1 - (product.price / product.originalPrice)) * 100);

    container.innerHTML = `
      <div class="detail-view-grid">
        <!-- Kolom Galeri Foto -->
        <div class="detail-media-gallery">
          <div class="detail-main-img-wrap">
            <img 
              id="detail-main-img" 
              src="${product.image}" 
              alt="${product.name}"
              width="1080"
              height="720"
              fetchpriority="high"
              decoding="async"
              onerror="this.onerror=null; this.src='${product.fallbackImage}';">
          </div>
          <div class="detail-thumbs-strip">
            ${product.gallery.map((img, idx) => `
              <button type="button" class="thumb-btn-img ${idx === 0 ? 'active' : ''}" data-src="${img}" data-fallback="${product.fallbackImage}" aria-label="Lihat Foto ${idx + 1}">
                <img 
                  src="${img}" 
                  alt="Thumbnail ${idx + 1}"
                  width="1080"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  onerror="this.onerror=null; this.src='${product.fallbackImage}';">
              </button>
            `).join('')}
          </div>

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
            <span class="card-10-badge" style="position: static;">${product.badge}</span>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--ink-muted); font-weight: 600;">
              ${product.category} • Ref: ${product.model}
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
            <span class="detail-price-coret">${formatRupiah(product.originalPrice)}</span>
            <span class="detail-badge-hemat">HEMAT ${discountPct}%</span>
          </div>

          <div style="background-color: var(--ballqish-red-light); border: 1px solid rgba(237,32,36,0.2); padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 20px;">
            <span style="font-size: 12px; font-weight: 700; color: var(--ballqish-red);">
              💼 Tarif Grosir B2B (Min. 12 Pasang): ${formatRupiah(product.wholesalePrice)} / psg
            </span>
            <div style="font-size: 11px; color: var(--ink-secondary); margin-top: 2px;">
              Bisa campur ukuran & custom logo instansi untuk pemesanan dinas/toko.
            </div>
          </div>

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

          <!-- Pilihan Ukuran -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <label style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; font-weight: 700; color: var(--ink);">
                Pilih Ukuran Sepatu (EU):
              </label>
              <span id="selected-size-label" style="font-size: 12px; font-weight: 700; color: var(--ballqish-red);">
                Ukuran: ${selectedSize}
              </span>
            </div>

            <div class="size-pill-grid" id="detail-size-selector">
              ${product.sizes.map((s, idx) => `
                <button type="button" class="size-pill-choice ${idx === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Pilihan Jumlah & Tombol Pesan Langsung via WhatsApp Owner -->
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
              Pesan via WhatsApp (0896-1606-7647)
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

    // Listeners ganti thumbnail foto
    const mainImg = container.querySelector('#detail-main-img');
    const thumbBtns = container.querySelectorAll('.thumb-btn-img');
    thumbBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        const fallback = btn.getAttribute('data-fallback');
        if (mainImg && src) {
          mainImg.src = src;
          mainImg.onerror = function() {
            this.onerror = null;
            if (fallback) this.src = fallback;
          };
        }
      });
    });

    // Helper kirim order via WhatsApp Owner (0896-1606-7647)
    function triggerWhatsAppOrder() {
      const isWholesale = selectedQty >= 12;
      const unitPrice = isWholesale ? product.wholesalePrice : product.price;
      const totalPrice = unitPrice * selectedQty;

      const text = encodeURIComponent(
`*HALO ADMIN BALLQISH SHOES (0896-1606-7647)*
Saya tertarik untuk memesan sepatu pantofel berikut:

• *Model Sepatu:* ${product.name}
• *Kode Ref:* ${product.model}
• *Ukuran Pilihan:* ${selectedSize}
• *Jumlah Pesanan:* ${selectedQty} pasang
• *Harga Satuan:* ${formatRupiah(unitPrice)} ${isWholesale ? '(Harga Grosir)' : ''}
• *Total Biaya:* ${formatRupiah(totalPrice)}

Mohon konfirmasi ketersediaan stok di workshop Desa Sruni, Gedangan, Sidoarjo dan rincian pembayaran. Terima kasih!`
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
          <span>Pesan WA</span>
        </button>
      `;
      document.body.appendChild(stickyBar);
    }

    function syncStickyBar() {
      const isWholesale = selectedQty >= 12;
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
    render6ProductsCatalog();
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