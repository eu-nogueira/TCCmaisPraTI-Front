import React from 'react';
import './Calendario.css';

const diasDaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

function gerarDiasDoMes() {
  const dias = [];
  for (let i = 1; i <= 31; i++) {
    dias.push(i);
  }
  return dias;
}

function Calendario() {
  const diasDoMes = gerarDiasDoMes();
  const today = new Date().getDate();
  const primeiroDiaDoMes = 6;

  return (
    <div className="calendario-container">
      <div className="dias-semana">
        {diasDaSemana.map(dia => (
          <div key={dia} className="dia-semana">{dia}</div>
        ))}
      </div>
      <div className="dias-mes">
        {Array(primeiroDiaDoMes).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="dia vazio" />
        ))}
        {diasDoMes.map(dia => (
          <div key={dia} className={`dia ${dia === today ? 'hoje' : ''}`}>{dia}</div>
        ))}
      </div>
    </div>
  );
}

export default Calendario;
