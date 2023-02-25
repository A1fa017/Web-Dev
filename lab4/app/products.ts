export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  link: string;
  img: string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Macbook Air 13',
    price: 1083,
    rating: 4.8,
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    description: 'Apple MacBook Air 13, 256 GB, grey'
  },
  {
    id: 2,
    name: 'Acer Nitro 5',
    price: 839,
    rating: 3.2,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
    description: 'Acer Nitro, 512 GB, black'
  },
  {
    id: 3,
    name: 'HP Victus',
    price: 1283,
    rating: 3,
    link: 'https://kaspi.kz/shop/p/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/hb1/66102705881118/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136-1.jpg',
    description: 'HP Victus,512 GB, dark-grey'
  },
  {
    id: 4,
    name: 'Asus TUF',
    price: 1030,
    rating: 4,
    link: 'https://kaspi.kz/shop/p/asus-tuf-fx506hc-hn105-90nr0724-m02760-chernyi-102018884/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/h15/45365373370398/asus-tuf-fx506hc-hn105-90nr0724-m02760-cernyj-102018884-1.jpg',
    description: 'Asus TUF, 1024 GB, black'
  },
  {
    id: 5,
    name: 'Macbook Pro 14',
    price: 2102,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    description: 'Macbook Pro 14, 256 GB, grey'
  },
  {
    id: 6,
    name: 'HP Europe Pavilion',
    price: 675,
    rating: 2.2,
    link: 'https://kaspi.kz/shop/p/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3d/64208771874846/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147-1.jpg',
    description: 'HP Europe Pavilion, 256 GB, silver'
  },
  {
    id: 7,
    name: 'Asus Rog',
    price: 937,
    rating: 3.4,
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryi-101686597/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h89/34101177024542/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryj-101686597-1-Container.jpg',
    description: 'Asus Rog, 512 GB, grey'
  },
  {
    id: 8,
    name: 'Lenovo Legion',
    price: 1644,
    rating: 3.9,
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16ach6h-82jq010crk-seryi-106652334/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h32/62832992092190/lenovo-legion-5-pro-16ach6h-82jq010crk-seryj-106652334-1.jpg',
    description: 'Lenovo Legion, 1000 GB, grey'
  },
  {
    id: 9,
    name: 'Acer Predator',
    price: 1858,
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/acer-predator-helios-300-ph317-55-nh-qb6cn-003-chernyi-107091434/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/haf/63652534157342/acer-predator-helios-300-ph317-55-nh-qb6cn-003-cernyj-107091434-1.jpg',
    description: 'Acer Predator, 512 GB, black'
  },
  {
    id: 10,
    name: 'Lenovo IdeaPad',
    price: 1081,
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-gaming-3-15ihu6-82k10013rk-chernyi-107594732/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/h57/65797730795550/nb-lenovo-ideapad-gaming-3-15ihu6-82k10013rk-15-6-107594732-1.jpg',
    description: 'Lenovo IdeaPad, 1000 GB, black'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/