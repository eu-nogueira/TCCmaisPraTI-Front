import React from 'react'

function CadastrarNovaAula() {
  return (
    <div>
        <form class="newClass">
                <h3 class="title">CADASTRAR NOVA AULA</h3>
                <label for="name">Nome:</label>
                <input type="text" class="nome"/> <br />
                <label for="hour">Horário:</label>
                <input type="text" class="hour"/>
                <label for="date">Data:</label>
                <input type="date"/> <br />
                <label for="email">E-mail:</label>
                <input type="email" name="" class="email"/> <br />
                <label for="descri">Descrição:</label>
                <textarea name="" class="descri"></textarea> <br />
                <button class='cadastro'>Cadastrar</button>
            </form>
    </div>
  )
}

export default CadastrarNovaAula
