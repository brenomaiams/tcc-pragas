import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>PragaUnifio</h1>
      <button style={styles.botao} onClick={() => navigate("/registro")}>
        Registro
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#0a3a07",
  },
  botao: {
    padding: "14px 28px",
    fontSize: "16px",
    backgroundColor: "#0a3a07",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  },
};
