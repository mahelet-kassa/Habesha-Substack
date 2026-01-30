import { Analytics, Author, Comment, Post, SubscriptionPlan } from "../types";

export type ApiResponse<T> = {
  data: T;
  error?: string;
};

export const apiContracts = {
  auth: {
    login: "POST /api/auth/login",
    register: "POST /api/auth/register",
    refresh: "POST /api/auth/refresh",
    logout: "POST /api/auth/logout"
  },
  posts: {
    list: "GET /api/posts?language=en&tag=tech",
    get: "GET /api/posts/:id",
    create: "POST /api/posts",
    update: "PATCH /api/posts/:id",
    publish: "POST /api/posts/:id/publish",
    schedule: "POST /api/posts/:id/schedule"
  },
  authors: {
    profile: "GET /api/authors/:handle",
    posts: "GET /api/authors/:handle/posts",
    subscribers: "GET /api/authors/:handle/subscribers"
  },
  subscriptions: {
    plans: "GET /api/subscriptions/plans",
    checkout: "POST /api/subscriptions/checkout",
    manage: "POST /api/subscriptions/manage"
  },
  analytics: {
    overview: "GET /api/analytics/overview",
    post: "GET /api/analytics/posts/:id"
  }
};

export async function fetchPosts(): Promise<ApiResponse<Post[]>> {
  return {
    data: []
  };
}

export async function fetchPost(id: string): Promise<ApiResponse<Post>> {
  return {
    data: {} as Post
  };
}

export async function fetchAuthor(handle: string): Promise<ApiResponse<Author>> {
  return {
    data: {} as Author
  };
}

export async function fetchPlans(): Promise<ApiResponse<SubscriptionPlan[]>> {
  return {
    data: []
  };
}

export async function fetchComments(postId: string): Promise<ApiResponse<Comment[]>> {
  return {
    data: []
  };
}

export async function fetchAnalytics(): Promise<ApiResponse<Analytics>> {
  return {
    data: {} as Analytics
  };
}
