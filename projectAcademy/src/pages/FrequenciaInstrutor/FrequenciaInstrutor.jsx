import React from 'react'
import RodapeHome from '../../components/instrutorInterface/RodapeHome'
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit'
import BuscarAluno from '../../components/instrutorInterface/BuscarAluno'
import GraficoPercentual from '../../components/instrutorInterface/GraficoPercentual'

function FrequenciaInstrutor() {
  return (
    <div>
    <NavBarCodeFit></NavBarCodeFit>
    <BuscarAluno></BuscarAluno>
    <GraficoPercentual></GraficoPercentual>
    <RodapeHome></RodapeHome>
    </div>
  )
}

export default FrequenciaInstrutor;