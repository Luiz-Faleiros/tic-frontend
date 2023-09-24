import { useState } from "react";
import { InputComponent } from "../Input";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .container-box {
    background: #fff;

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

export const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <div className="container-box">
        <div id="flex">
          <InputComponent
            value={userName}
            labelText="usuario"
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
        </div>

        <div className="submit-button">
          <button>Criar Usuario</button>
        </div>
      </div>
    </Container>
  );
};
