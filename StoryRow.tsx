import StoryCard from "./StoryCard";

export default function StoryRow() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "0 40px",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "24px",
        }}
      >
        Trending Dramas
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "12px",
        }}
      >
        <StoryCard title="The Billionaire's Secret" genre="Romance" />
        <StoryCard title="Bloodline Revenge" genre="Drama" />
        <StoryCard title="The Last Heir" genre="Mystery" />
        <StoryCard title="Falling for My Enemy" genre="Romance" />
      </div>
    </section>
  );
}