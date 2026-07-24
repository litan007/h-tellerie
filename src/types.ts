export interface Room {
  id: string;
  title: string;
  subtitle: string;
  category: 'suite' | 'villa' | 'lodge';
  price: number;
  surface: number;
  capacity: number;
  view: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  amenities: string[];
  rating: number;
  featured?: boolean;
}

export interface MenuItem {
  id: string;
  title: string;
  category: 'entrees' | 'plats' | 'desserts' | 'boissons' | 'degustation';
  price: number;
  description: string;
  image: string;
  tags?: string[];
  recommended?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  category: 'nature' | 'aventure' | 'bien-etre' | 'culture';
  price: number;
  duration: string;
  difficulty: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  included: string[];
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  inclusions: string[];
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hotel' | 'restaurant' | 'nature' | 'experiences';
  image: string;
  caption: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'faune-flore' | 'gastronomie' | 'conseils' | 'conservation';
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guestsAdults: number;
  guestsChildren: number;
  roomId?: string;
  selectedExtras: string[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests: string;
  promoCode?: string;
}

export interface TableBookingState {
  date: string;
  timeSlot: string;
  guestsCount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests: string;
  seatingArea: 'terrasse' | 'interieur' | 'vue-lac';
}
