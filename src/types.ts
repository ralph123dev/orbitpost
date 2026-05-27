/**
 * Orbit Post App & Simulator Types definition
 */

export interface TranslationMap {
  fr: string;
  en: string;
  enTranslationText?: string;
}

export interface MockPost {
  id: string;
  username: string;
  handle: string;
  avatar: string;
  time: string;
  content: {
    fr: string;
    en: string;
    es: string;
  };
  image?: string;
  likes: number;
  reposts: number;
  comments: number;
  hasLiked?: boolean;
  hasReposted?: boolean;
  isBoosted?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'other' | 'system';
  content: {
    fr: string;
    en: string;
  };
  timestamp: string;
  encryptedKey?: string;
  isEncrypted: boolean;
}

export interface ChatThread {
  id: string;
  name: string;
  avatar: string;
  role: string;
  lastActive: string;
  messages: ChatMessage[];
}

export interface FeatureSpotlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string; // lucide icon identifier
  color: string; // tailwind color prefix
  badge?: string;
}
