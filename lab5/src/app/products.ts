export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  like:number;
  link: string;
  img: string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Macbook Air 13',
    category: 'Computers',
    price: 1083,
    like:0,
    rating: 4.8,
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    description: 'Apple MacBook Air 13, 256 GB, grey'
  },
  {
    id: 2,
    name: 'Acer Nitro 5',
    category: 'Computers',
    price: 839,
    rating: 3.2,
    like:0,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/img/m/p/h7a/hce/66626494431262.jpg?format=preview-medium',
    description: 'Acer Nitro, 512 GB, black'
  },
  {
    id: 3,
    name: 'HP Victus',
    category: 'Computers',
    price: 1283,
    rating: 3,
    like:0,
    link: 'https://kaspi.kz/shop/p/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hba/h6c/66102705815582/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136-1.jpg',
    description: 'HP Victus,512 GB, dark-grey'
  },
  {
    id: 4,
    name: 'Asus TUF',
    category: 'Computers',
    price: 1030,
    rating: 4,
    like:0,
    link: 'https://kaspi.kz/shop/p/asus-tuf-fx506hc-hn105-90nr0724-m02760-chernyi-102018884/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    description: 'Asus TUF, 1024 GB, black'
  },
  {
    id: 5,
    name: 'Macbook Pro 14',
    category: 'Computers',
    price: 2102,
    rating: 4.9,
    like:0,
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf8/h06/47153374068766/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    description: 'Macbook Pro 14, 256 GB, grey'
  },
  {
    id: 6,
    name: 'iPhone 14 Pro Max',
    category: 'Phones',
    price: 1581,
    rating: 4.8,
    like:0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    description: 'Apple iPhone 14 Pro Max, 256 GB, purple'
  },
  {
    id: 7,
    name: 'iPhone 13',
    category: 'Phones',
    price: 851,
    rating: 4.5,
    like:0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4f/h4b/46392661671966/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    description: 'Apple iPhone 13, 128 GB, blue'
  },
  {
    id: 8,
    name: 'Everycom YG 625',
    category: 'TV, Audio, Video',
    price: 187,
    rating: 4.2,
    like:0,
    link: 'https://kaspi.kz/shop/p/everycom-yg-625-104399477/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1f/hec/49897664708638/everycom-yg-625-104399477-1.jpg',
    description: 'Projector Everycom YG 625'
  },
  {
    id: 9,
    name: 'Samsung TV',
    category: 'TV, Audio, Video',
    price: 448,
    rating: 3.8,
    like:0,
    link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfa/hfa/49319748403230/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    description: 'TV Samsung, 109 sm, black'
  },
  {
    id: 10,
    name: 'AirPods Pro 2',
    category: 'TV, Audio, Video',
    price: 270,
    rating: 4.1,
    like:0,
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h39/hbd/62281477128222/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    description: 'Apple AirPods Pro 2, white'
  },
  {
    id: 11,
    name: 'LG',
    category: 'Appliances',
    price: 269,
    rating: 4.3,
    like:0,
    link: 'https://kaspi.kz/shop/p/lg-f2j3ws1w-belyi-105927780/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h66/h8d/31820622594078/lg-f2j3ns0w-white-3601511-1-Container.jpg',
    description: 'Washing machine LG, white'
  },
  {
    id: 12,
    name: 'Artel HD',
    category: 'Appliances',
    price: 360,
    rating: 4,
    like:0,
    link: 'https://kaspi.kz/shop/p/artel-hd-345rn-steel-seryi-100531318/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h3d/h38/51533397852190/artel-hd-345rn-steel-seryi-100531318-1.jpg',
    description: 'Fridge Artel HD, grey'
  },
  {
    id: 13,
    name: 'Samsung Galaxy A13',
    category: 'Phones',
    price: 190,
    rating: 3.5,
    like:0,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h26/h48/49613711835166/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    description: 'Samsung Galaxy A13, 128 GB, black'
  },
  {
    id: 14, 
    name: 'Artel VCC',
    category: 'Appliances',
    price: 93,
    rating: 3.3,
    like:0,
    link: 'https://kaspi.kz/shop/p/artel-vcc-0220-sinii-3701021/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/had/hb8/31515831926814/artel-vcc-0220-seryj-3701268-1-Container.jpg',
    description: 'Cleaner Artlel VCC, blue'
  },
  {
    id: 15, 
    name: 'Canon EOS 6D Mark || body',
    category: 'TV, Audio, Video',
    price: 1189,
    rating: 4.8,
    like:0,
    link: 'https://kaspi.kz/shop/c/photo%20cameras/?q=',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hca/hd9/31513252954142/canon-eos-6d-mark-ii-body-cernyj-2200982-1-Container.jpg',
    description: 'Camera Canon EOS 6D Mark || body, black'
  },
  {
    id: 16,
    name: 'Sony PlayStation 5',
    category: 'TV, Audio, Video',
    price: 736,
    rating: 5,
    like:0,
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7d/hf3/33035105959966/sony-playstation-5-belyj-100746577-1-Container.jpg',
    description: 'Game console Sony PlayStation5, white'
  },
  {
    id: 17,
    name: 'Conditioner Samsung',
    category: 'Appliances',
    price: 473,
    rating: 4.2,
    like:0,
    link: 'https://kaspi.kz/shop/p/samsung-ar12tqhqaurner-belyi-montazhnyi-komplekt-100168968/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd5/ha4/49421575127070/samsung-ar12tqhqaurner-belyi-montazhnyi-komplekt-100168968-1.jpg',
    description: 'Conditioner Samsung, white'
  },
  {
    id: 18,
    name: 'DEXP MS-70',
    category: 'Appliances',
    price: 70,
    rating: 3,
    like:0,
    link: 'https://kaspi.kz/shop/p/dexp-ms-70-chernyi-105476701/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h80/h5f/51842093973534/mikrovolnovaa-pec-dexp-ms-70-cernyj-20-l-700-vt-pereklucateli-povorotnyj-mehanizm-105476701-1.jpg',
    description: 'Microwave DEXP MS-70, black'
  },
  {
    id: 19,
    name: 'Xiaomi Redmi Note',
    category: 'Phones',
    price: 120,
    rating: 3.3,
    like:0,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-seryi-103541773/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha3/h35/48472414158878/smartfon-xiaomi-redmi-note-11-4-128-graphite-gray-103541773-1.jpg',
    description: 'Xiaomi Redmi Note, 128 GB, black'
  },
  {
    id: 20,
    name: 'iPhone 11',
    category: 'Phones',
    price: 676,
    rating: 4.3,
    like:0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/hf8/33208262066206/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg',
    description: 'Apple iPhone 11, 128 GB, white'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/