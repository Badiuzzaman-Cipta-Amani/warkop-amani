// Photos for the gallery wall. Drop new files into /public/gallery and list them here;
// the newest ones go first, and the first eight also show on the home page.
export type Photo = { src: string; alt: string; caption: string };

export const gallery: Photo[] = [
  { src: '/menu/butter-rice-katsu.webp', alt: 'Butter rice dengan telur mata sapi dan ayam katsu', caption: 'Butter rice katsu' },
  { src: '/menu/ramen-amani.webp', alt: 'Ramen kuah miso dengan nori dan sayur', caption: 'Ramen Amani' },
  { src: '/menu/mix-platter.webp', alt: 'Onion ring, chicken crispy, dan saus sambal di satu piring', caption: 'Mix platter buat rame-rame' },
  { src: '/menu/spicy-wings.webp', alt: 'Sayap ayam panggang berlumur saus pedas manis', caption: 'Spicy wings' },
  { src: '/menu/nasi-daun-jeruk.webp', alt: 'Nasi daun jeruk dengan telur barendo dan sambal matah', caption: 'Nasi daun jeruk' },
  { src: '/menu/dimsum.webp', alt: 'Lima dimsum kukus dengan topping wortel', caption: 'Dimsum kukus' },
  { src: '/menu/mie-goreng-rebus.webp', alt: 'Mie dengan sawi, telur, dan tomat', caption: 'Mie, teman setia' },
  { src: '/menu/seblak.webp', alt: 'Seblak kuah merah dengan sosis dan bakso', caption: 'Seblak kuah' },
  { src: '/menu/pasta-amani.webp', alt: 'Spaghetti creme dengan sosis', caption: 'Pasta Amani' },
  { src: '/menu/dimsum-mentai.webp', alt: 'Dimsum dengan saus mentai di wadah aluminium', caption: 'Dimsum mentai' },
  { src: '/menu/sandy-lody.webp', alt: 'Sandwich tebal isi sosis, telur, dan sayur', caption: 'Sandy Lody (pre-order)' },
  { src: '/menu/cheese-roll.webp', alt: 'Cheese roll dengan saus manis di atasnya', caption: 'Cheese roll' },
  { src: '/menu/kentang-goreng.webp', alt: 'Kentang goreng keriting', caption: 'Kentang keriting' },
  { src: '/menu/pisang-coklat.webp', alt: 'Pisang cokelat goreng', caption: 'Pisang coklat' },
];
