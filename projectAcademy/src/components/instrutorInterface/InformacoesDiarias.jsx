
const InformacoesDiarias = () => {
    
    return (
    <div className="direita">
        <div className="fotoAluno"></div>
        <p className="next">Próxima aula</p>
        <div className="informacoesAdicionais">
            <p className="inf">8:00 - 9:00</p>
            <p className="inf">Vitor Oliveira</p>
        </div>
        <p className="hora">Horarios Disponivéis</p>
        <div className="horariosDisponiveis">
            <ul className="horarios">
                <li>9:00 - 10:00</li>
                <li>11:00 - 12:00</li>
                <li>12:00 - 15:00</li>
                <li>16:00 - 17:00</li>
                <li>17:00 - 18:00</li>
                <li>21:00 - 22:00</li>
            </ul>
        </div>
        <button className="cancel">Cancelar</button>
        <button className="confirm">Confirmar</button>
    </div>
    )
}

export default InformacoesDiarias