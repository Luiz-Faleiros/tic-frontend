import styled from "styled-components";

const Container = styled.header`
  background-color: rgba(12, 93, 189, 1);
  padding: 30px 25px;

  width: 100%;
  height: 110px;
  position: fixed;

  img {
    width: 200px;
    height: 50px;
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
