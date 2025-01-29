
const InformacoesDiarias = () => {
    
    return (
    <div class="direita">
        <div className="fotoAluno"></div>
        <p class="next">Próxima aula</p>
        <div class="informacoesAdicionais">
            <p class="inf">8:00 - 9:00</p>
            <p class="inf">Vitor Oliveira</p>
        </div>
        <p class="hora">Horarios Disponivéis</p>
        <div class="horariosDisponiveis">
            <ul class="horarios">
                <li>9:00 - 10:00</li>
                <li>11:00 - 12:00</li>
                <li>12:00 - 15:00</li>
                <li>16:00 - 17:00</li>
                <li>17:00 - 18:00</li>
                <li>21:00 - 22:00</li>
            </ul>
        </div>
        <button class="cancel">Cancelar</button>
        <button class="confirm">Confirmar</button>
    </div>
    )
}

export default InformacoesDiarias