export default function GemsDisplay() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "#1B1B22",
        border: "1px solid #333",
        borderRadius: "999px",
        padding: "10px 18px",
        color: "#D4AF37",
        fontWeight: "bold",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>💎</span>
      <span>400 Gems</span>
    </div>
  );
}