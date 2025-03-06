import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBarCodeFit = () => {
  const savedModoEscuro = localStorage.getItem("modoEscuro");
  const [modoEscuro, setModoEscuro] = useState(savedModoEscuro ? JSON.parse(savedModoEscuro) : false);

  const mudaParaEscuro = () => {
    const novoModoEscuro = !modoEscuro; 
    setModoEscuro(novoModoEscuro);
    localStorage.setItem("modoEscuro", JSON.stringify(novoModoEscuro));
  };
let button = document.querySelector('.botao')
  useEffect(() => {
    if (modoEscuro) {
      document.body.classList.add("modo-escuro");
     
    } else {
      document.body.classList.remove("modo-escuro");
     
    }
  }, [modoEscuro]);

    if(modoEscuro) {
      
    }

  return (
    <div className="header">
      <ul className="navbar">
        <h2><Link to="/">CODE<span className="logo">FIT</span></Link></h2>
        <li className="menu"><Link to="/">HOME</Link></li>
        <li className="menu"><Link to="/aulaInstrutor">AULAS</Link></li>
        <li className="menu"><Link to="/frequenciaInstrutor">FREQUÊNCIAS</Link></li>
        <button onClick={mudaParaEscuro} className="botao">☾</button>
        <li>DEFAULT[NAME]</li>
        <li className="sair">SAIR</li>
      </ul>
    </div>
  );
};

export default NavBarCodeFit;