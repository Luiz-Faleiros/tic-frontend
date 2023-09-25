import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.nav`
  width: 150px;
  height: 100%;
  background: #0c5dbd;

  position: fixed;
  top: 110px;

  ul li {
    padding: 1rem;
    text-align: center;

    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 1px solid #ffffff7d;
    transition: 0.1s ease-in-out;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }

  .nobottomborder {
    border-bottom: none;
  }
`;

export const Sidebar = () => {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  };

  return (
    <Container>
      <ul>
        <li className="nobottomborder" onClick={() => handleNavigation('/dashboard/listproduct')}>
          Patrimonio
        </li>
        <li className="nobottomborder" onClick={() => handleNavigation('/dashboard/createproduct')}>
          Cadastro
        </li>
        <li onClick={() => handleNavigation('/dashboard/listusers')}>Usuario</li>
      </ul>
    </Container>
  );
};
