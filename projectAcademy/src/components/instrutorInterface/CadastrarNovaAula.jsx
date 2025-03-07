import React from 'react'

function CadastrarNovaAula() {
  
    class Aula {
      constructor(nome, hour, data, email, descricao) {
        this.nome = nome;
        this.hour = hour;
        this.data = data;
        this.email = email;
        this.descricao = descricao;
      }
    }

    function cadastrarAula(e) {
    e.preventDefault()
    let nome = document.querySelector('.nome').value
    let hour = document.querySelector('.hour').value
    let data = document.querySelector('.data').value
    let email = document.querySelector('.email').value
    let descricao = document.querySelector('.descri').value
    let novaAula = new Aula(nome, hour, data, email, descricao)

      alert("Aula cadastrada com sucesso!")
      console.log(novaAula)
    }
    
    return (
      <div>
        <form className="newClass">
                <h3 className="title">CADASTRAR NOVA AULA</h3>
                <label htmlFor="name">Nome: </label>
                <input type="text" className="nome"/> <br />
                <label htmlFor="hour">Horário: </label>
                <input type="text" className="hour"/>
                <label htmlFor="date">Data: </label>
                <input type="date" className='data'/> <br />
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="" className="email"/> <br />
                <label htmlFor="descri">Descrição: </label>
                <textarea className="descri"></textarea> <br />
                <p className='cadastroAula' onClick={cadastrarAula}>Cadastrar</p>
            </form>
    </div>
  )
}
  
  export default CadastrarNovaAula
  