export default function ConsultoriaPrefeituras() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", color: "#2e2e2e" }}>
        Consultoria para Prefeituras
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem", maxWidth: "600px" }}>
        Ajudamos gestões públicas municipais a se comunicarem melhor com a população, 
        estruturarem equipes de mídia e adotarem soluções inteligentes.
      </p>
      <button
        style={{
          marginTop: "2rem",
          background: "#0070f3",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        Quero saber mais
      </button>
    </main>
  );
}
