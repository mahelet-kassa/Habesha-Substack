import PostCard from "../components/ui/PostCard";
import { samplePosts } from "../mocks/data";

export default function SearchPage() {
  return (
    <section className="container section">
      <h1>Discover</h1>
      <p className="muted">Search by author, topic, or language.</p>
      <div className="grid grid-2" style={{ marginBottom: "1.5rem" }}>
        <input className="input" placeholder="Search posts or authors" />
        <div className="grid grid-3">
          <select className="select">
            <option>All languages</option>
            <option>English</option>
            <option>Amharic</option>
          </select>
          <select className="select">
            <option>All topics</option>
            <option>Culture</option>
            <option>Tech</option>
            <option>Faith</option>
          </select>
          <select className="select">
            <option>Most recent</option>
            <option>Most popular</option>
            <option>Subscriber only</option>
          </select>
        </div>
      </div>
      <div className="grid grid-3">
        {samplePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
