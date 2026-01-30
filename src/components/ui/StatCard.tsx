type Props = {
  label: string;
  value: string;
  hint?: string;
};

export default function StatCard({ label, value, hint }: Props) {
  return (
    <div className="card">
      <div className="muted" style={{ fontSize: "0.85rem" }}>
        {label}
      </div>
      <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>{value}</div>
      {hint ? (
        <div className="muted" style={{ marginTop: "0.4rem" }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}
