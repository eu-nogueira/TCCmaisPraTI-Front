import React from 'react';
import "./HomeAluno.css";
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit';
import RodapeHome from '../../components/instrutorInterface/RodapeHome';
import CadastrarNovaAula from '../../components/instrutorInterface/CadastrarNovaAula';
import TarefasDiarias from '../../components/instrutorInterface/TarefasDiarias';
import Calendario from './Calendario';

function HomeAluno() {
  return (
    <div className="home-aluno-container">
      <NavBarCodeFit />
      
      <div className="banner">
        <div className="esquer">
          <TarefasDiarias />
        </div>
        <div className="direi">
          <h1>SEJA MUITO <span className="highlight">BEM-VINDO</span></h1>
          <button className="btn">Ver mais Treinos</button>
          <Calendario />
        </div>
      </div>
      
      <RodapeHome />
    </div>
  );
}

export default HomeAluno;
