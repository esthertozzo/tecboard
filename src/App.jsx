
import './App.css'

// no react, componentees são FUNÇÕES, ou seja, são blocos de código que retornam um conteúdo visual (HTML) para a tela

function FormularioDeEvento(){
  return(
    <form className='form-evento'>
      <h2>Preencha para criar <u>um evento:</u></h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite o nome do evento" />
      </fieldset>

    </form>
  )

}


function App() {

  return (
   <main>
    <header>
      <img src="/logo.png" alt="Logo" />
    </header>
    <section>
      <img src="/banner.png" alt="Banner" />
    </section>
    <FormularioDeEvento />
   </main>
  )
}

export default App
