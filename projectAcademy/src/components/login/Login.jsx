import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento

import "./Login.css";
import imageGoogle from "../../images/google.png";

function Login() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o reload da página

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nomeUsuario, senha }), // Envia os dados em formato JSON
      });

      if (!response.ok) {
        throw new Error("Usuário ou senha inválidos!"); // Dispara erro se não for 200 OK
      }

      const token = await response.text(); // O backend retorna o token JWT como texto

      localStorage.setItem("token", token); // Salva o token no localStorage

      console.log("Login bem-sucedido! Token:", token);
      navigate("/home"); // Redireciona para a página protegida
    } catch (error) {
      console.error("Erro ao autenticar:", error.message);
      setErro(error.message);
    }
  };

  return (
    <div className="login">
      <div className="left">
        <h1>CODE<span>FIT</span></h1>
        <p>Academia moderna, com treinos personalizados, ambiente motivador e equipe dedicada para
          transformar seu corpo e mente!
        </p>
      </div>
    <div className="c d-flex justify-content-center align-items-center min-vh-100">
      <main className=" m-auto form-container">
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal text-black">LOGIN</h1>

          {erro && <p className="text-danger">{erro}</p>} {/* Exibe erro se houver */}

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nome de usuário"
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
            />
            <label htmlFor="floatingInput">Nome do Usuário</label>
          </div>

          <div className="form-floating my-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>

          <button className="btn btn-primary w-100 h-100" type="submit">
            Entrar
          </button>

          <button className="btn-google w-100 mt-2 text-black bg-white">
            <img src={imageGoogle} alt="Google" /> <b>Entrar com o Google</b>
          </button>
        </form>
      </main>
    </div>
    </div>
  );
}

export default Login;