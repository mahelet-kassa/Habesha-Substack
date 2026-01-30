type Props = {
  tags: string[];
};

export default function TagList({ tags }: Props) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {tags.map((tag) => (
        <span key={tag} className="tag">
          #{tag}
        </span>
      ))}
    </div>
  );
}
