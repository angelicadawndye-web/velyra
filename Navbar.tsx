import GemsDisplay from "../ui/GemsDisplay";

export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 48px",
        background: "#0B0B0F",
        borderBottom: "1px solid #222",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          fontSize: "2rem",
          letterSpacing: "3px",
          margin: 0,
        }}
      >
        VELYRA
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "24px",
            color: "#ddd",
          }}
        >
          <span>Home</span>
          <span>Browse</span>
          <span>My List</span>
          <span>Profile</span>
        </nav>

        <GemsDisplay />
      </div>
    </header>
  );
}