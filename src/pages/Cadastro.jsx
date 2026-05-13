import './Cadastro.css'
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="cadastro">
      <h1>Cadastro</h1>
    

    <div className="container">
      <div className="card">
        <h1>Cadastro</h1>

        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />

          <button type="submit">Cadastrar</button>
        </form>

        <p>
          Já possui conta? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  
    </div>
  )
}

export default Cadastro
