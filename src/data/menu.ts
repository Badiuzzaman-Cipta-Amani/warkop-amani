// Prices follow the "MENU MAKANAN / MINUMAN / CEMILAN" boards on Instagram.
// The first four items of each group are the ones shown on the home page.
// `photo` is a file in /public/menu, cut out from those same boards.
export type MenuItem = {
  name: string;
  desc?: string;
  price: number;
  // Shown after the price, e.g. "3pcs" → "15K/3pcs"
  per?: string;
  // "Mulai dari" pricing, like mie with toppings
  from?: boolean;
  note?: string;
  photo?: string;
};
export type MenuGroup = { id: string; title: string; items: MenuItem[] };

export const menu: MenuGroup[] = [
  {
    id: 'makanan',
    title: 'Nasi, Mie & Pasta',
    items: [
      {
        name: 'Butter Rice Katsu',
        desc: 'Nasi mentega dengan topping ayam katsu',
        price: 18000,
        photo: 'butter-rice-katsu',
      },
      {
        name: 'Nasi Daun Jeruk',
        desc: 'Nasi harum daun jeruk, telur barendo, dan sambal matah pedas manis gurih',
        price: 15000,
        photo: 'nasi-daun-jeruk',
      },
      {
        name: 'Mie Goreng / Rebus',
        desc: 'Pilih rasa mie favoritmu, tambah topping kesukaanmu',
        price: 8000,
        from: true,
        photo: 'mie-goreng-rebus',
      },
      {
        name: 'Ramen Amani',
        desc: 'Citarasa miso Jepang racikan Warkop Amani, plus topping kesukaanmu',
        price: 20000,
        photo: 'ramen-amani',
      },
      {
        name: 'Butter Rice Mentai',
        desc: 'Nasi mentega dan ayam katsu yang diselimuti saus mentai',
        price: 20000,
        photo: 'butter-rice-mentai',
      },
      {
        name: 'Pasta Amani',
        desc: 'Spaghetti creme dengan bumbu pilihan, topping sosis dan jamur',
        price: 16000,
        photo: 'pasta-amani',
      },
    ],
  },
  {
    id: 'minuman',
    title: 'Minuman',
    items: [
      { name: 'Matcha', desc: 'Matcha premium dan susu segar, dingin pakai es batu', price: 15000, photo: 'matcha' },
      { name: 'Thai Tea', desc: 'Teh Thailand khas dengan susu, manis dan menyegarkan', price: 12000, photo: 'thai-tea' },
      { name: 'Es Coklat', desc: 'Cokelat creamy yang kaya rasa, disajikan dingin', price: 15000, photo: 'es-coklat' },
      { name: 'Nu Fresh', desc: 'Jeruk manis yang segar, disajikan dingin dengan es', price: 5000, photo: 'nu-fresh' },
      { name: 'Green Tea', desc: 'Teh hijau berpadu susu creamy, disajikan dingin', price: 12000, photo: 'green-tea' },
      { name: 'Woop Es', desc: 'Minuman cokelat yang kental dan creamy, pakai es', price: 6000, photo: 'woop-es' },
      { name: 'Extrajoss Susu', desc: 'Extrajoss campur susu, segar buat nambah tenaga', price: 7000, photo: 'extrajoss-susu' },
    ],
  },
  {
    id: 'camilan',
    title: 'Camilan',
    items: [
      { name: 'Mix Platter', desc: 'Onion ring dan chicken crispy, saus sambal dan mayones', price: 18000, photo: 'mix-platter' },
      { name: 'Dimsum', desc: 'Dimsum kukus isi ayam/udang, topping wortel parut', price: 15000, per: '3pcs', photo: 'dimsum' },
      {
        name: 'Spicy Wings',
        desc: 'Sayap ayam panggang, glaze pedas manis, taburan cabai dan seledri',
        price: 18000,
        per: '4pcs',
        photo: 'spicy-wings',
      },
      { name: 'Kentang Goreng', desc: 'Kentang keriting yang gurih dan renyah', price: 8000, photo: 'kentang-goreng' },
      {
        name: 'Dimsum Mentai',
        desc: 'Dimsum kukus isi ayam/udang dengan saus mentai creamy',
        price: 18000,
        per: '3pcs',
        photo: 'dimsum-mentai',
      },
      { name: 'Dimsum Goreng', desc: 'Dimsum goreng crispy isi ayam dan keju leleh', price: 8500, per: 'pcs', photo: 'dimsum-goreng' },
      { name: 'Tahu Aci', desc: 'Tahu aci goreng renyah dengan saus sambal', price: 8000, photo: 'tahu-aci' },
      { name: 'Seblak', desc: 'Seblak kuah gurih pedas dengan sosis, bakso, dan telur', price: 8000, photo: 'seblak' },
      { name: 'Cimol Kentang', price: 7000, photo: 'cimol-kentang' },
      {
        name: 'Bola Kentang Kukus',
        desc: 'Pilih bumbu kacang, seblak, atau chili oil',
        price: 8000,
        photo: 'bola-kentang-kukus',
      },
      { name: 'Cibay', desc: 'Aci goreng yang gurih dan kenyal', price: 7000, per: '3pcs', photo: 'cibay' },
      { name: 'Aci Kerupuk', desc: 'Kerupuk aci goreng dengan chili oil', price: 7000, per: '3pcs', photo: 'aci-kerupuk' },
      { name: 'Roti Goreng', desc: 'Roti goreng krispi berbalut tepung renyah', price: 7000, photo: 'roti-goreng' },
      {
        name: 'Sandy Lody',
        desc: 'Sandwich isi sosis, telur, sayur, dan saus, plus keripik dan acar',
        price: 25000,
        note: 'Pre-order',
        photo: 'sandy-lody',
      },
    ],
  },
  {
    id: 'manis',
    title: 'Yang manis-manis',
    items: [
      { name: 'Pisang Coklat', desc: 'Pisang crispy isi cokelat lumer', price: 7000, per: '3pcs', photo: 'pisang-coklat' },
      { name: 'Ubi Keju', desc: 'Ubi goreng lumer, topping keju dan wijen', price: 10000, photo: 'ubi-keju' },
      { name: 'Cheese Roll', desc: 'Roll crispy isi keju leleh, disiram saus manis', price: 7000, per: '3pcs', photo: 'cheese-roll' },
      { name: 'Tiramisu', desc: 'Kue tiramisu lembut bertabur cokelat bubuk', price: 25000, photo: 'tiramisu' },
      { name: 'Ubi Coklat', desc: 'Pastry goreng isi ubi ungu dan cokelat lumer', price: 10000, per: '3pcs', photo: 'ubi-coklat' },
    ],
  },
];

export const formatK = (n: number) => `${(n / 1000).toLocaleString('id-ID')}K`;
