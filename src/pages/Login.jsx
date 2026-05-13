import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>

    <div className="container">
      <div className="card">
        <h1>Login</h1>

        <form>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />

          <button type="submit">Entrar</button>
        </form>

        <p>
          Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>

    </div>
  )
}

export default Login
