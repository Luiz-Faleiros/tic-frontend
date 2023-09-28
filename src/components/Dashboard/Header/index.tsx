import styled from "styled-components";

const Container = styled.header`
  background-color: rgba(12, 93, 189, 1);

  width: 100%;
  height: 110px;
  position: fixed;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;

  img {
    height: 66px;
    object-fit: contain;
  }
`;

export const Header = () => {
  return (
    <Container>
      <img src={require("./logo.png")} />
    </Container>
  );
};
