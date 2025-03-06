const InformacoesDiarias = () => {
    const diaDaSemana = new Date().getDay();
    let srcFoto = "";

    if (diaDaSemana === 1) { 
        srcFoto = "url_da_foto_de_treino_de_segunda"; 
    } else if (diaDaSemana === 2) { 
        srcFoto = "url_da_foto_de_treino_de_terca";
    }
     else if (diaDaSemana === 3) { 
        srcFoto = "url_da_foto_de_treino_de_quarta";
    }
     else if (diaDaSemana === 4) { 
        srcFoto = "url_da_foto_de_treino_de_quinta";
    }
     else if (diaDaSemana === 5) { 
        srcFoto = "url_da_foto_de_treino_de_sexta";
    }
     else if (diaDaSemana === 6) { 
        srcFoto = "url_da_foto_de_treino_de_sabado";
    }
     else if (diaDaSemana === 0) { 
        srcFoto = "url_da_foto_de_treino_de_domingo";
    }

    return (
        <div className="direita">
            <div className="fotoAluno">
                <img src={srcFoto} alt="Foto de exemplo treino" />
            </div>
            <p className="next">Próxima aula</p>
            <div className="informacoesAdicionais">
                <p className="inf">8:00 - 9:00</p>
                <p className="inf">Vitor Oliveira</p>
            </div>
            <div className="button">
                <p className="cancel">CANCELAR</p>
                <p className="confirm">CONFIRMAR</p>
            </div>
        </div>
    );
}

export default InformacoesDiarias;
