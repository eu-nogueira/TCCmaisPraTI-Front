import React from 'react'
import RodapeHome from '../../components/instrutorInterface/RodapeHome'
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit'
import AulasCadastradas from '../../components/instrutorInterface/AulasCadastradas'
import GraficoPercentual from '../../components/instrutorInterface/GraficoPercentual'

function FrequenciaInstrutor() {
  return (
    <div>
    <NavBarCodeFit></NavBarCodeFit>
    <AulasCadastradas></AulasCadastradas>
    <GraficoPercentual></GraficoPercentual>
    <RodapeHome></RodapeHome>
    </div>
  )
}

export default FrequenciaInstrutor;