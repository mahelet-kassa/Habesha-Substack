export default function EditorToolbar() {
  const tools = [
    "H1",
    "H2",
    "Quote",
    "List",
    "Code",
    "Image",
    "Embed",
    "Translate",
    "Schedule",
    "Paid"
  ];

  return (
    <div className="toolbar">
      {tools.map((tool) => (
        <button key={tool} className="btn btn-outline">
          {tool}
        </button>
      ))}
    </div>
  );
}
