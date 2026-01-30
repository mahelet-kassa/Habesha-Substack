import { Link, useParams } from "react-router-dom";
import { sampleAuthor, samplePosts } from "../mocks/data";
import PostCard from "../components/ui/PostCard";
import { useLanguage } from "../state/LanguageContext";

export default function ProfilePage() {
  const { authorHandle } = useParams();
  const { language } = useLanguage();
  const author = sampleAuthor;
  const posts = samplePosts;

  return (
    <section className="container section">
      <div className="card" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <img
          src={author.avatarUrl}
          alt={author.name}
          style={{ width: "120px", height: "120px", borderRadius: "50%" }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ marginTop: 0 }}>{author.name}</h1>
          <p className="muted">{language === "am" ? author.bio.am : author.bio.en}</p>
          <div className="muted">{author.subscriberCount.toLocaleString()} subscribers</div>
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }}>
            <Link to={`/subscribe/${authorHandle ?? author.handle}`} className="btn btn-accent">
              Subscribe
            </Link>
            <button className="btn btn-outline">Message</button>
          </div>
        </div>
      </div>
      <div className="section" style={{ paddingTop: "2rem" }}>
        <h2>Publication archive</h2>
        <div className="grid grid-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
