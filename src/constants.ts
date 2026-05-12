import { MenuItem, MenuCategory } from './types';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'african-dishes', name: 'Original Kitchen', label: 'Category 01', count: 12 },
  { id: 'rice-class', name: 'Golden Grains', label: 'Category 02', count: 15 },
  { id: 'starters-fingers', name: 'Soulful Starters', label: 'Category 03', count: 15 },
  { id: 'pepper-soups', name: 'Spice & Broth', label: 'Category 04', count: 9 },
  { id: 'platters', name: 'Grand Platters', label: 'Category 05', count: 4 },
  { id: 'pasta-noodles', name: 'Modern Pasta', label: 'Category 06', count: 9 },
  { id: 'sauces-sides', name: 'Sauces & Sides', label: 'Category 07', count: 15 },
  { id: 'drinks', name: 'Signature Sips', label: 'Category 08', count: 20 },
];

export const MENU_ITEMS: MenuItem[] = [
  // African Dishes - Page 1
  {
    id: 'egusi',
    name: 'Egusi Soup',
    description: 'A rich, nutty classic made from ground melon seeds and leafy greens, simmered with tender proteins and traditional smoked fish for a deep, smoky finish.',
    price: 4000,
    category: 'african-dishes',
<<<<<<< HEAD
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGo4VicjjruN1Cjdf1wCWdTMucMfbKFEU6A&s',
=======
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
    badges: ['⭐ CLASSIC'],
  },
  {
    id: 'sea-food-okro',
    name: 'Sea Food Okro',
    description: 'Vibrant West-African Delicacy Featuring Tender Okra Pods Infused with Succulent Shrimp, Fresh Croakerfish, Prawns and Crab Claws Slow-Cooked with Bold Spices.',
    price: 15000,
    category: 'african-dishes',
<<<<<<< HEAD
    image: '/src/assets/images/seafood-okro.png',
=======
    image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
    isFeatured: true,
    badges: ['🔥 LUXE'],
  },
  {
    id: 'efo-riro',
    name: 'Efo Riro',
    description: 'Yoruba cuisine known as Eko special, with vegetables, stock-fish, ponmo, smoked catfish and panla fish.',
    price: 4000,
    category: 'african-dishes',
<<<<<<< HEAD
    image: '/src/assets/images/eforiro.png',
=======
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
  },
  {
    id: 'edikang-ikong',
    name: 'Edikang Ikong',
    description: 'Originated among the Efik-Ibibio people of Akwa Ibom & Cross river state, very nutritious and well stocked with Ponmo, Panla, Smoked Catfish and Stock-fish.',
    price: 4000,
    category: 'african-dishes',
<<<<<<< HEAD
    image: '/src/assets/images/edikang-soup.png',
=======
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
  },

  // Rice Class - Page 1 & 4
  {
    id: 'native-rice',
    name: 'Traditional Native Rice',
    description: 'Bursting with local herbs and soul. This smoky rice dish is mixed with shredded meat and traditional spices that take you straight back to mama\'s kitchen.',
    price: 4000,
    category: 'rice-class',
<<<<<<< HEAD
    image: '/src/assets/images/traditional-native-rice.png',
=======
    image: 'https://images.unsplash.com/photo-1546061872-a51d46094bc1?w=800&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
  },
  {
    id: 'ofada-rice-sauce',
    name: 'Spicy Ofada Feast',
    description: 'Pure Nigerian heritage. Earthy local rice served with our legendary "Ayamase" palm oil sauce, loaded with assorted meats and bold peppers.',
    price: 5000,
    category: 'rice-class',
<<<<<<< HEAD
    image: '/src/assets/images/traditional-ofada-rice.png',
=======
    image: 'https://images.unsplash.com/photo-1536304993881-ff86e5b6e5bd?w=800&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
    badges: ['🌶️ SPICY'],
  },
  {
    id: 'jambalaya-special-rice',
    name: 'Jambalaya Special Rice',
    description: 'Iconic jambalaya special rice explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage and shrimps.',
    price: 17000,
    category: 'rice-class',
<<<<<<< HEAD
    image: '/src/assets/images/jambalaya-special-rice.png',
=======
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80&auto=format',
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
    isFeatured: true,
  },
  {
    id: 'pineapple-rice',
    name: 'Pineapple Rice',
    description: 'Tropical Thai-Inspired Delight of Jasmine Rice into Sweet and Savory Bliss, Hollowed-Out Pineapple Halves Brim with Diced Pineapple Crunch and Tender Shrimps.',
    price: 10000,
    category: 'rice-class',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80&auto=format',
  },

  // Starters & Fingers - Page 2
  {
    id: 'peppered-snail',
    name: 'Peppered Snail',
    description: 'Herb-Infused Peppered Snail, cooked with fresh herbs like thyme and rosemary.',
    price: 10000,
    category: 'starters-fingers',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c17290d4?w=800&q=80&auto=format',
  },
  {
    id: 'isi-ewu',
    name: 'Isi-Ewu',
    description: 'Traditional Homemade Cooked Goat Head in a Rich, Aromatic Spicy Delight And Sauce.',
    price: 15000,
    category: 'starters-fingers',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format',
    isFeatured: true,
  },
  {
    id: 'giz-dodo',
    name: 'Giz-Dodo',
    description: 'Crispy Fried Gizzards with A Taste Of Spicy Delight, Mixed With Plantain.',
    price: 7000,
    category: 'starters-fingers',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80&auto=format',
  },
  {
    id: 'bbq-croaker-fish',
    name: 'BBQ Croaker Fish',
    description: 'Indulge in Our Crispy Marinated Croakerfish, Smothered in Our Signature BBQ Sauce and Spice.',
    price: 15000,
    category: 'starters-fingers',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=600&q=80&auto=format',
  },

  // Pepper Soups - Page 3
  {
    id: 'seafood-pepper-soup',
    name: 'Seafood Pepper Soup',
    description: 'A Treasure Trove of Flavors, a Medley of Seafood Cooking in a Spicy, Aromatic Broth Infused with Peppers, Spices, Herbs, Calamari, Shrimps, Prawns, Crab Claws And Croakerfish.',
    price: 20000,
    category: 'pepper-soups',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80&auto=format',
    isFeatured: true,
  },
  {
    id: 'goat-meat-pepper-soup',
    name: 'Goat Meat Pepper Soup',
    description: 'Spicy and Savory, Tender Goat Meat Pepper Soup, Infused with Aromatic Peppers, Spices and Herbs Served with Bread Roll.',
    price: 6000,
    category: 'pepper-soups',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&auto=format',
  },

  // Platters - Page 5
  {
    id: 'family-platter',
    name: 'Choplife Family Platter',
    description: '2 Chicken Laps, 2 Sweet Corn, 12 Puff-Puff, 4 Springs, 1 Bbq Fish, 5 Samosa, 5 Sausage Yam and Plantain.',
    price: 50000,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&q=80&auto=format',
    isFeatured: true,
  },
  {
    id: 'seafood-platter',
    name: 'Seafood Platter',
    description: '1 Crab, 2 Corns, 4 Spring Rolls, Potato, 1 Fish, 1 Prawn, 2 Calamari Kebab.',
    price: 70000,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=1000&q=80&auto=format',
  },

  // Pasta & Noodles - Page 6
  {
    id: 'jambalaya-pasta',
    name: 'Jambalaya Pasta',
    description: 'Iconic Jambalaya Tradition Spaghetti Explodes with the Trinity of Onions, Celery and Bell Peppers Sautéed In In Spicy Sausage and Shrimps.',
    price: 10000,
    category: 'pasta-noodles',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80&auto=format',
  },
  {
    id: 'chicken-creamy-pasta',
    name: 'Chicken Creamy Pasta',
    description: 'Tender Grilled Chicken Breast with all Dente Penne in Luscious, Velvety Sauce of Heavy Cream and Cheese.',
    price: 10000,
    category: 'pasta-noodles',
    image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&q=80&auto=format',
  },

  // Sauces - Page 7
  {
    id: 'shredded-chill-chicken',
    name: 'Shredded Chill Chicken',
    description: 'Tender, Slow-Cooked Chicken Breast, Delicately Shredded and Simmered in a Savory Blend of Smoky Chipotle Served with Steamed Basmatic Rice.',
    price: 10000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80&auto=format',
  },
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    description: 'Tender chunks chicken thigh, slow-simmered in a fragrant milk coconut milk, curry infused with turmeric and a medley of warming spice.',
    price: 15000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=600&q=80&auto=format',
  },

  // Drinks - Page 7
  {
    id: 'cocktails',
    name: 'Signature Cocktails',
    description: 'Architectural beverages crafted with fresh juices and premium mixers.',
    price: 4000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&q=80&auto=format',
    badges: ['🍸 ARTISAN'],
  }
];
