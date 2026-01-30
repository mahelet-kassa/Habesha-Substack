import SectionHeader from "../components/ui/SectionHeader";
import PostCard from "../components/ui/PostCard";
import TagList from "../components/ui/TagList";
import { samplePosts } from "../mocks/data";
import { useLanguage } from "../state/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const tags = ["culture", "faith", "tech", "policy", "writing", "community"];

  return (
    <>
      <section className="container section">
        <div className="grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "2.6rem", marginBottom: "0.8rem" }}>
              Habesha | Substack
            </h1>
            <p className="muted" style={{ fontSize: "1.1rem" }}>
              Bilingual publishing for Ethiopian voices. Launch newsletters, grow subscribers, and
              publish in English and Amharic.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.2rem" }}>
              <button className="btn btn-accent">Start a publication</button>
              <button className="btn btn-outline">Explore writers</button>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Featured Publication</h3>
            <p className="muted">
              Habesha Futures · 8,240 subscribers · Weekly bilingual dispatches.
            </p>
            <TagList tags={tags.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionHeader
          title="Featured posts"
          subtitle="Editorial picks across languages."
          action={<span className="pill">Language: {language.toUpperCase()}</span>}
        />
        <div className="grid grid-3">
          {samplePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHeader
          title="Discover by topic"
          subtitle="Follow tags to personalize your feed."
        />
        <TagList tags={tags} />
      </section>

      <section className="container section">
        <div className="card" style={{ display: "grid", gap: "0.8rem" }}>
          <h3 style={{ margin: 0 }}>Weekly bilingual newsletter</h3>
          <p className="muted" style={{ margin: 0 }}>
            Get curated Amharic and English essays in your inbox every Friday.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <input className="input" placeholder="you@example.com" />
            <button className="btn btn-accent">Subscribe free</button>
          </div>
        </div>
      </section>
    </>
  );
}
