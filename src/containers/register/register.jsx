import React, { useState } from "react";

export default function Registro() {
  const [formData, setFormData] = useState({
    email: "",
    usuario: "",
    senha: "",
    confirmacaoSenha: "",
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

    if (!formData.email || !formData.usuario || !formData.senha || !formData.confirmacaoSenha) {
      setErro("Todos os campos são obrigatórios.");
      return;
    }

    if (formData.senha !== formData.confirmacaoSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    setErro("");
    console.log("Dados enviados:", formData);
    alert("Registro realizado com sucesso!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Cadastro</h2>
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
          type="text"
          name="usuario"
          placeholder="Usuário"
          value={formData.usuario}
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

        <input
          type="password"
          name="confirmacaoSenha"
          placeholder="Confirme sua senha"
          value={formData.confirmacaoSenha}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.botao}>Registrar</button>
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
    fontFamily: "'Poppins'",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  },
  titulo: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "##0a3a07",
    fontFamily: "'Poppins'" 
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
    fontFamily: "'Poppins'"
  },
  botao: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#0a3a07", 
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    fontFamily: "'Poppins'"
  },
  erro: {
    color: "#D62828",
    fontSize: "14px",
    backgroundColor: "#FFE5E5",
    padding: "8px",
    borderRadius: "6px",
  },
};
