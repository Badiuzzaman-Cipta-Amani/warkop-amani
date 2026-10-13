export const site = {
  name: 'Warkop Amani',
  tagline: 'Your after-work comfort place',
  hours: '09.00–21.00 WIB',
  address: 'Ruko Bumi Asri No. A6, Jl. Cikiray–Cijambu',
  area: 'Sukamanah, Cisaat, Kab. Sukabumi, Jawa Barat 43152',
  phone: '+62 851 7826 1904',
  whatsapp: 'https://wa.me/6285178261904',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Warkop+Amani+Ruko+Bumi+Asri+Cikiray+Cisaat+Sukabumi',
  mapsEmbed:
    'https://www.google.com/maps?q=Warkop+Amani+Ruko+Bumi+Asri+Cikiray+Cijambu+Cisaat+Sukabumi&output=embed',
  // `logo` is a file in /public/brands; width/height are its aspect ratio.
  delivery: [
    { label: 'GoFood', href: 'https://gofood.link/a/TxUMz2s', logo: '/brands/gofood.svg', width: 308, height: 63 },
    {
      label: 'ShopeeFood',
      href: 'https://shopee.co.id/universal-link/now-food/shop/23031184?deep_and_deferred=1&shareChannel=copy_link',
      logo: '/brands/shopeefood.svg',
      width: 19311,
      height: 3800,
    },
  ],
  nav: [
    { href: '/menu', label: 'Menu' },
    { href: '/#tempat', label: 'Tempatnya' },
    { href: '/#snapz', label: 'Snap Z' },
    // Galeri is hidden for now; uncomment to bring it back (see also <Gallery /> in pages/index.astro).
    // { href: '/galeri', label: 'Galeri' },
    { href: '/#lokasi', label: 'Lokasi' },
  ],
  socials: [
    { label: 'Instagram', handle: '@warkopamani', href: 'https://www.instagram.com/warkopamani', icon: 'ri:instagram-line' },
    { label: 'TikTok', handle: '@amaniwarkop', href: 'https://www.tiktok.com/@amaniwarkop', icon: 'ri:tiktok-line' },
    { label: 'Threads', handle: '@warkopamani', href: 'https://www.threads.com/@warkopamani', icon: 'ri:threads-line' },
  ],
};
