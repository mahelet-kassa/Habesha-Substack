type Props = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export default function SectionHeader({ title, subtitle, action }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
        marginBottom: "1.5rem"
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>{title}</h2>
        {subtitle ? (
          <p style={{ margin: "0.4rem 0 0", color: "var(--muted)" }}>{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
