/* ==========================================================================
   DATA PRODUK TERPUSAT - BALLQISH SHOES SIDOARJO (11 MODEL AKTIF)
   ==========================================================================
   Struktur galeri setiap produk menggunakan Array of Objects:
   gallery: [
     { id: 1, src: '/images/model-g38/G03.1.jpg', alt: 'Ballqish G03 - Foto 1' },
     ...
   ]
   Tanpa dummy SVG — langsung mengarah ke path file gambar lokal Anda.
   ========================================================================== */

window.BALLQISH_PRODUCTS = [
  {
    id: "g03",
    number: "01",
    name: "Ballqish G03",
    model: "G03",
    series: "G",
    price: 85000,
    originalPrice: 125000,
    wholesalePrice: 65000,
    badge: "Pilihan Utama",
    rating: "4.9",
    image: "/images/model-g38/G03.1.jpg",
    gallery: [
      { id: 1, src: "/images/model-g38/G03.1.jpg", alt: "Ballqish G03 - Foto 1" },
      { id: 2, src: "/images/model-g38/G03.13.jpg", alt: "Ballqish G03 - Foto 2" },
      { id: 3, src: "/images/model-g38/G03.14.jpg", alt: "Ballqish G03 - Foto 3" },
      { id: 4, src: "/images/model-g38/G03.22.jpg", alt: "Ballqish G03 - Foto 4" }
    ],
    description: "Model pantofel Ballqish G03 buatan langsung pengrajin Desa Sruni, Gedangan, Sidoarjo. Dirancang nyaman dipakai kerja seharian dengan kulit sintetis PU Premium Grade A dan outsole elastis anti-slip yang fleksibel.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A (Lentur, Tidak Mudah Retak)",
      "Outsole: Elastis Anti-Slip & Tidak Berdecit di Keramik (tersedia variasi outsole sesuai kebutuhan)",
      "Insole: Busa Berpori Ergonomis Peredam Benturan Tumit",
      "Konstruksi: Perakitan Presisi dengan Lem Khusus Berdaya Rekat Tinggi (Pengrajin Desa Sruni, Sidoarjo)"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g15",
    number: "02",
    name: "Ballqish G15",
    model: "G15",
    series: "G",
    price: 85000,
    originalPrice: 125000,
    wholesalePrice: 65000,
    badge: "Best Seller",
    rating: "4.9",
    image: "assets/katalog/G15/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G15/foto-1.jpg", alt: "Ballqish G15 - Foto 1" },
      { id: 2, src: "assets/katalog/G15/foto-2.jpg", alt: "Ballqish G15 - Foto 2" },
      { id: 3, src: "assets/katalog/G15/foto-3.jpg", alt: "Ballqish G15 - Foto 3" },
      { id: 4, src: "assets/katalog/G15/foto-4.jpg", alt: "Ballqish G15 - Foto 4" }
    ],
    description: "Model pantofel Ballqish G15 dengan siluet formal rapi yang menjadi favorit guru, dosen, PNS, dan karyawan kantor. Nyaman untuk berdiri dan berjalan lama tanpa membuat tumit cepat pegal.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip (fleksibel sesuai pilihan kebutuhan & anggaran)",
      "Insole: Bantalan Busa Berpori Ergonomis Anti-Lelah",
      "Konstruksi: Perakitan Presisi dengan Lem Khusus Berdaya Rekat Tinggi (Handmade Sidoarjo)"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g17",
    number: "03",
    name: "Ballqish G17",
    model: "G17",
    series: "G",
    price: 88000,
    originalPrice: 128000,
    wholesalePrice: 67000,
    badge: "Koleksi Favorit",
    rating: "4.9",
    image: "assets/katalog/G17/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G17/foto-1.jpg", alt: "Ballqish G17 - Foto 1" },
      { id: 2, src: "assets/katalog/G17/foto-2.jpg", alt: "Ballqish G17 - Foto 2" },
      { id: 3, src: "assets/katalog/G17/foto-3.jpg", alt: "Ballqish G17 - Foto 3" },
      { id: 4, src: "assets/katalog/G17/foto-4.jpg", alt: "Ballqish G17 - Foto 4" }
    ],
    description: "Ballqish G17 menghadirkan tampilan formal yang bersih, tegas, dan berwibawa. Cocok untuk aktivitas dinas harian, rapat resmi, hingga pengadaan seragam instansi.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip Tahan Aus",
      "Insole: Busa Berpori Ergonomis Nyaman Seharian",
      "Konstruksi: Perakitan Presisi Lem Khusus Daya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g21",
    number: "04",
    name: "Ballqish G21",
    model: "G21",
    series: "G",
    price: 88000,
    originalPrice: 130000,
    wholesalePrice: 67000,
    badge: "Klasik Formal",
    rating: "4.9",
    image: "assets/katalog/G21/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G21/foto-1.jpg", alt: "Ballqish G21 - Foto 1" },
      { id: 2, src: "assets/katalog/G21/foto-2.jpg", alt: "Ballqish G21 - Foto 2" },
      { id: 3, src: "assets/katalog/G21/foto-3.jpg", alt: "Ballqish G21 - Foto 3" },
      { id: 4, src: "assets/katalog/G21/foto-4.jpg", alt: "Ballqish G21 - Foto 4" }
    ],
    description: "Ballqish G21 menggabungkan desain pantofel klasik dengan acuan (last) yang disesuaikan anatomi telapak kaki Indonesia, sehingga pas, ringan, dan tidak membuat kaki panas.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A Lentur",
      "Outsole: Outsole Elastis Anti-Slip (tersedia pilihan jenis outsole)",
      "Insole: Busa Berpori Ergonomis",
      "Konstruksi: Perakitan Presisi Lem Khusus Daya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g27",
    number: "05",
    name: "Ballqish G27",
    model: "G27",
    series: "G",
    price: 89000,
    originalPrice: 130000,
    wholesalePrice: 68000,
    badge: "Elegan",
    rating: "4.9",
    image: "assets/katalog/G27/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G27/foto-1.jpg", alt: "Ballqish G27 - Foto 1" },
      { id: 2, src: "assets/katalog/G27/foto-2.jpg", alt: "Ballqish G27 - Foto 2" },
      { id: 3, src: "assets/katalog/G27/foto-3.jpg", alt: "Ballqish G27 - Foto 3" },
      { id: 4, src: "assets/katalog/G27/foto-4.jpg", alt: "Ballqish G27 - Foto 4" }
    ],
    description: "Ballqish G27 dirancang dengan garis potongan rapi dan elegan untuk menunjang penampilan profesional di kantor, sekolah, acara wisuda, maupun resepsi.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip Nyaman di Berbagai Lantai",
      "Insole: Bantalan Busa Berpori Empuk",
      "Konstruksi: Perakitan Presisi Lem Khusus Berdaya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g29",
    number: "06",
    name: "Ballqish G29",
    model: "G29",
    series: "G",
    price: 89000,
    originalPrice: 130000,
    wholesalePrice: 68000,
    badge: "Modern",
    rating: "4.9",
    image: "assets/katalog/G29/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G29/foto-1.jpg", alt: "Ballqish G29 - Foto 1" },
      { id: 2, src: "assets/katalog/G29/foto-2.jpg", alt: "Ballqish G29 - Foto 2" },
      { id: 3, src: "assets/katalog/G29/foto-3.jpg", alt: "Ballqish G29 - Foto 3" },
      { id: 4, src: "assets/katalog/G29/foto-4.jpg", alt: "Ballqish G29 - Foto 4" }
    ],
    description: "Ballqish G29 tampil modern dan proporsional dengan sentuhan finishing rapi khas pengrajin Sidoarjo. Tersedia untuk pembelian eceran maupun partai besar instansi.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip",
      "Insole: Busa Berpori Ergonomis",
      "Konstruksi: Perakitan Presisi Lem Khusus Berdaya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g60",
    number: "07",
    name: "Ballqish G60",
    model: "G60",
    series: "G",
    price: 89000,
    originalPrice: 132000,
    wholesalePrice: 68000,
    badge: "Seri Kantor",
    rating: "4.9",
    image: "assets/katalog/G60/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G60/foto-1.jpg", alt: "Ballqish G60 - Foto 1" },
      { id: 2, src: "assets/katalog/G60/foto-2.jpg", alt: "Ballqish G60 - Foto 2" },
      { id: 3, src: "assets/katalog/G60/foto-3.jpg", alt: "Ballqish G60 - Foto 3" },
      { id: 4, src: "assets/katalog/G60/foto-4.jpg", alt: "Ballqish G60 - Foto 4" }
    ],
    description: "Ballqish G60 merupakan seri kerja harian yang kokoh namun tetap ringan di kaki. Menjawab kebutuhan mobilitas tinggi karyawan, guru, dan mahasiswa.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip & Fleksibel",
      "Insole: Bantalan Busa Berpori Ergonomis",
      "Konstruksi: Perakitan Presisi Lem Khusus Berdaya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g70",
    number: "08",
    name: "Ballqish G70",
    model: "G70",
    series: "G",
    price: 92000,
    originalPrice: 135000,
    wholesalePrice: 70000,
    badge: "Eksekutif",
    rating: "4.9",
    image: "assets/katalog/G70/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G70/foto-1.jpg", alt: "Ballqish G70 - Foto 1" },
      { id: 2, src: "assets/katalog/G70/foto-2.jpg", alt: "Ballqish G70 - Foto 2" },
      { id: 3, src: "assets/katalog/G70/foto-3.jpg", alt: "Ballqish G70 - Foto 3" },
      { id: 4, src: "assets/katalog/G70/foto-4.jpg", alt: "Ballqish G70 - Foto 4" }
    ],
    description: "Ballqish G70 hadir dengan tampilan eksekutif yang tenang dan berwibawa. Mudah dipadukan dengan celana bahan formal, batik resmi, maupun seragam dinas.",
    specs: [
      "Material: PU Leather Premium Grade A Tahan Gesekan",
      "Outsole: Outsole Elastis Solid Anti-Licin (tersedia pilihan variasi outsole)",
      "Insole: Bantalan Busa Berpori Ergonomis Anti-Lelah",
      "Konstruksi: Perakitan Presisi Lem Khusus Daya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "g80",
    number: "09",
    name: "Ballqish G80",
    model: "G80",
    series: "G",
    price: 95000,
    originalPrice: 140000,
    wholesalePrice: 72000,
    badge: "Eksklusif",
    rating: "4.9",
    image: "assets/katalog/G80/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/G80/foto-1.jpg", alt: "Ballqish G80 - Foto 1" },
      { id: 2, src: "assets/katalog/G80/foto-2.jpg", alt: "Ballqish G80 - Foto 2" },
      { id: 3, src: "assets/katalog/G80/foto-3.jpg", alt: "Ballqish G80 - Foto 3" },
      { id: 4, src: "assets/katalog/G80/foto-4.jpg", alt: "Ballqish G80 - Foto 4" }
    ],
    description: "Ballqish G80 dirancang bagi Anda yang ingin tampil modern, tegas, dan berwibawa di setiap kesempatan resmi maupun kerja harian.",
    specs: [
      "Material: PU Leather Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip (fleksibel sesuai pilihan kebutuhan)",
      "Insole: Bantalan Busa Berpori Ergonomis Empuk",
      "Konstruksi: Perakitan Presisi Lem Khusus Berdaya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "k01",
    number: "10",
    name: "Ballqish K01",
    model: "K01",
    series: "K",
    price: 92000,
    originalPrice: 135000,
    wholesalePrice: 70000,
    badge: "Seri K",
    rating: "4.9",
    image: "assets/katalog/K01/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/K01/foto-1.jpg", alt: "Ballqish K01 - Foto 1" },
      { id: 2, src: "assets/katalog/K01/foto-2.jpg", alt: "Ballqish K01 - Foto 2" },
      { id: 3, src: "assets/katalog/K01/foto-3.jpg", alt: "Ballqish K01 - Foto 3" },
      { id: 4, src: "assets/katalog/K01/foto-4.jpg", alt: "Ballqish K01 - Foto 4" }
    ],
    description: "Ballqish K01 dari seri K unggulan workshop Desa Sruni, Sidoarjo. Menghadirkan keseimbangan sempurna antara daya tahan, kerapian pengerjaan, dan kenyamanan pijakan.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip",
      "Insole: Busa Berpori Ergonomis Peredam Benturan Tumit",
      "Konstruksi: Perakitan Presisi Lem Khusus Berdaya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: "t02",
    number: "11",
    name: "Ballqish T02",
    model: "T02",
    series: "T",
    price: 95000,
    originalPrice: 140000,
    wholesalePrice: 72000,
    badge: "Seri T",
    rating: "4.9",
    image: "assets/katalog/T02/foto-1.jpg",
    gallery: [
      { id: 1, src: "assets/katalog/T02/foto-1.jpg", alt: "Ballqish T02 - Foto 1" },
      { id: 2, src: "assets/katalog/T02/foto-2.jpg", alt: "Ballqish T02 - Foto 2" },
      { id: 3, src: "assets/katalog/T02/foto-3.jpg", alt: "Ballqish T02 - Foto 3" },
      { id: 4, src: "assets/katalog/T02/foto-4.jpg", alt: "Ballqish T02 - Foto 4" }
    ],
    description: "Ballqish T02 dari seri T unggulan Ballqish Shoes Sidoarjo. Pilihan ideal untuk upacara formal, wisuda, sidang, maupun dinas resmi dengan kenyamanan maksimal seharian.",
    specs: [
      "Material: Kulit Sintetis PU Premium Grade A",
      "Outsole: Outsole Elastis Anti-Slip (tersedia pilihan variasi sol)",
      "Insole: Busa Berpori Ergonomis Anti-Lelah",
      "Konstruksi: Perakitan Presisi Lem Khusus Berdaya Rekat Tinggi"
    ],
    sizes: ["39", "40", "41", "42", "43"]
  }
];
