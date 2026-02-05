import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../state/LanguageContext";
import { uiText } from "../i18n/strings";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function AuthPage() {
  const { language } = useLanguage();
  const t = uiText[language];
  const query = useQuery();
  const mode = query.get("mode") === "signup" ? "signup" : "signin";

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
          {mode === "signup" && (
            <div style={{ display: "grid", gap: "0.6rem", marginBottom: "0.6rem" }}>
              <input className="input" placeholder="Full name" />
              <input className="input" placeholder="Handle (e.g. mebrahtu)" />
            </div>
          )}
          <div style={{ display: "grid", gap: "0.6rem" }}>
            <input className="input" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
          </div>
          <button className="btn btn-accent" style={{ marginTop: "1rem" }}>
            {mode === "signup" ? t.actions.createAccount : t.actions.signIn}
          </button>
          <div className="muted" style={{ marginTop: "0.8rem" }}>
            {mode === "signup"
              ? "Already have an account? Switch to sign in."
              : "New here? Create an account to start writing."}
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
