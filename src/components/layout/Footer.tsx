import { useLanguage } from "../../state/LanguageContext";
import { uiText } from "../../i18n/strings";

export default function Footer() {
  const { language } = useLanguage();
  const t = uiText[language];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 0",
        marginTop: "3rem"
      }}
    >
      <div className="container" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "220px" }}>
          <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Habesha | Substack</div>
          <p className="muted">{t.footer.tagline}</p>
        </div>
        <div style={{ flex: 1, minWidth: "180px" }}>
          <div style={{ fontWeight: 600, marginBottom: "0.4rem" }}>{t.footer.product}</div>
          <div className="muted">{t.footer.features}</div>
          <div className="muted">{t.footer.pricing}</div>
          <div className="muted">{t.footer.security}</div>
        </div>
        <div style={{ flex: 1, minWidth: "180px" }}>
          <div style={{ fontWeight: 600, marginBottom: "0.4rem" }}>{t.footer.company}</div>
          <div className="muted">{t.footer.about}</div>
          <div className="muted">{t.footer.careers}</div>
          <div className="muted">{t.footer.contact}</div>
        </div>
      </div>
    </footer>
  );
}
