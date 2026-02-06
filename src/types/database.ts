export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          author_id: string;
          title_en: string;
          title_am: string;
          subtitle_en: string | null;
          subtitle_am: string | null;
          content_en: string;
          content_am: string;
          slug: string;
          visibility: "free" | "paid" | "teaser";
          published: boolean;
          published_at: string | null;
          scheduled_at: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          author_id: string;
          title_en: string;
          title_am: string;
          subtitle_en?: string | null;
          subtitle_am?: string | null;
          content_en: string;
          content_am: string;
          slug?: string;
          visibility?: "free" | "paid" | "teaser";
          published?: boolean;
          published_at?: string | null;
          scheduled_at?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          author_id?: string;
          title_en?: string;
          title_am?: string;
          subtitle_en?: string | null;
          subtitle_am?: string | null;
          content_en?: string;
          content_am?: string;
          slug?: string;
          visibility?: "free" | "paid" | "teaser";
          published?: boolean;
          published_at?: string | null;
          scheduled_at?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          display_name: string;
          handle: string;
          bio: string | null;
          avatar_url: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          email: string;
          display_name: string;
          handle: string;
          bio?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          display_name?: string;
          handle?: string;
          bio?: string | null;
          avatar_url?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type PostInsert = Database["public"]["Tables"]["posts"]["Insert"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
