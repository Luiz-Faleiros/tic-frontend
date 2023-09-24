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
  return (
    <Container>
      <ul>
        <li className="nobottomborder">Patrimonio</li>
        <li className="nobottomborder">Cadastro</li>
        <li>Usuario</li>
      </ul>
    </Container>
  );
};
