import React from 'react'
import "./AulaInstrutor.css"
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit'
import RodapeHome from '../../components/instrutorInterface/RodapeHome'
import CadastrarNovaAula from '../../components/instrutorInterface/CadastrarNovaAula'
import AulasCadastradas from '../../components/instrutorInterface/AulasCadastradas'

function AulaInstrutor() {
  return (
    <div>
    <NavBarCodeFit></NavBarCodeFit>
    <AulasCadastradas></AulasCadastradas>
    <CadastrarNovaAula></CadastrarNovaAula>
    <RodapeHome></RodapeHome>
    </div>
  )
}

export default AulaInstrutor