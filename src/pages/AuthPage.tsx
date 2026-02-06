import { useState, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../state/LanguageContext";
import { useAuth } from "../state/AuthContext";
import { uiText } from "../i18n/strings";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function AuthPage() {
  const { language } = useLanguage();
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const t = uiText[language];
  const query = useQuery();
  const mode = query.get("mode") === "signup" ? "signup" : "signin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Redirect if already logged in
  if (user) {
    return (
      <section className="container section">
        <div className="card">
          <h2>You're signed in!</h2>
          <p className="muted">You're already logged in.</p>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <button className="btn btn-accent" onClick={() => navigate("/editor")}>
              Go to Editor
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/")}>
              Go Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (mode === "signup") {
      if (!displayName || !handle) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }
      const { error } = await signUp(email, password, displayName, handle);
      if (error) {
        setError(error.message);
      } else {
        setSuccess("Account created! Check your email to confirm your account.");
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        navigate("/editor");
      }
    }
    setLoading(false);
  }

  return (
    <section className="container section">
      <div className="grid grid-2" style={{ alignItems: "start" }}>
        <div className="card">
          <h1 style={{ marginTop: 0 }}>
            {mode === "signup" ? t.actions.createAccount : t.actions.signIn}
          </h1>
          <p className="muted">
            {mode === "signup"
              ? "Create your writer or reader account to follow publications and publish stories."
              : "Sign in to publish, comment, and manage your subscriptions."}
          </p>

          {error && (
            <div style={{ color: "var(--color-error)", marginBottom: "1rem" }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ color: "var(--color-success)", marginBottom: "1rem" }}>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div style={{ display: "grid", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <input
                  className="input"
                  placeholder="Full name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
                <input
                  className="input"
                  placeholder="Handle (e.g. mebrahtu)"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ""))}
                  required
                />
              </div>
            )}
            <div style={{ display: "grid", gap: "0.6rem" }}>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <button
              type="submit"
              className="btn btn-accent"
              style={{ marginTop: "1rem" }}
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : mode === "signup"
                ? t.actions.createAccount
                : t.actions.signIn}
            </button>
          </form>

          <div className="muted" style={{ marginTop: "0.8rem" }}>
            {mode === "signup" ? (
              <>
                Already have an account?{" "}
                <Link to="/auth" style={{ color: "var(--color-accent)" }}>
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New here?{" "}
                <Link to="/auth?mode=signup" style={{ color: "var(--color-accent)" }}>
                  Create an account
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Why join Habesha | Substack?</h3>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.5rem" }}>
            <li>Bilingual publishing in English and Amharic.</li>
            <li>Subscriber-first newsletters with paid tiers.</li>
            <li>Reader engagement with comments and reactions.</li>
            <li>Analytics for growth, opens, and revenue.</li>
          </ul>
          <div className="card" style={{ marginTop: "1.2rem" }}>
            <h4 style={{ marginTop: 0 }}>Writer onboarding checklist</h4>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.4rem" }}>
              <li>Create your publication profile.</li>
              <li>Set free and paid tiers.</li>
              <li>Publish your first bilingual post.</li>
              <li>Invite collaborators.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
