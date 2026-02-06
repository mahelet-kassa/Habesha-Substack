export type Language = "en" | "am" | "mixed";

export type Author = {
  id: string;
  handle: string;
  name: string;
  bio: {
    en: string;
    am: string;
  };
  avatarUrl: string;
  subscriberCount: number;
  publications: Publication[];
};

export type Publication = {
  id: string;
  name: string;
  tagline: string;
  coverImageUrl?: string;
  tags: string[];
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: Author;
  language: Language;
  tags: string[];
  publishedAt: string;
  readingTimeMinutes: number;
  coverImageUrl: string;
  excerpt: string;
  visibility: "free" | "paid" | "teaser";
  body: string;
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  perks: string[];
};

export type Reaction = {
  id: string;
  emoji: string;
  count: number;
};

export type Comment = {
  id: string;
  authorName: string;
  content: string;
  createdAt: string;
  replies: Comment[];
};

export type Analytics = {
  views: number;
  subscribers: number;
  openRate: number;
  clickRate: number;
  revenueMonthly: number;
  revenueYearly: number;
};
