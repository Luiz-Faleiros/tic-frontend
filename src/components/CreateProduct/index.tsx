import { useState } from "react";
import { InputComponent } from "../Input";
import styled from "styled-components";
import { CreateProduct } from "../../service/products/type";
import { createProduct } from "../../service/products/request";

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

export const CreateProductPage = () => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [category, setCategory] = useState("");
  const [sku, setSku] = useState("");
  const [status, setStatus] = useState("");
  const [setor, setSetor] = useState("");

  const onSubmit = async () => {
    try {
      const data: CreateProduct = {
          categoryId: 0,
          originId: 0,
          roomId: 0,
          name: "",
          sku: "",
          brokenAt: false,
      };

      await createProduct(data);
    } catch (error) {
      alert("Erro ao criar um usuario")
    }
  };

  return (
    <Container>
      <div className="container-box">
      <h1 style={{ textAlign: 'center' }}>Cadastro de Produtos</h1>

        <div id="flex">
          <InputComponent
            value={name}
            labelText="Nome"
            type="text"
            name="name"
            onChange={setName}
          />

          <InputComponent
            value={origin}
            labelText="Origem"
            type="text"
            name="origin"
            onChange={setOrigin}
          />

          <InputComponent
            value={category}
            labelText="Categoria"
            type="text"
            name="category"
            onChange={setCategory}
          />

          <InputComponent
            value={sku}
            labelText="SKU"
            type="text"
            name="sku"
            onChange={setSku}
          />

          <InputComponent
            value={status}
            labelText="Status"
            type="text"
            name="status"
            onChange={setStatus}
          />

          <InputComponent
            value={setor}
            labelText="Setor"
            type="text"
            name="setor"
            onChange={setSetor}
          />

        </div>

        <div className="submit-button">
          <button onClick={onSubmit}>Criar Produto</button>
        </div>
      </div>
    </Container>
  );
};
