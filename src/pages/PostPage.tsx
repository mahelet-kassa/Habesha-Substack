import { useParams } from "react-router-dom";
import { sampleComments, samplePosts, sampleReactions } from "../mocks/data";
import ReactionBar from "../components/ui/ReactionBar";
import CommentThread from "../components/ui/CommentThread";
import TagList from "../components/ui/TagList";

export default function PostPage() {
  const { postSlug } = useParams();
  const post = samplePosts.find((item) => item.slug === postSlug) ?? samplePosts[0];

  return (
    <section className="container section">
      <article className="grid" style={{ gap: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "2.4rem", marginBottom: "0.3rem" }}>{post.title}</h1>
          <p className="muted" style={{ marginTop: 0 }}>
            {post.subtitle}
          </p>
          <div className="muted" style={{ fontSize: "0.9rem" }}>
            {post.author.name} · {post.publishedAt} · {post.readingTimeMinutes} min read
          </div>
        </div>
        <img
          src={post.coverImageUrl}
          alt={post.title}
          style={{ borderRadius: "18px", maxHeight: "420px", objectFit: "cover" }}
        />
        <TagList tags={post.tags} />
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Post content</h3>
          <p>{post.body}</p>
          <p className="muted">
            This editor supports headings, quotes, code blocks, embeds, and bilingual writing.
          </p>
        </div>
        <ReactionBar reactions={sampleReactions} />
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Comments</h3>
          <CommentThread comments={sampleComments} />
        </div>
      </article>
    </section>
  );
}
