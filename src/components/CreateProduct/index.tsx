import { useState } from "react";
import { InputComponent } from "../Input";
import styled from "styled-components";
import { CreateProduct } from "../../service/products/type";
import { createProduct } from "../../service/products/request";
import SelectComponent from "../select-input/select-input";

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


  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const categoryOptions = [
    { value: '', label: '' },
    { value: '1', label: 'Eletronicos' },
    { value: '2', label: 'Limpeza' },
    { value: '3', label: 'Utensilios de cozinha' },
  ];

  const originOptions = [
    { value: '', label: '' },
    { value: '1', label: 'Ongs' },
    { value: '2', label: 'Doações' },
  ];

  const setorOptions = [
    { value: '', label: '' },
    { value: '1', label: 'Sala 1' },
    { value: '2', label: 'Sala 2' },
  ];

  const statusOptions = [
    { value: '', label: '' },
    { value: '1', label: 'Quebrado' },
    { value: '2', label: 'Inteiro' },
  ];

  return (
    <Container>
      <div className="container-box">
      <h1 className="font-bold text-2xl pb-2" style={{ textAlign: 'center' }}>Cadastro de Produtos</h1>

        <div id="flex">
          <div className="flex gap-4">
            <InputComponent
              value={name}
              labelText="Nome"
              type="text"
              name="name"
              onChange={setName}
            />

            <SelectComponent
              value={origin}
              labelText="Origem"
              name="origem"
              options={originOptions}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="flex gap-4">
            <InputComponent
              value={sku}
              labelText="SKU"
              type="text"
              name="sku"
              onChange={setSku}
            />
            <SelectComponent
              value={category}
              labelText="Categoria"
              name="category"
              options={categoryOptions}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="flex gap-4">
            <SelectComponent
              value={status}
              labelText="Status"
              name="status"
              options={statusOptions}
              onChange={handleCategoryChange}
            />

            <SelectComponent
              value={setor}
              labelText="Setor"
              name="setor"
              options={setorOptions}
              onChange={handleCategoryChange}
            />
          </div>

        </div>

        <div className="submit-button">
          <button onClick={onSubmit}>Criar Produto</button>
        </div>
      </div>
    </Container>
  );
};
