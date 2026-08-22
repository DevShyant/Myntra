// items.js — product data for Myntra clone
const itemsData = [
  {
    id: 'p1',
    company: 'Levi\'s',
    name: 'Slim Fit Jeans',
    price: 1499,
    original: 2999,
    discount: '50% off',
    rating: '4.4',
    img: 'https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/292378/best-slim-fit-jeans-292378-1616984629829-main-1600-80.jpg'
  },
  {
    id: 'p2',
    company: 'Roadster',
    name: 'Casual Shirt',
    price: 899,
    original: 1799,
    discount: '50% off',
    rating: '4.2',
    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'
  },
  {
    id: 'p3',
    company: 'H&M',
    name: 'Chinos',
    price: 1199,
    original: 2399,
    discount: '50% off',
    rating: '4.5',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
  },
  {
    id: 'p4',
    company: 'Zara',
    name: 'Printed T-Shirt',
    price: 599,
    original: 1199,
    discount: '50% off',
    rating: '4.1',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80'
  },
  {
    id: 'p5',
    company: 'Nike',
    name: 'Sports Shoes',
    price: 3599,
    original: 4999,
    discount: '28% off',
    rating: '4.7',
    img: 'https://worthly.com/wp-content/uploads/2014/02/Nike.jpg'
  }
  ,
  {
    id: 'p6',
    company: 'Puma',
    name: 'Running Sneakers',
    price: 2799,
    original: 3999,
    discount: '30% off',
    rating: '4.5',
    img: 'https://cdn.sweatband.com/new_balance_w560v3_womens_running_shoes_new_balance_w560v3_womens_running_shoes_pair_2000x2000.jpg'
  },
  {
    id: 'p7',
    company: 'Forever21',
    name: 'Denim Jacket',
    price: 2199,
    original: 3199,
    discount: '31% off',
    rating: '4.3',
    img: 'https://www.fullbeauty.com/on/demandware.static/-/Sites-masterCatalog_WomanWithin/default/dw4a3549aa/images/hi-res/0032_05271_mc_0470.jpg'
  },
  {
    id: 'p8',
    company: 'Adidas',
    name: 'Track Pants',
    price: 1299,
    original: 2499,
    discount: '48% off',
    rating: '4.4',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/8328425/2019/3/19/3d82c339-08a0-49e2-ab8d-ff66370518f01552989641113-HRX-by-Hrithik-Roshan-Women-Track-Pants-2851552989639184-1.jpg'
  },
  {
    id: 'p9',
    company: 'U.S. Polo',
    name: 'Polo T-Shirt',
    price: 699,
    original: 1299,
    discount: '46% off',
    rating: '4.1',
    img: 'https://i5.walmartimages.com/seo/U-S-Polo-Assn-Men-s-Big-Logo-Polo-Shirt_27e12a90-1f2d-4187-b68b-969384da2307.80c3037e549a77e90d3396117e524e27.jpeg'
  },
  {
    id: 'p10',
    company: 'Herschel',
    name: 'Backpack',
    price: 1999,
    original: 2999,
    discount: '33% off',
    rating: '4.6',
    img: 'https://img.freepik.com/premium-photo/hiking-equipment-mountains_924070-540.jpg'
  },
  {
    id: 'p11',
    company: 'Fossil',
    name: 'Leather Wallet',
    price: 799,
    original: 1499,
    discount: '47% off',
    rating: '4.2',
    img: 'https://rukminim1.flixcart.com/image/1408/1408/wallet-card-wallet/6/b/8/14023-hidelink-wallet-men-women-original-imae9hhmhsfc9djt.jpeg?q=90'
  },
  {
    id: 'p12',
    company: 'Ray-Ban',
    name: 'Aviator Sunglasses',
    price: 4599,
    original: 6999,
    discount: '34% off',
    rating: '4.8',
    img: 'https://tse2.mm.bing.net/th/id/OIP.RTgAC2OB1YzImhJ1cM26JAHaJd?w=600&h=766&rs=1&pid=ImgDetMain&o=7&rm=3.jpg'
  }
  ,
  {
    id: 'p13',
    company: 'NewBrand',
    name: 'Summer Hat',
    price: 499,
    original: 899,
    discount: '44% off',
    rating: '4.0',
    img: 'https://thehatstore.com.au/cdn/shop/products/r52_nat_1024x1024.jpg?v=1698013547.jpg',

  },
  {
    id: 'p14',
    company: 'ComfortCo',
    name: 'Beach Sandals',
    price: 699,
    original: 1299,
    discount: '46% off',
    rating: '4.2',
    img: 'https://tse3.mm.bing.net/th/id/OIP.nlA9iPEoX9jG_pLsA9S1dAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3.jpg',
    displayOrder: 1
  }
];

/* Export for bundlers or make global for simple inclusion */
window.itemsData = itemsData;

/* Items that should be inserted at specific locations on the page
   (rendered separately so they don't change the order of `itemsData`) */
const insertedItems = [
  {
    id: 'ins1',
    company: 'SunWear',
    name: 'Polarized Sunglasses',
    price: 799,
    original: 1599,
    discount: '50% off',
    rating: '4.3',
    img: 'https://res.glassesshop.com/products/202207/62cd3c4fd721f.jpg'
  },
  {
    id: 'ins2',
    company: 'Seaside',
    name: 'Canvas Tote',
    price: 499,
    original: 999,
    discount: '50% off',
    rating: '4.1',
    img: 'https://i.etsystatic.com/35088571/r/il/5bade9/5054923494/il_fullxfull.5054923494_lc2k.jpg'
  },
  {
    id: 'ins3',
    company: 'Jeoms',
    name: 'Women Cardigan',
    price: 1899,
    original: 3799,
    discount: '50% off',
    rating: '4.5',
    img: 'https://johnstonsofelgin.com/cdn/shop/files/KAA05320_HA0308lightgreyIMG_2634_RT.jpg?v=1721123857.jpg'
  },
  {
    id: 'ins4',
    company: 'Delmo',
    name: 'Solid cotton kurta',
    price: 599,
    original: 1199,
    discount: '50% off',
    rating: '4.2',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/images/style/properties/Shree-Men-Rust-Orange-Short-Kurta_7b6150b30cef9255d48d04cedfab6d0f_images.jpg'
  },
  {
    id: 'ins5',
    company: 'FitStyle',
    name: 'Colour Blocked Shrug',
    price: 799,
    original: 1599,
    discount: '50% off',
    rating: '4.4',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/27109560/2024/2/1/e5d5ad06-2ebc-4171-be07-8a656fb4a7ca1706801998613DressitudeWomenCropShrug1.jpg'
  },
  {
    id: 'ins6',
    company: 'ChicBrand',
    name: 'Layering Vest',
    price: 799,
    original: 1599,
    discount: '50% off',
    rating: '4.4',
    img: 'https://i.etsystatic.com/6738328/r/il/1a0fad/1352736789/il_1588xN.1352736789_gc59.jpg'
  },
  {
    id: 'ins7',
    company: 'ActiveWear',
    name: 'Yoga Pants',
    price: 1199,
    original: 2399,
    discount: '50% off',
    rating: '4.6',
    img: 'https://imgix.bustle.com/uploads/image/2021/2/23/98e8ae1d-8e68-4e08-833a-adf6f9b8f9d8-best-yoga-pants-for-men-baleaf.png?w=400&h=502&fit=crop&crop=faces.jpg'
  },
  {
    id: 'ins8',
    company: 'ClassicWear',
    name: 'Pencil Skirt',
    price: 899,
    original: 1799,
    discount: '50% off',
    rating: '4.1',
    img: 'https://tse2.mm.bing.net/th/id/OIP.ZR9n1-q1oSbO-v2XZoFtsAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3.jpg'
  },
  {
    id: 'ins9',
    company: 'DailyWear',
    name: 'Casual Shorts',
    price: 699,
    original: 1399,
    discount: '50% off',
    rating: '4.2',
    img: 'https://i5.walmartimages.com/asr/fcf7ee7a-f6df-411a-9ad9-b84747f60912.6b65f4bc52cabe72b41a39e9183dfde4.jpeg'
  },
  {
    id: 'ins10',
    company: 'CozyHome',
    name: 'Cotton T-Shirt',
    price: 399,
    original: 799,
    discount: '50% off',
    rating: '4.3',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
  },
  {
    id: 'ins11',
    company: 'TrendZone',
    name: 'Crop Top',
    price: 499,
    original: 999,
    discount: '50% off',
    rating: '4.3',
    img: 'https://tse1.explicit.bing.net/th/id/OIP.sLja1xixB-Vv-MJtxJ8t_gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3.jpg'
  },
  {
    id: 'ins12',
    company: 'Van Heusen',
    name: 'Leather Belt',
    price: 1599,
    original: 3199,
    discount: '50% off',
    rating: '4.7',
    img: 'https://i5.walmartimages.com/seo/Marino-Reversible-Leather-Belt-For-Men-Classic-Dress-Belt-1-25-Wide-With-Removable-Rotating-Buckle_d513f532-85c9-4fb1-b219-87278b77b590_1.0756a725c0c3a4235d20d7970388eac5.jpeg'
  },
  {
    id: 'ins13',
    company: 'BasicLine',
    name: 'Long Sleeve Top',
    price: 699,
    original: 1399,
    discount: '50% off',
    rating: '4.2',
    img: 'https://i.pinimg.com/originals/c0/d8/9e/c0d89e89df8fa028509b2fc7c0bef917.jpg'
  },
  {
    id: 'ins14',
    company: 'UrbanStyle',
    name: 'Bomber Jacket',
    price: 1499,
    original: 2999,
    discount: '50% off',
    rating: '4.4',
    img: 'https://i5.walmartimages.com/asr/0160fad4-801c-4968-b206-704cfa9d4536.64d1fd7e458c0021446673749484b00e.jpeg'
  },

  {
    id: 'ins15',
    company: 'ModernFit',
    name: 'Leggings',
    price: 999,
    original: 1999,
    discount: '50% off',
    rating: '4.5',
    img: 'https://i5.walmartimages.com/seo/Gravity-Threads-Nylon-Spandex-Womens-Capri-Leggings-Charcoal-Gray_b3238efd-275f-4605-b8e7-afa2ce6310ac.63bdfa166a98ee8342d6c7264c7eb6b6.jpeg'
  },
  {
    id: 'p15',
    company: 'BIBA',
    name: 'Printed Basic Jumpsuit',
    price: 1200,
    original: 2400,
    discount: '50% off',
    rating: '4.7',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/23985190/2023/7/12/6eee885f-19e2-43e9-a191-aef64459f3ca1689164038801BibaGreenYellowStraplessPrintedBasicJumpsuit1.jpg',

  },
  {
    id: 'p16',
    company: 'XLRT',
    name: 'Hoodied Sweatshirt Jacket',
    price: 500,
    original: 900,
    discount: '40% off',
    rating: '3.3',
    img: 'https://i.pinimg.com/736x/de/16/fc/de16fc01b25096cb68d0c9ac339cd5ba.jpg',

  },
  {
    id: 'p17',
    company: 'Denimco',
    name: 'Solid Denim ',
    price: 800,
    original: 600,
    discount: '20% off',
    rating: '4.3',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/14535858/2022/2/24/f467ead0-352f-4e9c-a90e-6648b8eff9611645685603147-Roadster-Women-Jackets-9371645685602579-1.jpg',

  }
];









window.insertedItems = insertedItems;

/* Recommended items for bag page (unique products different from main and inserted items) */
const recommendedItems = [
  {
    id: 'rec1',
    company: 'Calvin Klein',
    name: 'Slim Fit Formal Shirt',
    price: 1799,
    original: 3599,
    discount: '50% off',
    rating: '4.6',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/7777637/2018/11/15/9aeeffcf-eb96-4e74-8ef7-950e414fea941542260350314-RG-DESIGNERS-Men-Blue-Slim-Fit-Checked-Formal-Shirt-2001542260349994-1.jpg'
  },
  {
    id: 'rec2',
    company: 'Tommy Hilfiger',
    name: 'Classic Polo',
    price: 1299,
    original: 2599,
    discount: '50% off',
    rating: '4.4',
    img: 'https://i.pinimg.com/originals/36/c2/f4/36c2f45b24f379a241fa811c2e4a4964.png'
  },
  {
    id: 'rec3',
    company: 'Wrangler',
    name: 'Dark Blue Jeans',
    price: 1599,
    original: 2999,
    discount: '47% off',
    rating: '4.5',
    img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2024/NOVEMBER/19/7BAyHYn0_542458468dfa4cf59d7ce0a2aca0abb3.jpg'
  },
  {
    id: 'rec4',
    company: 'Dockers',
    name: 'Khaki Trousers',
    price: 1399,
    original: 2799,
    discount: '50% off',
    rating: '4.3',
    img: 'https://i5.walmartimages.com/seo/Dockers-Men-s-Classic-Fit-Signature-Pleated-Khaki-Pants_0858b245-582a-4656-b6e8-6ad9df7aead9.c0ccd07b6360fc6d88ee75b864770436.jpeg'
  },
  {
    id: 'rec5',
    company: 'Skechers',
    name: 'Comfort Walking Shoes',
    price: 2499,
    original: 3999,
    discount: '37% off',
    rating: '4.7',
    img: 'https://imgix.bustle.com/uploads/image/2019/5/3/6c0bdee4-55af-4dd1-b4aa-45ef7f8335a4-mbt-usa-inc-womens-colorado-shoes.jpg?w=400&h=204&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2.jpg'
  },
  {
    id: 'rec6',
    company: 'Clarks',
    name: 'Leather Oxford Shoes',
    price: 3499,
    original: 4999,
    discount: '30% off',
    rating: '4.6',
    img: 'https://tse2.mm.bing.net/th/id/OIP.VjCah33IFwvjpdXDMConsAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3.jpg'
  }
];

window.recommendedItems = recommendedItems;
