import EditorToolbar from "../components/ui/EditorToolbar";
import { useLanguage } from "../state/LanguageContext";
import { uiText } from "../i18n/strings";

export default function EditorPage() {
  const { language } = useLanguage();
  const t = uiText[language];

  return (
    <section className="container section">
      <h1>Editor</h1>
      <p className="muted">
        Drafts autosave, support bilingual writing, embeds, and subscriber-only sections.
      </p>
      <div className="card">
        <EditorToolbar />
        <div className="grid grid-2">
          <div>
            <label style={{ fontWeight: 600 }}>English</label>
            <input className="input" placeholder="Post title (English)" />
            <textarea className="textarea" placeholder="Short subtitle (English)" />
            <div className="editor" contentEditable suppressContentEditableWarning>
              Start writing in English...
            </div>
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>አማርኛ</label>
            <input className="input" placeholder="ርዕስ (አማርኛ)" />
            <textarea className="textarea" placeholder="ንክኪ ርዕስ (አማርኛ)" />
            <div className="editor" contentEditable suppressContentEditableWarning>
              በአማርኛ ጀምሩ ይጻፉ...
            </div>
          </div>
        </div>
        <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
          <div>
            <label style={{ fontWeight: 600 }}>Visibility</label>
            <select className="select">
              <option>Free post</option>
              <option>Paid subscribers only</option>
              <option>Paid + teaser preview</option>
            </select>
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>Schedule</label>
            <input className="input" type="datetime-local" />
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
          <button className="btn btn-outline">{t.actions.saveDraft}</button>
          <button className="btn btn-outline">{t.actions.preview}</button>
          <button className="btn btn-outline">{t.actions.export} PDF</button>
          <button className="btn btn-outline">{t.actions.export} Markdown</button>
          <button className="btn btn-outline">{t.actions.schedule}</button>
          <button className="btn btn-accent">{t.actions.publish}</button>
        </div>
      </div>
    </section>
  );
}
