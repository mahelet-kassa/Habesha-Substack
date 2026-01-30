import { Analytics, Author, Comment, Post, Reaction, SubscriptionPlan } from "../types";

export const sampleAuthor: Author = {
  id: "author_1",
  handle: "mebrahtu",
  name: "Mebrahtu Bekele",
  bio: {
    en: "Writer exploring Ethiopian history, culture, and future tech.",
    am: "ስነ-ጽሁፍና ታሪክ ላይ የሚጻፍ ጸሐፊ።"
  },
  avatarUrl:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
  subscriberCount: 8240,
  publications: [
    {
      id: "pub_1",
      name: "Habesha Futures",
      tagline: "Stories and analysis for a rising generation.",
      tags: ["culture", "policy", "tech"]
    }
  ]
};

export const samplePosts: Post[] = [
  {
    id: "post_1",
    slug: "future-of-addis",
    title: "The Future of Addis: Cities, Stories, and New Voices",
    subtitle: "How local creators are shaping the next decade of storytelling.",
    author: sampleAuthor,
    language: "en",
    tags: ["culture", "cities", "writing"],
    publishedAt: "2026-01-25",
    readingTimeMinutes: 8,
    coverImageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Across Addis Ababa, a new generation of writers are building spaces that feel like home.",
    visibility: "free",
    body:
      "This is a featured English post with embedded media, images, and thoughtful analysis."
  },
  {
    id: "post_2",
    slug: "ye-ethiopia-ye-melekot",
    title: "የኢትዮጵያ የመለኮት ታሪኮች",
    subtitle: "በቅዱሳን ታሪክ ውስጥ ያሉ ትምህርቶች",
    author: sampleAuthor,
    language: "am",
    tags: ["history", "faith"],
    publishedAt: "2026-01-20",
    readingTimeMinutes: 10,
    coverImageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "የጥንታዊ ታሪኮች ውስጥ የምንገናኘውን ትምህርት እንመልከት።",
    visibility: "paid",
    body: "ይህ ረዘም ያለ የአማርኛ ጽሁፍ ለተመዝጋቢዎች ብቻ ነው።"
  },
  {
    id: "post_3",
    slug: "mixed-language-letter",
    title: "Letter to a New Writer | ለአዲስ ጸሐፊ መልእክት",
    subtitle: "Guidance in two languages, one community.",
    author: sampleAuthor,
    language: "mixed",
    tags: ["guides", "community"],
    publishedAt: "2026-01-15",
    readingTimeMinutes: 6,
    coverImageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "This bilingual note blends English and Amharic to welcome new storytellers.",
    visibility: "free",
    body:
      "Start with a clear point of view, then weave in ትዕግስት and consistency as you grow."
  }
];

export const samplePlans: SubscriptionPlan[] = [
  {
    id: "plan_free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    perks: ["Weekly newsletter", "Community comments", "Public archive"]
  },
  {
    id: "plan_plus",
    name: "Supporter",
    priceMonthly: 8,
    priceYearly: 80,
    perks: ["Subscriber-only posts", "Audio versions", "Writer Q&A"]
  },
  {
    id: "plan_premium",
    name: "Patron",
    priceMonthly: 15,
    priceYearly: 150,
    perks: ["Everything in Supporter", "Private office hours", "Early access"]
  }
];

export const sampleReactions: Reaction[] = [
  { id: "reaction_1", emoji: "👍", count: 412 },
  { id: "reaction_2", emoji: "❤️", count: 281 },
  { id: "reaction_3", emoji: "🔥", count: 192 }
];

export const sampleComments: Comment[] = [
  {
    id: "comment_1",
    authorName: "Selam Tesfaye",
    content: "This piece made me feel seen. Thank you.",
    createdAt: "2h ago",
    replies: [
      {
        id: "comment_1a",
        authorName: "Mebrahtu Bekele",
        content: "I appreciate you reading, Selam.",
        createdAt: "1h ago",
        replies: []
      }
    ]
  }
];

export const sampleAnalytics: Analytics = {
  views: 48230,
  subscribers: 8240,
  openRate: 0.58,
  clickRate: 0.31,
  revenueMonthly: 12840,
  revenueYearly: 148000
};
