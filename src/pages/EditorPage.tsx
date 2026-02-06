import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditorToolbar from "../components/ui/EditorToolbar";
import { useLanguage } from "../state/LanguageContext";
import { useAuth } from "../state/AuthContext";
import { uiText } from "../i18n/strings";
import { createPost } from "../services/posts";

type Visibility = "free" | "paid" | "teaser";

export default function EditorPage() {
  const { language } = useLanguage();
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const t = uiText[language];

  const [titleEn, setTitleEn] = useState("");
  const [titleAm, setTitleAm] = useState("");
  const [subtitleEn, setSubtitleEn] = useState("");
  const [subtitleAm, setSubtitleAm] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [contentAm, setContentAm] = useState("");
  const [visibility, setVisibility] = useState<Visibility>("free");
  const [scheduledAt, setScheduledAt] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Show loading state while auth is resolving
  if (loading) {
    return (
      <section className="container section">
        <div className="card">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="container section">
        <div className="card">
          <h2>Sign in to write</h2>
          <p className="muted">You need to be signed in to create and publish posts.</p>
          <button className="btn btn-accent" onClick={() => navigate("/auth")}>
            {t.actions.signIn}
          </button>
        </div>
      </section>
    );
  }

  async function handleSaveDraft() {
    if (!user) return;
    setSaving(true);
    setError(null);
    setSuccess(null);

    const { error: saveError } = await createPost({
      author_id: user.id,
      title_en: titleEn || "Untitled",
      title_am: titleAm || "ርዕስ የለም",
      subtitle_en: subtitleEn || null,
      subtitle_am: subtitleAm || null,
      content_en: contentEn,
      content_am: contentAm,
      visibility,
      published: false,
      scheduled_at: scheduledAt || null,
    });

    setSaving(false);
    if (saveError) {
      setError(saveError.message);
      alert("Save draft failed: " + saveError.message);
    } else {
      setSuccess("Draft saved!");
    }
  }

  async function handlePublish() {
    alert("Publish clicked! Checking state...");

    if (!user) {
      alert("No user found - please sign in");
      return;
    }

    if (!profile) {
      const msg = "Profile not found. Please sign out and sign up again with a name and handle.";
      setError(msg);
      alert(msg);
      return;
    }

    if (!titleEn && !titleAm) {
      const msg = "Please enter a title in at least one language.";
      setError(msg);
      alert(msg);
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error: createError } = await createPost({
        author_id: user.id,
        title_en: titleEn || "Untitled",
        title_am: titleAm || "ርዕስ የለም",
        subtitle_en: subtitleEn || null,
        subtitle_am: subtitleAm || null,
        content_en: contentEn,
        content_am: contentAm,
        visibility,
        published: true,
        scheduled_at: scheduledAt || null,
      });

      setSaving(false);

      if (createError) {
        const msg = `Failed to publish: ${createError.message}`;
        console.error("Publish error:", createError);
        setError(msg);
        alert(msg);
        return;
      }

      if (data) {
        setSuccess("Published successfully!");
        alert("Published successfully! Redirecting...");
        navigate(`/@${profile.handle}/${data.slug}`);
      } else {
        const msg = "Post was created but no data returned. Check Supabase dashboard.";
        setError(msg);
        alert(msg);
      }
    } catch (err: any) {
      setSaving(false);
      const msg = `Unexpected error: ${err.message || String(err)}`;
      console.error("Unexpected publish error:", err);
      setError(msg);
      alert(msg);
    }
  }

  return (
    <section className="container section">
      <h1>Editor</h1>
      <p className="muted">
        Drafts autosave, support bilingual writing, embeds, and subscriber-only sections.
      </p>

      {/* Debug info */}
      <div style={{ fontSize: "0.8rem", padding: "0.5rem", background: "var(--color-surface)", borderRadius: "8px", marginBottom: "1rem" }}>
        <strong>Debug:</strong> user={user ? user.email : "none"} | profile={profile ? profile.handle : "none"} | supabase={import.meta.env.VITE_SUPABASE_URL ? "connected" : "NO ENV VARS"}
      </div>

      {error && (
        <div className="card" style={{ background: "#c0392b", color: "white", marginBottom: "1rem", padding: "1rem" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      {success && (
        <div className="card" style={{ background: "#27ae60", color: "white", marginBottom: "1rem", padding: "1rem" }}>
          {success}
        </div>
      )}

      <div className="card">
        <EditorToolbar />
        <div className="grid grid-2">
          <div>
            <label style={{ fontWeight: 600 }}>English</label>
            <input
              className="input"
              placeholder="Post title (English)"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="Short subtitle (English)"
              value={subtitleEn}
              onChange={(e) => setSubtitleEn(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="Start writing in English..."
              value={contentEn}
              onChange={(e) => setContentEn(e.target.value)}
              style={{ minHeight: "200px" }}
            />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>አማርኛ</label>
            <input
              className="input"
              placeholder="ርዕስ (አማርኛ)"
              value={titleAm}
              onChange={(e) => setTitleAm(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="ንክኪ ርዕስ (አማርኛ)"
              value={subtitleAm}
              onChange={(e) => setSubtitleAm(e.target.value)}
            />
            <textarea
              className="textarea"
              placeholder="በአማርኛ ጀምሩ ይጻፉ..."
              value={contentAm}
              onChange={(e) => setContentAm(e.target.value)}
              style={{ minHeight: "200px" }}
            />
          </div>
        </div>
        <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
          <div>
            <label style={{ fontWeight: 600 }}>Visibility</label>
            <select
              className="select"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value as Visibility)}
            >
              <option value="free">Free post</option>
              <option value="paid">Paid subscribers only</option>
              <option value="teaser">Paid + teaser preview</option>
            </select>
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>Schedule</label>
            <input
              className="input"
              type="datetime-local"
              value={scheduledAt}
              onChange={(e) => setScheduledAt(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            marginTop: "1.5rem",
            flexWrap: "wrap"
          }}
        >
          <button
            className="btn btn-outline"
            onClick={handleSaveDraft}
            disabled={saving}
          >
            {saving ? "Saving..." : t.actions.saveDraft}
          </button>
          <button className="btn btn-outline">{t.actions.preview}</button>
          <button className="btn btn-outline">{t.actions.export} PDF</button>
          <button className="btn btn-outline">{t.actions.export} Markdown</button>
          <button className="btn btn-outline">{t.actions.schedule}</button>
          <button
            className="btn btn-accent"
            onClick={handlePublish}
            disabled={saving}
          >
            {saving ? "Publishing..." : t.actions.publish}
          </button>
        </div>
      </div>
    </section>
  );
}
