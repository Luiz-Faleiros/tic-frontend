import styled from "styled-components";
import { ListUsers, DeleteUser } from "../../service/users/type";
import { useEffect, useState } from "react";
import { deleteUser, listUsers } from "../../service/users/request";
import { InputComponent } from "../Input";
import { Link } from "react-router-dom";

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

  table {
    background-color: #cecece;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;

    td {
      padding: 0.5rem;
    }

    td,
    th {
      border: 1px solid #000;
      padding: 8px;
    }

    thead {
      background: #747474;
      color: white;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;

      border-left: none;
      border-top: none;

      img {
        width: 25px;
      }
    }

    .is-last {
      border-top: none;
    }
  }

  .filter {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    border-radius: 5px;
    background: #0c5dbd;
    color: #fff;
    padding: 0.3rem 1rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ListUsersPage = () => {
  const [users, setUsers] = useState<ListUsers[]>([]);
  const [search, setSearch] = useState("");

  const list = async () => {
    try {
      const response = await listUsers();
      setUsers(response);
    } catch (error) {
      setUsers([])
    }
  };

  const onDelete = async (email: string) => {
    try {
      let payload: DeleteUser = {
        email: email
      }
      await deleteUser(payload);
      await list()

    } catch (error) {

    }
  }

  const onFilter = async () => {
    try {
      if (search === '') {
        list()
      }

      const filteredUsers: ListUsers[] = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
  
      setUsers(filteredUsers);
    } catch (error) {
      alert("Erro ao filtrar os usuários");
    }
  };
  

  useEffect(() => {
    list();
  }, []);

  return (
    <Container>
      <div className="container-box">
        <div className="flex">
          <div className="filter">
            <InputComponent
              placeholder="Pesquisar"
              onChange={setSearch}
              value={search}
              name="search"
            />

            <button onClick={onFilter}>Filtrar</button>
          </div>
          <button>
            <Link to="/dashboard/createuser">Cadastrar</Link>
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Adm</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user, i) => (
              <tr key={user.email}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.is_adm ? "sim" : "não"}</td>
                <td
                  className={`actions ${
                    users?.length === i + 1 ? "is-last" : ""
                  }`}
                >
                  <img src="/trash.png" alt="deletar" onClick={async () => await onDelete(user.email)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};
