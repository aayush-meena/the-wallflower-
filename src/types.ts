export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "all" | "signatures" | "beverages" | "desserts" | "starters" | "mains";
  image: string;
  isVegetarian: boolean;
  tag?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  source: "google" | "user";
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
  preOrderItems?: { itemId: string; name: string; quantity: number; price: number }[];
  status: "pending" | "confirmed";
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "seating" | "food" | "lighting" | "gatherings" | "interiors";
  image: string;
}
