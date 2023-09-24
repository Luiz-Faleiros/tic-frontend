import "./styles/global.css";
import ForgetPassword from "./components/ForgetPassword";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import Login from "./components/Login";
import { CreateUserPage } from "./components/CreateUser";

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
      </Routes>
    </Router>
  );
}
export default App;
