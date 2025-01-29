import './Home.css'
import NavBarCodeFit from '../../components/instrutorInterface/NavBarCodeFit'
import TarefasDiarias from '../../components/instrutorInterface/TarefasDiarias'
import InformacoesDiarias from '../../components/instrutorInterface/InformacoesDiarias'
import RodapeHome from '../../components/instrutorInterface/RodapeHome'

function Home() {
  return (
    <div>
    <NavBarCodeFit></NavBarCodeFit>
    <TarefasDiarias></TarefasDiarias>
    <InformacoesDiarias></InformacoesDiarias>
    <RodapeHome></RodapeHome>
    </div>
  )
}

export default Home
