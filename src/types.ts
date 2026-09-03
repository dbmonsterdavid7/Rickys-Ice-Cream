export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Best Sellers' | 'Seasonal' | 'Signature' | 'Dairy-Free';
  dietaryTags: string[];
  image: string;
  primaryColor: string;
  accentColor: string;
  rating: number;
  reviewsCount: number;
  ingredients: string[];
  allergens: string[];
  caloriesPerScoop: number;
  tastingNotes: string[];
  pairingSuggestions: string;
  isSeasonal?: boolean;
  isPopular?: boolean;
}

export interface CateringPackage {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  guestMin: number;
  guestMax: number;
  pricePerGuest: number;
  baseFee: number;
  features: string[];
  includesCart: boolean;
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  favoriteFlavor: string;
  avatar: string;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  googleProfileUrl: string;
  navigationUrl?: string;
  mapEmbedQuery: string;
  hours: {
    day: string;
    hours: string;
    isWeekend?: boolean;
  }[];
  holidayNote: string;
  cateringNotice: string;
}

export interface CateringInquiry {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  selectedPackage: string;
  favoriteFlavors: string[];
  message: string;
}
