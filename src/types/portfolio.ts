export interface ClientReview {
  id: string;
  username: string;
  country: string;
  countryFlag: string;
  rating: number;
  timeAgo: string;
  text: string;
  channelOrProject: string;
  tag: 'YouTube Promotion' | 'Roblox Dev' | 'Music / Artist';
}

export interface ServiceCard {
  id: string;
  title: string;
  category: 'youtube' | 'roblox';
  priceStarting: string;
  badge?: string;
  description: string;
  highlights: string[];
  ctaText: string;
}

export interface ProofScreenshot {
  id: string;
  title: string;
  screenType: 'gigs' | 'ratings_breakdown' | 'creator_reviews' | 'music_reviews' | 'repeat_buyer';
  badge: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  clientSnippet?: {
    username: string;
    country: string;
    flag: string;
    rating: string;
    comment: string;
  };
}

export interface PeaceGamingProfile {
  name: string;
  role: string;
  bioHeadline: string;
  aboutShort: string;
  stats: {
    rating: number;
    totalReviews: number;
    deliveryQuality: number;
    communication: number;
    value: number;
  };
  email: string;
  whatsapp: string;
  telegram?: string;
  robloxProfile?: string;
  fiverrRating: string;
}
