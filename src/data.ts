import { MenuItem, Review, GalleryItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Paneer Tikka Platter",
    description: "Flame-grilled cottage cheese cubes marinated in rich Indian spices, yoghurt, and saffron, served with fresh mint chutney.",
    price: 380,
    category: "signatures",
    image: "/src/assets/images/paneer_tikka_platter_1781840550994.jpg",
    isVegetarian: true,
    tag: "Chef's Special"
  },
  {
    id: "m2",
    name: "Creamy Fettuccine Pasta Alfredo",
    description: "Delectable pasta tossed in a luxurious, creamy parmesan white sauce with garlic, mushrooms, and elegant fresh herbs.",
    price: 340,
    category: "signatures",
    image: "/src/assets/images/pasta_alfredo_1781840577187.jpg",
    isVegetarian: true,
    tag: "Best Seller"
  },
  {
    id: "m3",
    name: "Ultimate Loaded Nachos",
    description: "Crispy hand-cut tortilla chips layered with warm melted cheese sauce, refried beans, fresh jalapeños, tangy salsa, and avocado sour cream.",
    price: 290,
    category: "starters",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80",
    isVegetarian: true,
    tag: "Perfect with Drinks"
  },
  {
    id: "m4",
    name: "The Wallflower Gourmet Burger",
    description: "Signature chargrilled veg patty with caramelized onions, heirloom tomatoes, sharp cheddar cheese, and house secret smoked wood spread.",
    price: 320,
    category: "mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    isVegetarian: true,
    tag: "Gourmet"
  },
  {
    id: "m5",
    name: "Aromatic Kadai Paneer",
    description: "Tender cottage cheese cubes tossed with bell peppers, succulent onions, and homemade ground signature spices in a traditional iron wok.",
    price: 390,
    category: "signatures",
    image: "/src/assets/images/kadai_paneer_dish_1781841124770.jpg",
    isVegetarian: true,
    tag: "Chef's Choice"
  },
  {
    id: "m6",
    name: "Sunset Ember Artisanal Mocktail",
    description: "An elegant infusion of visual fresh mint, rosemary herb extract, zero-alcohol blood orange essence, and bubbly club soda.",
    price: 180,
    category: "beverages",
    image: "/src/assets/images/cocktail_beverage_1781840563227.jpg",
    isVegetarian: true,
    tag: "Refreshing"
  },
  {
    id: "m7",
    name: "Chocolate Lava Sizzler",
    description: "Molten dark chocolate cake on a hot sizzler plate, topped with a scoop of double vanilla bean ice cream and warm rich fudge sauce.",
    price: 260,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
    isVegetarian: true,
    tag: "Heavenly"
  },
  {
    id: "m8",
    name: "Crispy Chilli Baby Corn",
    description: "Golden fried tender baby corn tossed in a spicy, sweet, and tangy Indo-Chinese glaze with fresh spring onions.",
    price: 260,
    category: "starters",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
    isVegetarian: true
  },
  {
    id: "m9",
    name: "Wood-Fired Garden Pizza",
    description: "Hand-stretched sourdough loaded with slow-simmered marinara, buffalo mozzarella, bell peppers, hand-picked black olives, and fresh basil.",
    price: 390,
    category: "mains",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    isVegetarian: true
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Ananya Sharma",
    rating: 5,
    text: "The Wallflower Kitchen is an absolute gem in Kota! The rooftop vibe is simply stunning, especially around sunset. Food was extremely delicious, with Paneer Tikka being the highlight. Highly recommended!",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    source: "google"
  },
  {
    id: "r2",
    name: "Rahul Verma",
    rating: 5,
    text: "Remarkable service and amazing city views from the fifth floor. We ordered the Pasta Alfredo and Sizzlers—both were chef d'oeuvre! Perfect ambiance for a romantic evening or celebration.",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    source: "google"
  },
  {
    id: "r3",
    name: "Sneha Gupta",
    rating: 4,
    text: "Great multi-cuisine option in Rajeev Gandhi Nagar. Extremely fresh ingredients, friendly staff, and cozy ambient lighting. The mocktails are so beautifully served. A must-visit destination!",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    source: "google"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Premium Rooftop Seating",
    category: "seating",
    image: "/src/assets/images/hero_rooftop_dining_1781840537087.jpg"
  },
  {
    id: "g2",
    title: "Artisanal Food Presentation",
    category: "food",
    image: "/src/assets/images/paneer_tikka_platter_1781840550994.jpg"
  },
  {
    id: "g3",
    title: "Cozy Evening Lighting",
    category: "lighting",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g4",
    title: "Unforgettable Gatherings",
    category: "gatherings",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g5",
    title: "Elegant Restaurant Interiors",
    category: "interiors",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g6",
    title: "Signature Golden Hour Ambiance",
    category: "seating",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
  }
];

export const CONTACT_INFO = {
  name: "The Wallflower Kitchen",
  phone: "+91 80790 55870",
  email: "hello@thewallflowerkitchen.com",
  address: "5th Floor, 48, Rajeev Gandhi Nagar, Instrumentation Limited Colony, Kota, Rajasthan 324005",
  gmapsLink: "https://maps.google.com/?q=The+Wallflower+Kitchen+5th+Floor+48+Rajeev+Gandhi+Nagar+Instrumentation+Limited+Colony+Kota+Rajasthan+324005",
  rating: 4.3,
  hours: [
    { days: "Monday - Thursday", time: "12:00 PM - 11:30 PM" },
    { days: "Friday - Sunday", time: "12:00 PM - 12:00 AM (Midnight)" }
  ],
  whatsappNumber: "+918079055870"
};
