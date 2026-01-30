import { Reaction } from "../../types";

type Props = {
  reactions: Reaction[];
};

export default function ReactionBar({ reactions }: Props) {
  return (
    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
      {reactions.map((reaction) => (
        <button key={reaction.id} className="btn btn-outline">
          {reaction.emoji} {reaction.count}
        </button>
      ))}
    </div>
  );
}
