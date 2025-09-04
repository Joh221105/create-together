const Landing = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.5rem",
            borderRadius: "8px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Work
        </button>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.5rem",
            borderRadius: "8px",
            border: "none",
            background: "#28a745",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Landing;