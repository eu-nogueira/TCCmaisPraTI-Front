import React from 'react'
import "./AulaInstrutor.css"
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit'
import RodapeHome from '../../components/instrutorInterface/RodapeHome'
import CadastrarNovaAula from '../../components/instrutorInterface/CadastrarNovaAula'
import AulasDoDia from '../../components/instrutorInterface/AulasDoDia'

function AulaInstrutor() {
  return (
    <div>
    <NavBarCodeFit></NavBarCodeFit>
    <AulasDoDia></AulasDoDia>
    <CadastrarNovaAula></CadastrarNovaAula>
    <RodapeHome></RodapeHome>
    </div>
  )
}

export default AulaInstrutor