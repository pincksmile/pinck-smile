export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  priceNum: number;
  originalPriceNum?: number;
  price: string;
  originalPrice?: string;
  volume: string;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription: string;
  accentGradient: string;
  iconMotif: string;
  benefits: {
    title: string;
    description: string;
  }[];
  keyIngredients: {
    name: string;
    role: string;
  }[];
  usageSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  shopeeUrl: string;
  lazadaUrl: string;
  waText: string;
}

export const products: Product[] = [
  {
    id: "gentle-wash",
    slug: "gentle-intimate-wash",
    name: "Pinck Smile Gentle Intimate Wash",
    tagline: "pH 4.0 Daily Balance Cleanser with Organic Chamomile & Prebiotics",
    category: "Daily Care",
    badge: "Best Seller",
    priceNum: 149000,
    originalPriceNum: 179000,
    price: "Rp 149.000",
    originalPrice: "Rp 179.000",
    volume: "150 ml",
    rating: 4.9,
    reviewCount: 1420,
    shortDescription:
      "Pembersih area kewanitaan dengan formula ultra-lembut ber-pH 4.0 seimbang, diperkaya Chamomile Organik, Ekstrak Daun Sirih, dan Prebiotic Complex untuk menjaga keseimbangan mikrobiom alami tanpa rasa kering atau iritasi.",
    fullDescription:
      "PINCK SMILE Gentle Intimate Wash dirancang secara ilmiah untuk merawat ekosistem alami area intim wanita. Area vulva memiliki mantel asam pelindung alami dengan rentang pH 3.8 - 4.5. Sabun mandi biasa umumnya bersifat basa (pH 8 - 10) yang dapat merusak lapisan asam ini dan memicu gatal, keputihan tidak normal, atau aroma tak sedap.\n\nDengan formulasi khusus bebas sulfat (SLS/SLES), tanpa paraben, dan tanpa pewangi sintetis keras, pembersih ini menghasilkan busa mikro selembut sutra yang membersihkan secara menyeluruh sekaligus menutrisi flora baik (Lactobacillus) dengan nutrisi prebiotik alami.",
    accentGradient: "from-[#FFE5F7] to-[#FFF7FB]",
    iconMotif: "🌸",
    benefits: [
      {
        title: "Keseimbangan pH 4.0 Optimal",
        description: "Menjaga keasaman alami vulva agar bakteri baik tetap subur dan mencegah perkembangbiakan jamur atau bakteri patogen penyebab iritasi.",
      },
      {
        title: "Prebiotic Skin Defense",
        description: "Memberikan nutrisi langsung bagi mikrobiom alami kulit untuk memperkuat pertahanan alami organ intim wanita.",
      },
      {
        title: "Menenangkan Rasa Gatal & Kering",
        description: "Ekstrak Chamomile organik dan Daun Sirih meredakan rasa tidak nyaman, kemerahan, atau iritasi ringan setelah menstruasi atau beraktivitas.",
      },
      {
        title: "Aroma Botani Alami & Menyegarkan",
        description: "Bebas dari parfum sintetis menyengat, hanya aroma botani alami yang lembut dan memberikan rasa percaya diri sepanjang hari.",
      },
    ],
    keyIngredients: [
      { name: "Organic Chamomile Extract", role: "Anti-inflamasi alami yang meredakan iritasi dan menenangkan kulit sensitif." },
      { name: "Prebiotic Bio-Defense", role: "Mendukung kelangsungan hidup bakteri baik (Lactobacillus) penyeimbang mikrobiom." },
      { name: "Piper Betle (Daun Sirih) Extract", role: "Antiseptik botani lembut alami untuk mencegah timbulnya aroma kurang sedap." },
      { name: "Lactic Acid (Asam Laktat)", role: "Bahan aktif alami untuk menjaga dan mengunci kestabilan pH 4.0." },
      { name: "Aloe Vera Leaf Juice", role: "Menghidrasi jaringan kulit vulva dan memberikan sensasi sejuk yang nyaman." },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Basahi Area Intim",
        description: "Bilas area luar intim (vulva) dengan air bersih bersuhu suam-suam kuku.",
      },
      {
        step: 2,
        title: "Tuangkan Secukupnya",
        description: "Keluarkan 1-2 tetes (seukuran koin kecil) gel Gentle Intimate Wash ke telapak tangan yang bersih.",
      },
      {
        step: 3,
        title: "Usapkan Lembut",
        description: "Busakan perlahan dan usapkan hanya pada area luar vulva dari arah depan ke belakang. Hindari penggunaan ke liang vagina dalam.",
      },
      {
        step: 4,
        title: "Bilas Bersih & Keringkan",
        description: "Bilas dengan air mengalir hingga bersih sempurna, lalu tepuk-tepuk kering dengan handuk lembut khusus.",
      },
    ],
    specs: [
      { label: "Netto", value: "150 ml (± 60-90 hari pemakaian rutin)" },
      { label: "Tingkat pH", value: "4.0 ± 0.2 (Teruji Klinis)" },
      { label: "Sertifikasi", value: "BPOM Resmi, Halal, Dermatologically Tested" },
      { label: "Tekstur", value: "Silky Gel lembut tanpa pewarna buatan" },
      { label: "Bebas Dari", value: "SLS, SLES, Paraben, Alkohol, Pewangi Buatan" },
      { label: "Keamanan Pengiriman", value: "100% Discreet Packaging (Kardus polos tanpa label produk)" },
    ],
    faqs: [
      {
        question: "Apakah aman digunakan setiap hari?",
        answer: "Ya, sangat aman. Formula PINCK SMILE Gentle Intimate Wash dirancang khusus dengan bahan botani lembut dan pH 4.0 yang ramah untuk penggunaan harian, termasuk saat masa menstruasi atau kehamilan.",
      },
      {
        question: "Apakah boleh digunakan untuk bagian dalam vagina?",
        answer: "Pembersih intim apa pun hanya ditujukan untuk area luar (vulva). Liang vagina bagian dalam memiliki mekanisme pembersihan otomatis alami dan tidak boleh dimasuki sabun atau cairan apa pun.",
      },
      {
        question: "Bagaimana privasi kemasan saat pengiriman?",
        answer: "Kami menjamin privasi 100%. Paket dikirim menggunakan kotak karton polos bersegel tanpa ada tulisan 'Pembersih Kewanitaan' atau merek sensitif pada resi pengiriman kurir.",
      },
    ],
    shopeeUrl: "https://s.shopee.co.id/9zx2C9Pfba",
    lazadaUrl: "https://share.google/nJK2B7iDNKitHambl",
    waText: "Halo Concierge PINCK SMILE, saya ingin memesan Gentle Intimate Wash (150ml). Mohon info ketersediaan dan promo pengiriman privat.",
  },
  {
    id: "soothing-mist",
    slug: "soothing-hydrating-mist",
    name: "Pinck Smile Soothing Hydrating Mist",
    tagline: "Instant Refresh & Barrier Defense with Pure Rosewater & Niacinamide",
    category: "On-the-go Care",
    badge: "Staff Pick",
    priceNum: 129000,
    originalPriceNum: 159000,
    price: "Rp 129.000",
    originalPrice: "Rp 159.000",
    volume: "60 ml",
    rating: 4.8,
    reviewCount: 980,
    shortDescription:
      "Mist hidrasi intim tanpa bilas dengan formula semprot 360° yang praktis. Menghadirkan kesegaran instan, meredakan rasa lembap berlebih, gerah, dan gesekan pasca-olahraga atau aktivitas padat.",
    fullDescription:
      "Aktivitas yang padat, cuaca tropis yang lembap, celana ketat, atau sesi olahraga sering kali menimbulkan rasa gerah, lembap berlebih, dan gesekan tidak nyaman di area lipatan intim. PINCK SMILE Soothing Hydrating Mist hadir sebagai solusi on-the-go tanpa repot membilas.\n\nFormulanya menggabungkan Rosewater suling murni dengan Hyaluronic Acid dan Niacinamide konsentrasi rendah untuk merawat skin barrier, memberikan kelembapan seimbang, mencerahkan area lipatan yang rawan menggelap akibat gesekan, dan mencegah bau tak sedap seketika.",
    accentGradient: "from-[#FFF7FB] to-[#FFE5F7]",
    iconMotif: "💧",
    benefits: [
      {
        title: "Kesegaran Instan Tanpa Perlu Bilas",
        description: "Cukup 1-2 semprotan halus untuk mengembalikan rasa segar, bersih, dan percaya diri saat berada di luar rumah.",
      },
      {
        title: "Meredakan Gesekan & Iritasi Pasca Cukur",
        description: "Menenangkan pori-pori kulit vulva setelah proses waxing, shaving, atau gesekan pakaian olahraga ketat.",
      },
      {
        title: "Mencerahkan Area Lipatan Kulit",
        description: "Kandungan Niacinamide lembut membantu memudarkan hiperpigmentasi pada lipatan paha dan area intim akibat gesekan konstan.",
      },
      {
        title: "Nozzle Spray 360° Ergonomis",
        description: "Dapat disemprotkan dari segala sudut (bahkan terbalik) dengan bulir kabut mikro yang menyebar merata dan cepat kering.",
      },
    ],
    keyIngredients: [
      { name: "Rosa Damascena Flower Water", role: "Astringent alami penyegar dan penenang kulit yang harum lembut." },
      { name: "Niacinamide 2%", role: "Merawat skin barrier dan mencerahkan lipatan kulit yang kusam akibat gesekan." },
      { name: "Sodium Hyaluronate", role: "Mengunci kelembapan alami agar area intim terhindar dari rasa kering atau dehidrasi." },
      { name: "Centella Asiatica Leaf Extract", role: "Mempercepat pemulihan kulit yang kemerahan atau iritasi pasca-shaving." },
      { name: "Zinc PCA", role: "Mengontrol kelembapan berlebih dan menetralisir aroma tak sedap secara aktif." },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Kocok Perlahan",
        description: "Kocok botol secara ringan sebelum digunakan.",
      },
      {
        step: 2,
        title: "Semprotkan dari Jarak 15 cm",
        description: "Buka tutup botol dan semprotkan 1-2 kali langsung ke area luar vulva atau ke celana dalam/panty liner dari jarak 15 cm.",
      },
      {
        step: 3,
        title: "Biarkan Kering Alami",
        description: "Formula ringan ini meresap dalam hitungan detik tanpa meninggalkan residu lengket.",
      },
    ],
    specs: [
      { label: "Netto", value: "60 ml (Ukuran Travel Aman Masuk Kabin & Tas)" },
      { label: "Mekanisme", value: "360° Fine-Mist Pump (Dapat disemprot terbalik)" },
      { label: "Sertifikasi", value: "BPOM Resmi, Halal, Non-Comedogenic" },
      { label: "Bebas Dari", value: "Alkohol, Gas Propelan Aerosol, Paraben, Minyak Mineral" },
      { label: "Daya Serap", value: "< 10 detik tanpa rasa lengket" },
      { label: "Keamanan Pengiriman", value: "100% Discreet Packaging bersegel aman" },
    ],
    faqs: [
      {
        question: "Apakah perlu dibilas setelah disemprot?",
        answer: "Tidak perlu dibilas sama sekali. Formula kami berbasis air yang cepat menyerap dan dirancang khusus untuk kenyamanan praktis saat bepergian, setelah buang air di toilet umum, atau pasca berolahraga.",
      },
      {
        question: "Apakah aman disemprotkan langsung ke pakaian dalam?",
        answer: "Ya, Anda bisa menyemprotkannya langsung ke area luar vulva atau ke bagian dalam pakaian dalam dan panty liner untuk kesegaran tahan lama.",
      },
      {
        question: "Berapa kali pemakaian yang dianjurkan dalam sehari?",
        answer: "Dapat digunakan 2 hingga 4 kali sehari sesuai kebutuhan saat Anda merasa gerah atau membutuhkan kesegaran instan.",
      },
    ],
    shopeeUrl: "https://s.shopee.co.id/9zx2C9Pfba",
    lazadaUrl: "https://share.google/nJK2B7iDNKitHambl",
    waText: "Halo Concierge PINCK SMILE, saya ingin memesan Soothing Hydrating Mist (60ml). Mohon dibantu untuk proses pemesanannya.",
  },
  {
    id: "wellness-device",
    slug: "aura-intimate-device",
    name: "Pinck Smile Aura Intimate Device",
    tagline: "Ergonomic & Whisper-Quiet Pelvic Floor Wellness & Sensual Relaxation",
    category: "Wellness & Sensual Care",
    badge: "Signature Device",
    priceNum: 489000,
    originalPriceNum: 650000,
    price: "Rp 489.000",
    originalPrice: "Rp 650.000",
    volume: "Medical Silicone",
    rating: 5.0,
    reviewCount: 840,
    shortDescription:
      "Perangkat stimulasi dan relaksasi otot panggul premium berfrekuensi mikro dengan silikon medis ultra-lembut bersertifikasi FDA. Dirancang khusus untuk melatih respons relaksasi, melancarkan sirkulasi panggul, dan meningkatkan kepercayaan diri intim secara higienis dan senyap.",
    fullDescription:
      "Kesehatan intim wanita tidak hanya mengenai kebersihan luar, tetapi juga kebugaran otot dasar panggul (*pelvic floor wellness*) serta kemampuan tubuh untuk beralih ke mode relaksasi mendalam. Stres harian, persalinan, dan kelelahan sering kali membuat otot panggul tegang, yang dapat memicu rasa nyeri atau penurunan sensitivitas.\n\nPINCK SMILE Aura Intimate Device dirancang dengan kurva ergonomis anatomi wanita. Menawarkan 8 pola gelombang getaran mikro yang merangsang aliran darah secara lembut, membantu pelepasan hormon oksitosin alami (*female mood booster*), dan membangkitkan respon gairah tanpa zat kimia berbahaya. Dibalut silikon kelas medis murni yang selembut beludru, tahan air 100% (IPX7), dan beroperasi di bawah 40 desibel (ultra-senyap).",
    accentGradient: "from-[#FFE5F7] via-[#FFF7FB] to-white",
    iconMotif: "✨",
    benefits: [
      {
        title: "Relaksasi Otot Panggul (Pelvic Floor Release)",
        description: "Gelombang mikro terkalibrasi membantu meredakan ketegangan otot panggul yang kaku akibat duduk lama atau stres harian.",
      },
      {
        title: "Perangsang & Stimulasi Alami Tanpa Obat Kimia",
        description: "Meningkatkan sirkulasi darah dan melatih sensitivitas saraf sensorik klitoral secara aman, alami, dan bebas efek samping medis.",
      },
      {
        title: "Whisper-Quiet Operation (< 40 dB)",
        description: "Motor mikro generasi terbaru bekerja sangat senyap, memberikan ketenangan dan privasi total di ruang pribadi Anda.",
      },
      {
        title: "100% Body-Safe Medical Grade Silicone",
        description: "Bebas Phthalate, bebas BPA, hipoalergenik, dan sangat mudah dibersihkan serta disterilkan dengan air mengalir.",
      },
    ],
    keyIngredients: [
      { name: "100% Medical Grade Silicone", role: "Permukaan super halus selembut beludru yang ramah dan aman bagi membran mukosa." },
      { name: "Magnetic Fast USB Pin", role: "Pengisian daya magnetik tahan karat yang kedap air dan awet." },
      { name: "Micro-Sonic Silent Motor", role: "Memberikan getaran terfokus tanpa getaran kasar di tangan." },
      { name: "IPX7 Waterproof Seal", role: "Kedap air sepenuhnya hingga kedalaman 1 meter selama 30 menit." },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Bersihkan Sebelum Penggunaan",
        description: "Cuci permukaan silikon dengan air hangat dan sedikit Gentle Intimate Wash, lalu keringkan dengan kain mikrofiber.",
      },
      {
        step: 2,
        title: "Nyalakan & Pilih Mode",
        description: "Tekan tombol power selama 2 detik untuk menyalakan. Klik tombol mode untuk memilih dari 8 ritme getaran yang paling nyaman.",
      },
      {
        step: 3,
        title: "Eksplorasi Lembut",
        description: "Gunakan bersama pelembap berbasis air. Tempelkan ujung perangkat yang melengkung pada zona sensitif luar untuk relaksasi mendalam.",
      },
      {
        step: 4,
        title: "Simpan di Kantong Satin Khusus",
        description: "Setelah dibersihkan dan dikeringkan, simpan di dalam silk storage pouch eksklusif PINCK SMILE di tempat yang sejuk dan terlindung dari debu.",
      },
    ],
    specs: [
      { label: "Material", value: "100% FDA Approved Medical Grade Silicone + ABS" },
      { label: "Tingkat Kebisingan", value: "< 40 dB (Whisper-Quiet, sangat senyap)" },
      { label: "Waterproof Level", value: "IPX7 (Tahan air saat mandi/shower)" },
      { label: "Baterai & Pengisian", value: "Magnetic USB Rechargeable (90 menit pemakaian per full charge)" },
      { label: "Variasi Ritme", value: "8 Kecepatan & Pola Frekuensi Gelombang" },
      { label: "Garansi & Kemasan", value: "Garansi Resmi 1 Tahun PINCK SMILE + 100% Discreet Shipping" },
    ],
    faqs: [
      {
        question: "Apakah perangkat ini aman bagi tubuh?",
        answer: "Sangat aman. Perangkat Aura dibuat 100% dari silikon kelas medis bersertifikasi food-grade & body-safe, bebas lateks, bebas ftalat, dan non-porous sehingga bakteri tidak dapat menempel pada pori-pori bahan.",
      },
      {
        question: "Bagaimana cara mengisi ulang daya baterainya?",
        answer: "Cukup tempelkan kabel pengisi daya magnetik USB yang disertakan pada dua titik magnet di bagian bawah perangkat, lalu sambungkan ke adaptor USB standar.",
      },
      {
        question: "Apakah paket pengiriman terlihat mencurigakan bagi kurir/orang rumah?",
        answer: "Sama sekali tidak. Paket dikemas dalam kardus cokelat polos tanpa gambar, tanpa logo erotis, dan resi kurir hanya mencantumkan nama pengirim 'PS Official' atau 'Aksesoris Perawatan Diri'. Privasi Anda adalah komitmen utama kami.",
      },
    ],
    shopeeUrl: "https://s.shopee.co.id/9zx2C9Pfba",
    lazadaUrl: "https://share.google/nJK2B7iDNKitHambl",
    waText: "Halo Concierge PINCK SMILE, saya ingin memesan Aura Intimate Device secara privat. Mohon panduan ketersediaan dan garansi resminya.",
  },
  {
    id: "bundle-complete",
    slug: "complete-comfort-set",
    name: "Pinck Smile Complete Comfort Set",
    tagline: "Duo Perawatan Harian & On-The-Go Protection",
    category: "Bundle Set",
    badge: "Rekomendasi",
    priceNum: 259000,
    originalPriceNum: 278000,
    price: "Rp 259.000",
    originalPrice: "Rp 278.000",
    volume: "150ml + 60ml",
    rating: 4.9,
    reviewCount: 1650,
    shortDescription:
      "Kombinasi sempurna Gentle Intimate Wash (150ml) untuk ritual mandi harian di rumah dan Soothing Hydrating Mist (60ml) portabel untuk kesegaran di luar rumah. Lengkap dengan bonus silk travel pouch eksklusif.",
    fullDescription:
      "Complete Comfort Set adalah paket perawatan esensial yang paling digemari wanita aktif. Menggabungkan dua pilar utama perawatan intim: perlindungan mikrobiom harian saat mandi di rumah, dan pertahanan kesegaran on-the-go di tas kerja atau olahraga Anda.\n\nDengan membeli set ini, Anda menghemat pengeluaran sekaligus mendapatkan perlindungan 24/7 terhadap rasa gatal, gerah, aroma kurang sedap, dan ketidaknyamanan daerah sensitif.",
    accentGradient: "from-[#FFE5F7] via-[#FFF7FB] to-[#FFE5F7]",
    iconMotif: "🎁",
    benefits: [
      {
        title: "Perlindungan 24 Jam Penuh",
        description: "Gentle Wash di pagi hari saat mandi, dan Hydrating Mist untuk menyegarkan kembali di sela aktivitas kerja.",
      },
      {
        title: "Hemat Rp 19.000 + Bonus Pouch Sutra",
        description: "Lebih ekonomis dibandingkan membeli satuan dan mendapatkan pouch satin polos premium untuk menjaga kebersihan produk.",
      },
      {
        title: "Sinergi Formula pH 4.0",
        description: "Kedua produk saling melengkapi untuk mengunci mantel asam pelindung alami tanpa membebani kulit vulva.",
      },
      {
        title: "100% Pengiriman Rahasia & Bebas Rasa Cemas",
        description: "Kardus polos tanpa label nama produk dengan segel privasi ganda.",
      },
    ],
    keyIngredients: [
      { name: "Gentle Wash (150ml)", role: "Chamomile Organik, Prebiotik, Ekstrak Sirih, pH 4.0 Lactic Acid." },
      { name: "Hydrating Mist (60ml)", role: "Rosa Damascena Water, Niacinamide 2%, Hyaluronic Acid, Centella Asiatica." },
      { name: "Bonus Silk Pouch", role: "Pouch kain sutra lembut eksklusif untuk menyimpan produk secara higienis." },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Pagi / Malam di Rumah",
        description: "Gunakan Gentle Intimate Wash saat mandi untuk membersihkan area vulva luar secara higienis.",
      },
      {
        step: 2,
        title: "Siang / Sore di Luar Rumah",
        description: "Semprotkan Soothing Mist setelah dari toilet atau setelah berolahraga untuk menyegarkan kulit intim tanpa bilas.",
      },
    ],
    specs: [
      { label: "Isi Paket", value: "1x Gentle Wash 150ml + 1x Hydrating Mist 60ml + 1x Silk Pouch" },
      { label: "Estimasi Pemakaian", value: "± 2 - 3 Bulan Pemakaian Teratur" },
      { label: "Sertifikasi", value: "BPOM Resmi, Halal, Teruji Ginekologi" },
      { label: "Pengiriman", value: "Kardus Polos Rapat 100% Rahasia" },
    ],
    faqs: [
      {
        question: "Apakah kedua produk ini cocok untuk kulit yang sangat sensitif?",
        answer: "Ya, seluruh formula PINCK SMILE diuji secara dermatologis dan dirancang khusus bebas alkohol, bebas sulfat keras, serta bebas pewangi buatan sehingga sangat aman bagi kulit sensitif.",
      },
      {
        question: "Apakah bonus silk pouch tahan air?",
        answer: "Silk pouch terbuat dari bahan satin halus yang mudah dicuci dan melindungi botol dari goresan atau debu saat berada di dalam tas.",
      },
    ],
    shopeeUrl: "https://s.shopee.co.id/9zx2C9Pfba",
    lazadaUrl: "https://share.google/nJK2B7iDNKitHambl",
    waText: "Halo Concierge PINCK SMILE, saya ingin memesan Complete Comfort Set (Rp 259.000). Mohon bantu proses pengiriman privatnya ya.",
  },
  {
    id: "bundle-ultimate",
    slug: "ultimate-wellness-ritual",
    name: "Pinck Smile Ultimate Wellness Ritual",
    tagline: "Rangkaian Perawatan Menyeluruh: Wash + Mist + Aura Intimate Device",
    category: "Full Collection",
    badge: "Best Value",
    priceNum: 699000,
    originalPriceNum: 899000,
    price: "Rp 699.000",
    originalPrice: "Rp 899.000",
    volume: "3-in-1 Full Box",
    rating: 5.0,
    reviewCount: 520,
    shortDescription:
      "Pengalaman perawatan kebugaran intim terlengkap. Mencakup Gentle Intimate Wash (150ml), Soothing Hydrating Mist (60ml), dan Aura Intimate Device bersilikon medis untuk relaksasi otot panggul serta kepercayaan diri maksimal.",
    fullDescription:
      "Ultimate Wellness Ritual adalah mahakarya PINCK SMILE untuk wanita yang menghargai kesehatan tubuh dan ketenangan batin secara utuh. Menggabungkan kebersihan harian, kesegaran instan, dan perangkat kebugaran panggul (*pelvic floor wellness*) yang merangsang sirkulasi dan hormon relaksasi secara harmonis.\n\nPaket ini hadir dalam kotak *luxury magnetic gift box* dengan garansi resmi 1 tahun untuk perangkat Aura serta pengiriman kilat dengan privasi nomor satu.",
    accentGradient: "from-[#FFE5F7] via-[#FFF7FB] to-white",
    iconMotif: "👑",
    benefits: [
      {
        title: "Hemat Hingga Rp 200.000",
        description: "Penawaran harga terbaik untuk memiliki seluruh rangkaian signature PINCK SMILE sekaligus.",
      },
      {
        title: "Perawatan Fisik & Relaksasi Saraf Lengkap",
        description: "Membersihkan, menyegarkan, dan merilekskan otot dasar panggul untuk kesehatan reproduksi yang prima.",
      },
      {
        title: "Garansi Resmi Ganti Baru 1 Tahun",
        description: "Perangkat Aura dilindungi garansi resmi 12 bulan jika terjadi kerusakan teknis atau cacat manufaktur.",
      },
      {
        title: "Kemasan Mewah dengan Keamanan Privasi Penuh",
        description: "Kotak kemasan eksklusif di dalam kardus luar polos bersegel ganda tanpa identitas isi paket.",
      },
    ],
    keyIngredients: [
      { name: "Gentle Wash (150ml)", role: "Formula pH 4.0 seimbang dengan Chamomile dan Prebiotik." },
      { name: "Hydrating Mist (60ml)", role: "Rosewater, Niacinamide, Hyaluronic Acid on-the-go spray." },
      { name: "Aura Intimate Device", role: "100% Medical Grade Silicone dengan 8 pola getaran mikro senyap (<40dB)." },
      { name: "Magnetic USB Charger", role: "Kabel charger magnetik cepat dan tahan air." },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Pembersihan Dasar",
        description: "Gunakan Gentle Wash saat mandi untuk mempersiapkan kulit yang bersih dan tenang.",
      },
      {
        step: 2,
        title: "Sesi Relaksasi Panggul",
        description: "Gunakan Aura Device selama 10-15 menit di ruang pribadi untuk merilekskan otot panggul dan membangkitkan hormon oksitosin.",
      },
      {
        step: 3,
        title: "Hidrasi & Kesegaran",
        description: "Kunci kenyamanan dengan semprotan ringan Soothing Hydrating Mist.",
      },
    ],
    specs: [
      { label: "Kelengkapan", value: "Gentle Wash (150ml) + Hydrating Mist (60ml) + Aura Device + Magnetic USB Cable + Silk Pouch" },
      { label: "Garansi Perangkat", value: "1 Tahun Garansi Resmi PINCK SMILE" },
      { label: "Sertifikasi", value: "BPOM, Halal, FDA-Grade Medical Silicone, IPX7 Waterproof" },
      { label: "Layanan Pengiriman", value: "Prioritas Pengiriman Cepat + 100% Discreet Sealed Box" },
    ],
    faqs: [
      {
        question: "Apakah paket ini cocok dijadikan kado/hadiah pernikahan?",
        answer: "Sangat cocok. Dikemas dalam box bernuansa elegan yang sangat estetik, berkelas, dan bermakna untuk self-care maupun hadiah pernikahan bagi sahabat/pasangan.",
      },
      {
        question: "Bagaimana cara klaim garansi jika perangkat mengalami kendala?",
        answer: "Cukup hubungi WhatsApp Concierge resmi kami dengan menyertakan nomor pesanan Anda. Tim kami akan memandu proses penggantian unit baru dengan cepat dan ramah.",
      },
    ],
    shopeeUrl: "https://s.shopee.co.id/9zx2C9Pfba",
    lazadaUrl: "https://share.google/nJK2B7iDNKitHambl",
    waText: "Halo Concierge PINCK SMILE, saya ingin memesan Ultimate Wellness Ritual (Rp 699.000). Mohon info nomor rekening / tautan pembayaran privat.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(
    (p) => p.slug === slug || p.id === slug || p.slug.replace("bundle-", "") === slug
  );
}
