/* eslint-disable react/prop-types */
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./MyForm.module.css";

const MyForm = ({ user }) => {
  // 6 - controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : null);
  const [email, setEmail] = useState(user ? user.email : null);
  const [bio, setBio] = useState(user ? user.bio : null);
  const [role, setRole] = useState(user ? user.role : null);

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Enviando formulário");
    console.log(name, email, bio, role);
    // 7 - Limpar formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 5 - Envio de form */}

      {/* 1 - Criação do Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        <div>
          {/* 2 - Label envolvendo o input */}
          <label>
            <span>E-mail</span>
            {/* 4 - Simplificação de setEmail */}
            <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
            />
          </label>
          {/* 8 = textarea */}
          <label>
            <span>Bio</span>
            <textarea
              name="bio"
              placeholder="Descrição do usuário"
              onChange={(ev) => {
                setBio(ev.target.value);
              }}
              value={bio}
            ></textarea>
          </label>
          {/* 9 - select area */}
          <label>
            <span>Função no sistema</span>
            <select
              name="role"
              value={role}
              onChange={(ev) => setRole(ev.target.value)}
            >
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
