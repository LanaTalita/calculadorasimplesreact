
function Forms() {
  const handleSubmit=(e) => {
     e.preventDefault();
     alert("Formulário Enviado! Entraremos em contato em breve.")
  }
  
  return(
  <form onSubmit={handleSubmit}> 
<h1>Fale conosco:</h1>
    <input type="text" name="Nome" placeholder="Digite o seu nome" />
    <input type="text" name="Email" placeholder="fulano@email.com" />
    <input type="text" name="telefone" placeholder="(xx)xxxxx-xxx" />
    <p>Como podemos entrar em contato com você?</p>
    <select name="contato">
      <option value="email">Email</option>
      <option value="celular">Ligação</option>
      <option value="whatsapp">Whatsapp</option>
      <option value="telegram">Telegram</option>
    </select>
    <p>Escolha o melhor período para que possamos entrar em contato:</p>
    <div className="radios">
      <label><input type="radio" value="manha" name="turno"/>Manhã</label>
      <label><input type="radio" value="tarde" name="turno"/>Tarde</label>
      <label> <input type="radio" value="noite" name="turno"/>Noite</label>

      <textarea name="mensagem" placeholder="Como podemos ajudá-lo(a)?"></textarea>
    </div>
    <button type="text">Enviar</button>
  </form>
  )
}

export default Forms