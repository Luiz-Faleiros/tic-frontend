import styled from "styled-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const Container = styled.div`
  background: rgba(217, 217, 217, 1);
  width: 100%;
  height: 100%;

  .header-with-sidebar {
  }
`;

export const Dashboard = ({ children }: any) => {
  return (
    <Container>
      <div className="header-with-sidebar">
        <Header />
        <Sidebar />
      </div>

      <div style={{ height: "100%", marginLeft: "150px" }}>{children}</div>
    </Container>
  );
};
