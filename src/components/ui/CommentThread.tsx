import { Comment } from "../../types";

type Props = {
  comments: Comment[];
};

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1rem" }}>
      <div style={{ fontWeight: 600 }}>{comment.authorName}</div>
      <p style={{ margin: "0.3rem 0" }}>{comment.content}</p>
      <div className="muted" style={{ fontSize: "0.8rem" }}>
        {comment.createdAt}
      </div>
      {comment.replies.length > 0 && (
        <div style={{ marginTop: "0.8rem", display: "grid", gap: "0.8rem" }}>
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentThread({ comments }: Props) {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
