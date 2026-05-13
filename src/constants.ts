import { MenuItem, MenuCategory } from './types';

// Import local images
import afangSoup from './assets/images/afang-soup.png';
import basmatiRice from './assets/images/basmati-rice.png';
import bbqCroakerFish from './assets/images/bbq-croaker-fish.png';
import beefPepperSoup from './assets/images/beef-pepper-soup.png';
import bitterleafSoup from './assets/images/biterleaf-soup.png';
import chickenBreast from './assets/images/chicken-breast.png';
import chickenPepper from './assets/images/chicken-pepper.png';
import chickenSandwich from './assets/images/chicken-sandwitch.png';
import chineseRice from './assets/images/chinese-rice.png';
import coconutRice from './assets/images/coconut-rice.png';
import cowtailPepperSoup from './assets/images/cowtail-pepper soup.png';
import eaglesNest from './assets/images/eagles-nest.png';
import edikangSoup from './assets/images/edikang-soup.png';
import familyPlatter from './assets/images/family-platter.png';
import friedRice from './assets/images/fried-rice.png';
import egusiSoup from './assets/images/egusi-soup.png';
import eforiro from './assets/images/eforiro.png';
import gizDodo from './assets/images/giz-dodo.png';
import goatMeatPepperSoup from './assets/images/goat meat pepper soup.png';
import ogbonoSoup from './assets/images/ogbono-soup.png';
import okroSoup from './assets/images/okro-soup.png';
import isiEwu from './assets/images/isi-ewu.png';
import jambalayaPasta from './assets/images/jambalaya-pasta.png';
import jambalayaSpecialRice from './assets/images/jambalaya-special-rice.png';
import jollofRice from './assets/images/jollof-rice.png';
import seafoodPlatter from './assets/images/naija -seafood - platter.png';
import pepperedBeef from './assets/images/peppered-beef.png';
import pepperedChicken from './assets/images/peppered-chicken.png';
import pepperedGizzard from './assets/images/pepperd-red-gizzard.png';
import pepperedTurkey from './assets/images/peppered-turkey.png';
import puffPuff from './assets/images/puff puff.png';
import pepperedSnail from './assets/images/peppered snail.png';
import seafoodOkro from './assets/images/seafood-okro.png';
import smallChops from './assets/images/small-chops.png';
import stirFryRice from './assets/images/stir-fry-rice.png';
import turkeyPepper from './assets/images/turkey-pepper.png';
import seafoodPepperSoup from './assets/images/seafood-pepper-soup.png';
import mixedPlatter from './assets/images/mixed-platter.png';
import nkwobi from './assets/images/nkwobi.png';
import nativeRice from './assets/images/traditional-native-rice.png';
import ofadaRice from './assets/images/traditional-ofada-rice.png';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'african-dishes', name: 'Original Kitchen', label: 'Category 01', count: 8 },
  { id: 'rice-class', name: 'Golden Grains', label: 'Category 02', count: 12 },
  { id: 'starters-fingers', name: 'Soulful Starters', label: 'Category 03', count: 14 },
  { id: 'pepper-soups', name: 'Spice & Broth', label: 'Category 04', count: 8 },
  { id: 'platters', name: 'Grand Platters', label: 'Category 05', count: 4 },
  { id: 'pasta-noodles', name: 'Modern Pasta', label: 'Category 06', count: 7 },
  { id: 'sauces-sides', name: 'Sauces & Sides', label: 'Category 07', count: 12 },
  { id: 'drinks', name: 'Signature Sips', label: 'Category 08', count: 4 },
];

export const MENU_ITEMS: MenuItem[] = [
  // African Dishes
  {
    id: 'egusi',
    name: 'Egusi Soup',
    description: 'Nigerian Cuisine Prepared with Seeds of Certain Cucurbitaceae Plant Seeds, Well Stocked with Ponmo, Panla Fish, Smoked Catfish & Stock-Fish.',
    price: 4000,
    category: 'african-dishes',
    image: egusiSoup,
    badges: ['⭐ CLASSIC'],
  },
  {
    id: 'ogbono',
    name: 'Ogbono Soup',
    description: 'Nigerian Delicacy Made with Ground Dry Irvinga Seeds (Wild Mango), Palm Oil, Bitter Leaf, Celosia, Fermented Locust Beans, Smoked Fish, Smoked Hake Fish, Ponmo and Crayfish.',
    price: 4000,
    category: 'african-dishes',
    image: ogbonoSoup,
  },
  {
    id: 'sea-food-okro',
    name: 'Sea Food Okro',
    description: 'Vibrant West-African Delicacy Featuring Tender Okra Pods Infused with Succulent Shrimp, Fresh Croakerfish, Prawns and Crab Claws Slow-Cooked with Bold Spices.',
    price: 15000,
    category: 'african-dishes',
    image: seafoodOkro,
    isFeatured: true,
    badges: ['🔥 LUXE'],
  },
  {
    id: 'bitter-leaf-soup',
    name: 'Bitter Leaf Soup',
    description: 'Igbo Origin Cuisine Prepared with Bitter Leaf Well Stocked with Ponmo, Smoked Fish & Stock-Fish.',
    price: 4000,
    category: 'african-dishes',
    image: bitterleafSoup,
  },
  {
    id: 'edikang-ikong',
    name: 'Edikang Ikong',
    description: 'Originated among the Efik-Ibibio people of Akwa Ibom & Cross River State, very nutritious and well stocked with Ponmo, Panla, Smoked Catfish and Stock-fish.',
    price: 4000,
    category: 'african-dishes',
    image: edikangSoup,
  },
  {
    id: 'efo-riro',
    name: 'Efo Riro',
    description: 'Yoruba cuisine known as Eko special, with vegetables, stock-fish, ponmo, smoked catfish and panla fish.',
    price: 4000,
    category: 'african-dishes',
    image: eforiro,
  },
  {
    id: 'okra-soup',
    name: 'Okra Soup',
    description: 'Very common and highly nutritious soup known as Obe Ila.',
    price: 4000,
    category: 'african-dishes',
    image: okroSoup,
  },
  {
    id: 'afang',
    name: 'Afang Soup',
    description: 'Vegetable soup originated from Ibibio people of Akwa Ibom, Made of Stock-fish, Ponmo, Panla fish, Crayfish, Smoked Catfish, Water-leaf, and Utazi leaf.',
    price: 4000,
    category: 'african-dishes',
    image: afangSoup,
  },

  // Rice Class
  {
    id: 'native-rice',
    name: 'Traditional Native Rice',
    description: 'Cooked with Local Herbs and Spice. Mixed with Shredded Meat.',
    price: 4000,
    category: 'rice-class',
    image: nativeRice,
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    description: 'Made by Cooking rice with Coconut Milk and seasonings.',
    price: 5000,
    category: 'rice-class',
    image: coconutRice,
  },
  {
    id: 'ofada-rice-sauce',
    name: 'Ofada Rice and Sauce',
    description: 'A traditional Nigerian dish made from a local rice variety. It\'s typically served with a spicy sauce made from palm oil, scotch bonnet peppers, onions, and assorted meats or fish.',
    price: 5000,
    category: 'rice-class',
    image: ofadaRice,
    badges: ['🌶️ SPICY'],
  },
  {
    id: 'jambalaya-special-rice',
    name: 'Jambalaya Special Rice',
    description: 'Iconic jambalaya special rice explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage and shrimps.',
    price: 17000,
    category: 'rice-class',
    image: jambalayaSpecialRice,
    isFeatured: true,
  },
  {
    id: 'chinese-rice',
    name: 'Chinese Rice',
    description: 'Stir-Fry Medley of Jasmine Rice to Perfection with Diced Carrots, Peas, Scrambled Eggs and Succulent Shrimp, Seasoned with Soy Sauce, Oyster Sauce and Sesame Oil.',
    price: 12000,
    category: 'rice-class',
    image: chineseRice,
  },
  {
    id: 'jambalaya-rice',
    name: 'Jambalaya Rice',
    description: 'Iconic jambalaya tradition rice explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage and shrimps.',
    price: 12000,
    category: 'rice-class',
    image: jambalayaSpecialRice,
  },
  {
    id: 'pineapple-rice',
    name: 'Pineapple Rice',
    description: 'Tropical Thai-Inspired Delight of Jasmine Rice into Sweet and Savory Bliss, Hollowed-Out Pineapple Halves Brim with Diced Pineapple Crunch and Tender Shrimps and Chicken.',
    price: 10000,
    category: 'rice-class',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'ofada-rice-sauce-luxe',
    name: 'Ofada Rice & Sauces',
    description: 'Cherished Locally Grown Rice with a Luxurious Palm-Oil Infused Hot Chilli Stew Brimming with Tender Assorted Meat, Diced Ponmo, Panla, Smoked Fish and Boiled Egg. (With choice of Protein)',
    price: 10000,
    category: 'rice-class',
    image: ofadaRice,
  },
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    description: 'Nigeria Beloved Jollof Rice, Tossed in a Bold, Smoky Tomato Sauce Crafted From Bell Peppers, Scotch Bonnet Chili, Onions and Garlic.',
    price: 4000,
    category: 'rice-class',
    image: jollofRice,
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    description: 'Stir-Fry Rice with Flash-Tossed of Peas, Shredded Carrots, Spring Onions and Green Beans.',
    price: 4000,
    category: 'rice-class',
    image: friedRice,
  },
  {
    id: 'stir-fry-rice',
    name: 'Stir Fry Rice',
    description: 'Stir-fry rice with flash-tossed of peas, shredded carrots, mushrooms and tender steak, coated in a glossy glaze of soy sauce.',
    price: 10000,
    category: 'rice-class',
    image: stirFryRice,
  },
  {
    id: 'fried-basmati-rice',
    name: 'Fried Basmatic Rice',
    description: 'Stir-Fry Basmatic Rice with Flash-Tossed of Peas, Shredded Carrots, Spring Onions and Green Beans.',
    price: 6000,
    category: 'rice-class',
    image: basmatiRice,
  },

  // Starters & Fingers
  {
    id: 'bbq-croaker-fish',
    name: 'BBQ Croaker Fish',
    description: 'Indulge in Our Crispy Marinated Croakerfish, Smothered in Our Signature BBQ Sauce and Spice.',
    price: 15000,
    category: 'starters-fingers',
    image: bbqCroakerFish,
    isFeatured: true,
  },
  {
    id: 'peppered-snail',
    name: 'Peppered Snail',
    description: 'Herb-Infused Peppered Snail, cooked with fresh herbs like thyme and rosemary.',
    price: 10000,
    category: 'starters-fingers',
    image: pepperedSnail,
  },
  {
    id: 'isi-ewu',
    name: 'Isi-Ewu',
    description: 'Traditional Homemade Cooked Goat Head in a Rich, Aromatic Spicy Delight And Sauce.',
    price: 15000,
    category: 'starters-fingers',
    image: isiEwu,
    isFeatured: true,
  },
  {
    id: 'peppered-goat-meat',
    name: 'Peppered Goat Meat',
    description: 'Savor the Flavor, Spicy Cooked Goat Meat Delight to Perfection in a Rich, Aromatic Pepper Sauce.',
    price: 5000,
    category: 'starters-fingers',
    image: 'https://cheflolaskitchen.com/wp-content/uploads/2023/01/Suya-1.jpg',
  },
  {
    id: 'nkwobi',
    name: 'Nkwobi',
    description: 'Spicy Homemade Tender Pieces of Cow Leg Cooked in a Rich, Aromatic Sauce.',
    price: 10000,
    category: 'starters-fingers',
    image: nkwobi,
  },
  {
    id: 'peppered-gizzard',
    name: 'Peppered Gizzard',
    description: 'Tender Gizzard Strips Cooked in a Rich, Aromatic Pepper Sauce.',
    price: 5000,
    category: 'starters-fingers',
    image: pepperedGizzard,
  },
  {
    id: 'peppered-turkey',
    name: 'Peppered Turkey',
    description: 'Diced Savory Turkey Cooked in a Rich, Aromatic Pepper Sauce.',
    price: 8000,
    category: 'starters-fingers',
    image: pepperedTurkey,
  },
  {
    id: 'peppered-chicken',
    name: 'Peppered Chicken',
    description: 'Tender Chicken Strips Cooked In A Rich, Aromatic Pepper Sauce.',
    price: 7000,
    category: 'starters-fingers',
    image: pepperedChicken,
  },
  {
    id: 'giz-dodo',
    name: 'Giz-Dodo',
    description: 'Crispy Fried Gizzards with A Taste Of Spicy Delight, Mixed With Plantain.',
    price: 7000,
    category: 'starters-fingers',
    image: gizDodo,
  },
  {
    id: 'peppered-beef',
    name: 'Peppered Beef',
    description: 'Tender Beef Strips Cooked in a Rich, Aromatic Pepper Sauce.',
    price: 5000,
    category: 'starters-fingers',
    image: pepperedBeef,
  },
  {
    id: 'puff-puff-samosa',
    name: 'Puff-Puff & Samosa',
    description: 'A classic combination of sweet dough balls and savory filled pastries.',
    price: 7000,
    category: 'starters-fingers',
    image: puffPuff,
  },
  {
    id: 'small-chops',
    name: 'Small Chops',
    description: 'A variety of bite-sized Nigerian appetizers.',
    price: 5000,
    category: 'starters-fingers',
    image: smallChops,
  },
  {
    id: 'chicken-sandwich',
    name: 'Chicken Sandwich',
    description: 'Fresh and savory chicken sandwich served with standard fixings.',
    price: 5000,
    category: 'starters-fingers',
    image: chickenSandwich,
  },
  {
    id: 'burger',
    name: 'Burger',
    description: 'Juicy burger made with premium beef and fresh toppings.',
    price: 8000,
    category: 'starters-fingers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop',
  },

  // Pepper Soups
  {
    id: 'croaker-fish-pepper-soup',
    name: 'Croaker Fish Pepper Soup',
    description: 'Delightful Twist, Fresh Whole Croakerfish Cooked in a Spicy, Aromatic Broth Infused With Peppers, Spices and Herbs.',
    price: 13000,
    category: 'pepper-soups',
    image: seafoodPepperSoup,
  },
  {
    id: 'goat-meat-pepper-soup',
    name: 'Goat Meat Pepper Soup',
    description: 'Spicy and Savory, Tender Goat Meat Pepper Soup, Infused with Aromatic Peppers, Spices and Herbs Served with Bread Roll, Perfect for Warming the Soul.',
    price: 6000,
    category: 'pepper-soups',
    image: goatMeatPepperSoup,
  },
  {
    id: 'cow-tail-pepper-soup',
    name: 'Cow Tail Pepper Soup',
    description: 'Spicy and Savory, Cowtail Pepper Soup, Infused with Aromatic Peppers, Spices and Herbs Served with Bread Roll, Perfect For Warming the Soul.',
    price: 7000,
    category: 'pepper-soups',
    image: cowtailPepperSoup,
  },
  {
    id: 'chicken-pepper-soup',
    name: 'Chicken Pepper Soup',
    description: 'Tender Chicken Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Served with Bread Roll.',
    price: 6000,
    category: 'pepper-soups',
    image: chickenPepper,
  },
  {
    id: 'seafood-pepper-soup',
    name: 'Seafood Pepper Soup',
    description: 'A Treasure Trove of Flavors, a Medley of Seafood Cooking in a Spicy, Aromatic Broth Infused with Peppers, Spices, Herbs, Calamari, Shrimps, Prawns, Crab Claws And Croakerfish.',
    price: 20000,
    category: 'pepper-soups',
    image: seafoodPepperSoup,
    isFeatured: true,
  },
  {
    id: 'turkey-pepper-soup',
    name: 'Turkey Pepper Soup',
    description: 'Diced Turkey Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Served with Bread Roll.',
    price: 8000,
    category: 'pepper-soups',
    image: turkeyPepper,
  },
  {
    id: 'gizzard-pepper-soup',
    name: 'Gizzard Pepper Soup',
    description: 'Tender Gizzard Cooked in a Flavorful, Spicy and Broth Infused with Peppers and Herbs. Served with Bread Roll.',
    price: 5000,
    category: 'pepper-soups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Assorted_meat_pepper_soup_at_Lagos_Island.jpg',
  },
  {
    id: 'beef-pepper-soup',
    name: 'Beef Pepper Soup',
    description: 'Tender Beef Strips Simmered in a Spicy, Aromatic Broth Infused with Peppers, Spices and Herbs.',
    price: 5000,
    category: 'pepper-soups',
    image: beefPepperSoup,
  },

  // Platters
  {
    id: 'family-platter',
    name: 'Choplife Family Platter',
    description: '2 Chicken Laps, 2 Sweet Corn, 12 Puff-Puff, 4 Springs, 1 BBQ Fish, 5 Samosa, 5 Sausage Yam and Plantain.',
    price: 50000,
    category: 'platters',
    image: familyPlatter,
    isFeatured: true,
  },
  {
    id: 'seafood-platter',
    name: 'Seafood Platter',
    description: '1 Crab, 2 Corns, 4 Spring Rolls, Potato, 1 Fish, 1 Prawn, 2 Calamari Kebab.',
    price: 70000,
    category: 'platters',
    image: seafoodPlatter,
    isFeatured: true,
  },
  {
    id: 'mixed-platter',
    name: 'Mixed Platter',
    description: 'Giz Dodo, 1 Grill Prawns, Chicken, Pasta Jollof Special Rice.',
    price: 60000,
    category: 'platters',
    image: mixedPlatter,
  },
  {
    id: 'eagles-nest-platter',
    name: 'Eagles Nest Platter',
    description: 'Grilled Chicken, Grilled Turkey, Asun, Sausage, Corn, Plantain & Yam Blocks.',
    price: 56000,
    category: 'platters',
    image: eaglesNest,
  },

  // Pasta & Noodles
  {
    id: 'jambalaya-pasta',
    name: 'Jambalaya Pasta',
    description: 'Iconic Jambalaya Tradition Spaghetti Explodes with the Trinity of Onions, Celery and Bell Peppers Sautéed In In Spicy Sausage and Shrimps.',
    price: 10000,
    category: 'pasta-noodles',
    image: jambalayaPasta,
  },
  {
    id: 'jollof-spaghetti',
    name: 'Jollof Spaghetti',
    description: 'Nigeria Beloved Jollof Spaghetti Tossed In a Bold, Smoky Tomato Sauce Crafted from Bell Peppers, Scotch Bonnet Chili, Onions and Garlic.',
    price: 4000,
    category: 'pasta-noodles',
    image: 'https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'chicken-creamy-pasta',
    name: 'Chicken Creamy Pasta',
    description: 'Tender Grilled Chicken Breast with al Dente Penne in Luscious, Velvety Sauce of Heavy Cream and Cheese. Tossed with Sun Dried Tomatoes, Spinach and Mushroom.',
    price: 10000,
    category: 'pasta-noodles',
    image: chickenBreast,
  },
  {
    id: 'singaporian-noodles',
    name: 'Singaporian Noodles',
    description: 'Stir-Fry Medley of Thin Rice Vermicelli Noodles Dance with Shrimp, Bell Peppers, Onions and Bean Sprouts in a Wok Tossed with Sesame Oil.',
    price: 10000,
    category: 'pasta-noodles',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Timeless Italian Classic Pasta, Low-Simmered Ground Beef in a Rich Velvety Sauce, Diced Carrot, Celery and Onions.',
    price: 10000,
    category: 'pasta-noodles',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'stir-fry-pasta',
    name: 'Stir Fry Pasta',
    description: 'Italian Pasta with Flash-Tossed of Peas, Shredded Carrots, Mushrooms and Tender Chicken. Coated in a Glossy Glaze of Soy Sauce.',
    price: 10000,
    category: 'pasta-noodles',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'jambalaya-special-spaghetti',
    name: 'Jambalaya Special Spaghetti',
    description: 'Iconic jambalaya special spaghetti explodes with the trinity of onions, celery and bell peppers sauteed in spicy sausage, chicken breast and shrimps.',
    price: 15000,
    category: 'pasta-noodles',
    image: jambalayaPasta,
  },

  // Sauces & Sides
  {
    id: 'shredded-chill-chicken',
    name: 'Shredded Chili Chicken',
    description: 'Tender, Slow-Cooked Chicken Breast, Delicately Shredded and Simmered in a Savory Blend of Smoky Chipotle Served with Steamed Basmati Rice.',
    price: 10000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    description: 'Tender chunks chicken thigh, slow-simmered in a fragrant coconut milk, curry infused with turmeric and a medley of warming spices. Served with fluffy Basmatic rice.',
    price: 15000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'yam-fries',
    name: 'Yam Fries',
    description: 'Crispy golden fried yam strips, a perfect side for any meal.',
    price: 2000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fd5752?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'plantain',
    name: 'Plantain',
    description: 'Sweet, ripe fried plantain slices (Dodo).',
    price: 2000,
    category: 'sauces-sides',
    image: 'https://www.shutterstock.com/shutterstock/photos/1844329760/display_1500/stock-photo-jollof-rice-with-fried-banana-baked-chicken-rice-with-tomatoes-onions-spices-traditional-1844329760.jpg',
  },
  {
    id: 'sweet-potato-fries',
    name: 'Sweet Potato Fries',
    description: 'Crispy fried sweet potato strips.',
    price: 2000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fd5752?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    description: 'Classic golden crispy potato fries.',
    price: 3500,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fd5752?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'asun-fries',
    name: 'Asun & Fries',
    description: 'Spicy grilled goat meat paired with crispy fries.',
    price: 7000,
    category: 'sauces-sides',
    image: 'https://cheflolaskitchen.com/wp-content/uploads/2023/01/Suya-1.jpg',
  },
  {
    id: 'beef-suya',
    name: 'Beef Suya',
    description: 'Traditional spiced grilled beef skewers.',
    price: 6000,
    category: 'sauces-sides',
    image: 'https://cheflolaskitchen.com/wp-content/uploads/2023/01/Suya-1.jpg',
  },
  {
    id: 'chicken-club-sandwich',
    name: 'Chicken Club Sandwich',
    description: 'Triple-decker sandwich with chicken, with a side of chips.',
    price: 12000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb44?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'grilled-chicken-chips',
    name: 'Grilled Chicken & Chips',
    description: 'Savory grilled chicken served with crispy golden chips.',
    price: 8000,
    category: 'sauces-sides',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb44?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'grilled-turkey-chips',
    name: 'Grilled Turkey & Chips',
    description: 'Savory grilled turkey served with crispy golden chips.',
    price: 9000,
    category: 'sauces-sides',
    image: 'https://cheflolaskitchen.com/wp-content/uploads/2023/01/Suya-1.jpg',
  },

  // Drinks
  {
    id: 'fresh-orange-juice',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice.',
    price: 2000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'fresh-pineapple-juice',
    name: 'Fresh Pineapple Juice',
    description: 'Freshly squeezed pineapple juice.',
    price: 2000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'chapman',
    name: 'Chapman',
    description: 'Nigeria\'s beloved non-alcoholic cocktail with Fanta, Sprite, bitters and fresh citrus.',
    price: 5000,
    category: 'drinks',
    image: 'https://yummymedley.com/wp-content/uploads/2015/05/Nigerian-Chapman-Drink-1.jpg',
    badges: ['🍹 POPULAR'],
  },
  {
    id: 'tutti-frutti',
    name: 'Tutti Frutti',
    description: 'A refreshing mixed fruit drink.',
    price: 3000,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop',
  },
];
