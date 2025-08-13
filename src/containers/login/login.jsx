import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.senha) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }
    setErro("");
    console.log("Dados enviados:", formData);
    alert("Login realizado com sucesso!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.arrow} onClick={() => navigate("/")}>
        ←
      </div>

      <h2 style={styles.titulo}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {erro && <p style={styles.erro}>{erro}</p>}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.botao}>Entrar</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    fontFamily: "'Poppins', sans-serif",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    position: "relative",
  },
  arrow: {
    position: "absolute",
    top: "10px",
    left: "34px",
    fontSize: "24px",
    cursor: "pointer",
    color: "#0a3a07",
    userSelect: "none",
  },
  titulo: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#0a3a07",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
    outline: "none",
    backgroundColor: "#F9F9F9",
  },
  botao: {
    marginTop: "18px",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#0a3a07",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  },
  erro: {
    color: "#D62828",
    fontSize: "14px",
    backgroundColor: "#FFE5E5",
    padding: "8px",
    borderRadius: "6px",
  },
};
