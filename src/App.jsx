import { useState } from "react";

function FormularioCadastro() {
  const [nome] = useState();
  const [email] = useState();

  return (
    <form>
      <label htmlFor="nome">Seu nome:</label>
      <input type="text" id="nome" value={nome} onChange={event => {
        {nome}
      }} />
      <br />
      <label htmlFor="email">Seu e-mail:</label>
      <input type="email" id="email" value={email} onChange={event => {
        {email}
      }} />
    </form>
  );
}

export default function App() {
  return (
    <div className="container">
      <h2>Cadastre-se</h2>
      <FormularioCadastro />
    </div>
  );
}