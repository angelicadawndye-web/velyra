type StoryCardProps = {
  title: string;
  genre: string;
};

export default function StoryCard({
  title,
  genre,
}: StoryCardProps) {
  return (
    <div
      style={{
        width: "220px",
        background: "#1A1A1F",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
    >
      <div
        style={{
          height: "320px",
          background:
            "linear-gradient(135deg, #3A2F0B, #D4AF37)",
        }}
      />

      <div style={{ padding: "16px" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.2rem",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#B0B0B0",
            marginTop: "8px",
          }}
        >
          {genre}
        </p>
      </div>
    </div>
  );
}