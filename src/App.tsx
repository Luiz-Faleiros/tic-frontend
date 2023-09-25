import "./styles/global.css";
import ForgetPassword from "./components/ForgetPassword";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import Login from "./components/Login";
import { CreateUserPage } from "./components/CreateUser";
import { CreateProductPage } from "./components/CreateProduct";
import { ListProductsPage } from "./components/ListProducts";
import { ListUsersPage } from "./components/ListUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex">
              <Login />
            </div>
          }
        />
        <Route
          path="/password"
          element={
            <div className="flex">
              <ForgetPassword />
            </div>
          }
        />

        <Route
          path="/dashboard/createuser"
          element={
            <Dashboard>
              <CreateUserPage />
            </Dashboard>
          }
        />

        <Route
          path="/dashboard/createproduct"
          element={
            <Dashboard>
              <CreateProductPage />
            </Dashboard>
          }
        />

        <Route
          path="/dashboard/listproduct"
          element={
            <Dashboard>
              <ListProductsPage />
            </Dashboard>
          }
        />

        <Route
          path="/dashboard/listusers"
          element={
            <Dashboard>
              <ListUsersPage />
            </Dashboard>
          }
        />

      </Routes>
    </Router>
  );
}
export default App;
