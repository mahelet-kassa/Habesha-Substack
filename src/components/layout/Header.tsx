import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../state/LanguageContext";
import { useTheme } from "../../state/ThemeContext";
import { uiText } from "../../i18n/strings";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { toggleTheme, theme } = useTheme();
  const t = uiText[language];

  return (
    <header className="container" style={{ padding: "1.4rem 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap"
        }}
      >
        <Link to="/" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
          Habesha | Substack
        </Link>
        <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <NavLink to="/" className="muted">
            {t.nav.home}
          </NavLink>
          <NavLink to="/editor" className="muted">
            {t.nav.write}
          </NavLink>
          <NavLink to="/search" className="muted">
            {t.nav.discover}
          </NavLink>
          <NavLink to="/analytics" className="muted">
            {t.nav.analytics}
          </NavLink>
        </nav>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <Link to="/auth" className="btn btn-outline">
            {t.actions.signIn}
          </Link>
          <Link to="/auth?mode=signup" className="btn btn-outline">
            {t.actions.createAccount}
          </Link>
          <button
            className="btn btn-outline"
            onClick={() => setLanguage(language === "en" ? "am" : "en")}
          >
            {language === "en" ? "አማ" : "EN"}
          </button>
          <button className="btn btn-outline" onClick={toggleTheme}>
            {theme === "dark" ? t.actions.light : t.actions.dark}
          </button>
          <Link to="/editor" className="btn btn-accent">
            {t.actions.startWriting}
          </Link>
        </div>
      </div>
    </header>
  );
}
