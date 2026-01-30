import { Link } from "react-router-dom";
import { Post } from "../../types";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <article className="card" style={{ display: "grid", gap: "0.75rem" }}>
      <img
        src={post.coverImageUrl}
        alt={post.title}
        style={{ borderRadius: "12px", height: "200px", objectFit: "cover" }}
      />
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <span className="pill">{post.visibility === "paid" ? "Paid" : "Free"}</span>
        <span className="pill">{post.language.toUpperCase()}</span>
      </div>
      <div>
        <h3 style={{ margin: "0 0 0.3rem" }}>{post.title}</h3>
        <p className="muted" style={{ margin: 0 }}>
          {post.subtitle}
        </p>
      </div>
      <p style={{ margin: 0 }}>{post.excerpt}</p>
      <div className="muted" style={{ fontSize: "0.85rem" }}>
        {post.author.name} · {post.readingTimeMinutes} min read · {post.publishedAt}
      </div>
      <Link to={`/@${post.author.handle}/${post.slug}`} className="btn btn-outline">
        Read
      </Link>
    </article>
  );
}
