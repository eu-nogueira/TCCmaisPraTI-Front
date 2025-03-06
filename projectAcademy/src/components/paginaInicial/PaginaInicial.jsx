
import { useNavigate } from "react-router-dom"
import "./PaginaInicial.css"
import CODEFIT from "../../images/CODEFIT.png"
function PaginaInicial() {
    const navigate = useNavigate();
    const irParaLogin = () => {
        navigate("/login"); 
      };

    const irParaCadastroDeUsuario = () => {
        navigate("/Cadastro"); 

      };

    return(
    <div className="con"> 
        <nav className="navbar navbar-expand bg-dark">
            <div className="container-fluid">
                    <a className="navbar-brand">
                    <img src={CODEFIT} className="imgCodeFit"/>
                    </a>
                <ul className="navbar-nav">

                    <li className="nav-item m">
                        Primeiro acesso? <strong onClick={irParaCadastroDeUsuario}>cadastre-se</strong> 
                    </li>

                </ul>

            </div>
        </nav>

        <div className="codeFit">
            <img src={CODEFIT}/>

        </div>


        
        <div className="botoes">

            <button onClick={irParaLogin}>area do aluno</button>
            <button onClick={irParaLogin}>area do instrutor</button>
        </div>
        
        
    </div>
    )
  
    

}

export default PaginaInicial