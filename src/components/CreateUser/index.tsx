import { useState } from "react";
import { InputComponent } from "../Input";
import styled from "styled-components";
import { createUser } from "../../service/users/request";
import { CreateUser } from "../../service/users/type";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .container-box {
    background: #fff;
    border-radius: 10px;

    padding: 41px;

    max-width: 900px;
    width: 90%;

    #flex {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .submit-button {
    text-align: right;
    margin-top: 1rem;
    button {
      border-radius: 5px;
      background: #0c5dbd;
      color: #fff;
      padding: 0.5rem 1rem;
    }
  }
`;

export const CreateUserPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdm, setIsAdm] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdm(event.target.checked);
  };

  const onSubmit = async () => {
    try {
      const data: CreateUser = {
        email,
        name: userName,
        password,
      };

      await createUser(data);
    } catch (error) {
      alert("Erro ao criar um usuario")
    }
  };

  return (
    <Container>
      <div className="container-box">
      <h1 style={{ textAlign: 'center' }}>Cadastro de Usuários</h1>
        <div id="flex">
          <InputComponent
            value={userName}
            labelText="Usuario"
            type="text"
            name="user"
            onChange={setUserName}
          />

          <InputComponent
            value={email}
            labelText="Email"
            type="email"
            name="email"
            onChange={setEmail}
          />

          <InputComponent
            value={password}
            labelText="Senha"
            type="password"
            name="password"
            onChange={setPassword}
          />

          <label htmlFor={"ADM"}>ADM</label>
          <input type="checkbox"
            checked={isAdm}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="submit-button">
          <button onClick={onSubmit}>Criar Usuario</button>
        </div>
      </div>
    </Container>
  );
};
