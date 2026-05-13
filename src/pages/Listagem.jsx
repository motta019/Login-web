import "./Listagem.css";
import { Link } from "react-router-dom";

function Listagem() {
  const usuarios = [
    {
      id: 1,
      nome: "Matheus",
      email: "matheus@gmail.com",
    },
    {
      id: 2,
      nome: "Maria",
      email: "maria@gmail.com",
    },
    {
      id: 3,
      nome: "João",
      email: "joao@gmail.com",
    },
  ];

  return (
    <div className="container">
      <div className="card-lista">
        <h1>Listagem de Usuários</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/">
          <button>Sair</button>
        </Link>
      </div>
    </div>
  );
}

export default Listagem;