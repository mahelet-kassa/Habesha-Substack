import { supabase } from "../lib/supabase";
import type { Post, PostInsert } from "../types/database";

function generateSlug(title: string): string {
  // Try to extract ASCII characters first
  const asciiSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);

  // If the title is non-Latin (e.g. Amharic), generate a timestamp-based slug
  if (!asciiSlug || asciiSlug === "-") {
    return `post-${Date.now()}`;
  }

  // Append a short timestamp to avoid duplicates
  return `${asciiSlug}-${Date.now().toString(36)}`;
}

export async function createPost(post: Omit<PostInsert, "slug">): Promise<{ data: Post | null; error: Error | null }> {
  const slug = generateSlug(post.title_en || post.title_am);
  
  const insertData = {
    ...post,
    slug,
    // If publishing immediately, set published_at
    published_at: post.published ? new Date().toISOString() : null,
  };

  const { data, error } = await supabase
    .from("posts")
    .insert(insertData)
    .select()
    .single();

  if (error) {
    console.error("createPost error:", error);
  }

  return { data, error };
}

export async function updatePost(id: string, updates: Partial<PostInsert>): Promise<{ data: Post | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("posts")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function publishPost(id: string): Promise<{ data: Post | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("posts")
    .update({
      published: true,
      published_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function getPublishedPosts(): Promise<{ data: Post[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  return { data, error };
}

export async function getPostBySlug(authorHandle: string, slug: string): Promise<{ data: Post | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      profiles!posts_author_id_fkey (
        handle,
        display_name,
        avatar_url
      )
    `)
    .eq("slug", slug)
    .single();

  return { data, error };
}

export async function getPostsByAuthor(authorId: string): Promise<{ data: Post[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_id", authorId)
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function getDrafts(authorId: string): Promise<{ data: Post[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author_id", authorId)
    .eq("published", false)
    .order("updated_at", { ascending: false });

  return { data, error };
}

export async function deletePost(id: string): Promise<{ error: Error | null }> {
  const { error } = await supabase.from("posts").delete().eq("id", id);
  return { error };
}
