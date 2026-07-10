import {
  Plane,
  Hotel,
  Briefcase,
  GraduationCap,
  FileText,
  Home,
  BookOpen,
  Car,
  HeartPulse,
  Utensils,
  MoreHorizontal,
  type LucideIcon
} from 'lucide-react';

export const MOCK_TABS = [
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'hotels', label: 'Hotels', icon: Hotel },
  { id: 'jobs', label: 'Jobs', icon: Briefcase },
  { id: 'schools', label: 'Schools', icon: GraduationCap },
  { id: 'visa', label: 'Visa', icon: FileText },
  { id: 'apartments', label: 'Apartments', icon: Home },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'cars', label: 'Cars', icon: Car },
  { id: 'hospitals', label: 'Hospitals', icon: HeartPulse },
  { id: 'restaurants', label: 'Restaurants', icon: Utensils },
  { id: 'more', label: 'More', icon: MoreHorizontal },
];

export const POPULAR_SEARCHES = [
  'Tokyo Flights',
  'Student Visa',
  'IT Jobs',
  'Apartments in Osaka',
  'Japanese Language School'
];


import { ArrowUpRight, Users, Clock, Zap } from 'lucide-react';


export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
  iconColor: string;
}

export const STATS_ITEMS: StatItem[] = [
  { value: '99.8%', label: 'Success Rate', icon: ArrowUpRight, iconColor: 'text-indigo-600' },
  { value: '15K+', label: 'Happy Users', icon: Users, iconColor: 'text-emerald-600' },
  { value: '24hrs', label: 'AI Support', icon: Clock, iconColor: 'text-pink-600' },
  { value: '30sec', label: 'Quick Response', icon: Zap, iconColor: 'text-amber-500' },
];

export const WHY_CHOOSE_POINTS: string[] = [
  "Safe & Clean Environment",
  "World-Class Education",
  "High Salary Opportunities",
  "Advanced Technology",
  "Rich Culture & Lifestyle",
  "Excellent Healthcare"
];

import {  
  Languages, Settings 
} from 'lucide-react';

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  temp: string;
  hotelsCount: string;
  image: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerMonth: string;
  image: string;
}

export interface ServiceItem {
  label: string;
  icon: any;
}

export const DESTINATIONS: Destination[] = [
  { id: '1', name: 'Tokyo', tagline: 'The Future is Here', temp: '24°C', hotelsCount: '1,230+ Hotels', image: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', name: 'Osaka', tagline: 'The Kitchen of Japan', temp: '25°C', hotelsCount: '890+ Hotels', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=600&q=80' },
  { id: '3', name: 'Kyoto', tagline: 'Traditional Beauty', temp: '22°C', hotelsCount: '650+ Hotels', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
  { id: '4', name: 'Sapporo', tagline: 'Nature & Adventure', temp: '16°C', hotelsCount: '420+ Hotels', image: 'https://images.unsplash.com/photo-1572420780547-8fbb45c82f0a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '5', name: 'Fukuoka', tagline: 'Food & Festivals', temp: '23°C', hotelsCount: '310+ Hotels', image: 'https://plus.unsplash.com/premium_photo-1724593825200-39731dcdacf8?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '6', name: 'Okinawa', tagline: 'Tropical Paradise', temp: '28°C', hotelsCount: '200+ Hotels', image: 'https://plus.unsplash.com/premium_photo-1661963745503-8b3a86b8c2b1?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export const LUXURY_HOTELS: Hotel[] = [
  { id: '1', name: 'The Ritz-Carlton Tokyo', location: 'Tokyo', rating: 4.9, reviews: 1240, price: '$850', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Park Hyatt Kyoto', location: 'Kyoto', rating: 4.8, reviews: 980, price: '$720', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Conrad Osaka', location: 'Osaka', rating: 4.7, reviews: 850, price: '$550', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
  { id: '4', name: 'Hilton Okinawa', location: 'Okinawa', rating: 4.6, reviews: 710, price: '$420', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80' },
];

export const BUDGET_PROPERTIES: Property[] = [
  { id: '1', name: 'Tokyo Studio Apt', location: 'Tokyo', rating: 4.5, reviews: 120, pricePerMonth: '$452/mo', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Osaka Central Apt', location: 'Osaka', rating: 4.4, reviews: 95, pricePerMonth: '$380/mo', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Kyoto Stay House', location: 'Kyoto', rating: 4.6, reviews: 140, pricePerMonth: '$410/mo', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80' },
  { id: '4', name: 'Sapporo Cozy Apt', location: 'Sapporo', rating: 4.3, reviews: 88, pricePerMonth: '$300/mo', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80' },
];

export const SERVICES: ServiceItem[] = [
  { label: 'Visa & Immigration', icon: FileText },
  { label: 'Japanese Schools', icon: GraduationCap },
  { label: 'Jobs & Careers', icon: Briefcase },
  { label: 'Real Estate', icon: Home },
  { label: 'Flight Booking', icon: Plane },
  { label: 'Translation', icon: Languages },
  { label: 'Japanese Courses', icon: BookOpen },
  { label: 'Business Setup', icon: Settings },
];

export interface SuccessStory {
  id: string;
  name: string;
  country: string;
  achievement: string;
  avatar: string;
}

export interface UserReview {
  id: string;
  rating: number;
  country: string;
  thumbnail: string;
}

export interface ChatExchange {
  id: string;
  character: 'Kai' | 'Shi';
  avatar: string;
  question: string;
  answer: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Arjun',
    country: 'India',
    achievement: 'Got Student Visa in 12 Days',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: '2',
    name: 'Maria',
    country: 'Brazil',
    achievement: 'Found Job in Tokyo in 20 Days',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: '3',
    name: 'Ken',
    country: 'USA',
    achievement: 'Started Business in Japan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: '4',
    name: 'Sofia',
    country: 'Spain',
    achievement: 'Studying in Kyoto University',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export const USER_REVIEWS: UserReview[] = [
  {
    id: '1',
    rating: 4.9,
    country: 'Nepal',
    thumbnail: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    rating: 5.0,
    country: 'Vietnam',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '3',
    rating: 4.8,
    country: 'Indonesia',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '4',
    rating: 4.9,
    country: 'Philippines',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
  },
];

export const CHAT_EXCHANGES: ChatExchange[] = [
  {
    id: '1',
    character: 'Kai',
    avatar: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=150&h=150&q=80',
    question: 'What are the requirements for student visa in Japan?',
    answer: 'You need admission from a Japanese school, proof of funds, passport, and other documents. I can guide you step-by-step!',
  },
  {
    id: '2',
    character: 'Shi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    question: 'Can I work in Japan with student visa?',
    answer: 'Yes! You can work part-time up to 28 hours per week during your studies.',
  },
  {
    id: '3',
    character: 'Kai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    question: 'How long does visa processing take?',
    answer: 'Usually 5 to 10 working days depending on the type of visa and your country.',
  },
];