import { useState } from "react";
import './Cadastro.css'

const Cadastro = () => {
  // Gerenciando o estado dos inputs com o hook useState
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeUsuario: nome,
          email: email,
          senha: senha,
        }),
      });

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        limparCampos();
      } else {
        console.error("Erro ao cadastrar.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  // Função para limpar os campos do formulário
  const limparCampos = () => {
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <div className="cadastro2">
      <div className="left">
        <h1>CODE<span>FIT</span></h1>
        <p>Academia moderna, com treinos personalizados, ambiente motivador e equipe dedicada para
          transformar seu corpo e mente!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="formCadas">
      <h3 className="text-black"><b>CADASTRO</b></h3>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit" className="bg-primary text-white">CADASTRE-SE</button>
      </form>
    </div>
  );
};

export default Cadastro;
