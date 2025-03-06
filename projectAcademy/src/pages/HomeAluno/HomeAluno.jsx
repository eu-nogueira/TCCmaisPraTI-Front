import React from 'react';
import "./HomeAluno.css";
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit';
import RodapeHome from '../../components/instrutorInterface/RodapeHome';
import CadastrarNovaAula from '../../components/instrutorInterface/CadastrarNovaAula';
import AulasDoDia from '../../components/instrutorInterface/AulasDoDia';

function HomeAluno() {
  return (
    <div className="home-aluno-container">
      <NavBarCodeFit />
      
      <div className="banner">
        <h1>SEJA MUITO <span className="highlight">BEM-VINDO</span></h1>
        <button className="btn">Ver mais Treinos</button>
      </div>
      
      <AulasDoDia />
      
      <RodapeHome />
    </div>
  );
}

export default HomeAluno;
