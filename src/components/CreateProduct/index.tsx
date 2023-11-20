import { useEffect, useState } from "react";
import { InputComponent } from "../Input";
import styled from "styled-components";
import { CreateProduct, ListProduct } from "../../service/products/type";
import { createProduct, listProduct, updateProduct } from "../../service/products/request";
import SelectComponent from "../select-input/select-input";
import { useLocation, useNavigate } from "react-router-dom";

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

  .green {
    background: #46FF33;
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
  const [hash, setHash] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setName(location.state?.product?.name ? location.state?.product?.name : "")
    setSku(location.state?.product?.sku ? location.state?.product?.sku : "")
    setHash(location.state?.product?.hash ? location.state?.product?.hash : "")
  }, [location.state?.product?.hash, location.state?.product?.name, location.state?.product?.sku]);

  const onSubmit = async () => {
    const data: CreateProduct = {
      categoryId: parseInt(category),
      originId: parseInt(origin),
      roomId: parseInt(setor),
      name: name,
      sku: sku,
      brokenAt: status === "1" ? true : false,
  };
    try {
      if (hash !== "") {
        await updateProduct(hash, data)
      } else {
        await createProduct(data);
      }
    } catch (error) {
      alert("Erro ao criar um usuario")
    }
    navigate('/dashboard/listproduct');
  };

  const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrigin(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSetorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSetor(e.target.value);
  };

  const categoryOptions = [
    { value: '', label: 'Selecionar', styleclass:'' },
    { value: '1', label: 'Eletronicos', styleclass:'' },
    { value: '2', label: 'Limpeza', styleclass:'' },
    { value: '3', label: 'Utensilios de cozinha', styleclass:'' },
  ];

  const originOptions = [
    { value: '', label: 'Selecionar', styleclass:'' },
    { value: '1', label: 'Ongs', styleclass:'' },
    { value: '2', label: 'Doações', styleclass:'' },
  ];

  const setorOptions = [
    { value: '', label: 'Selecionar', styleclass:'' },
    { value: '1', label: 'Patio', styleclass:'bg-rose-200 outline-none' },
    { value: '2', label: 'Banheiro 1', styleclass:'bg-zinc-500' },
    { value: '3', label: 'Banheiro 2', styleclass:'green' },
    { value: '4', label: 'Sala 2', styleclass:'bg-purple-300' },
    { value: '5', label: 'Sala 3', styleclass:'bg-blue-200' },
    { value: '6', label: 'Banheiro 3', styleclass:'bg-pink-500' },
    { value: '7', label: 'Sala 4', styleclass:'bg-sky-200' },
    { value: '8', label: 'Sala 5', styleclass:'bg-rose-500' },
    { value: '9', label: 'Sala 6', styleclass:'bg-amber-900' },
    { value: '10', label: 'Sala 7', styleclass:'bg-rose-300' },
    { value: '11', label: 'Sala 8', styleclass:'bg-purple-700' },
    { value: '12', label: 'Sala 9', styleclass:'bg-blue-800' },
    { value: '13', label: 'Sala 10', styleclass:'bg-orange-400' },
    { value: '14', label: 'Banheiro 4', styleclass:'bg-fuchsia-600' },
    { value: '15', label: 'Escritório 1', styleclass:'bg-sky-400' },
    { value: '16', label: 'Escritório 2', styleclass:'bg-red-600' },
    { value: '17', label: 'Cozinha', styleclass:'bg-yellow-100' },
    { value: '18', label: 'Dispensa 1', styleclass:'bg-rose-950' },
    { value: '19', label: 'Dispensa 2', styleclass:'bg-yellow-300' },
  ];

  const statusOptions = [
    { value: '', label: 'Selecionar', styleclass:'' },
    { value: '1', label: 'Quebrado', styleclass:'' },
    { value: '2', label: 'Inteiro', styleclass:'' },
  ];

  return (
    <Container>
      <div className="container-box pt-4">
      <h1 className="font-bold text-2xl pb-2 pt-4" style={{ textAlign: 'center' }}>{hash !== "" ? "Atualizar Produtos" : "Cadastro de Produtos"}</h1>

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
              onChange={handleOriginChange}
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
              onChange={handleStatusChange}
            />

            <SelectComponent
              value={setor}
              labelText="Setor"
              name="setor"
              options={setorOptions}
              onChange={handleSetorChange}
            />
          </div>

        </div>

        <div className="flex gap-4 justify-center">
        <img src="/planta.jpeg" alt="Imagem de uma planta" style={{ height: '400px' }}/>
        </div>

        <div className="submit-button">
          <button onClick={onSubmit}>{hash !== "" ? "Atualizar" : "Criar Produto"}</button>
        </div>
      </div>
    </Container>
  );
};
