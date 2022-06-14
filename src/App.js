import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Login from "./pages/Login/Login";
import Navbar from "./pages/Navbar/Navbar";
import Employe from "./pages/Dashboard/Employe";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/employee" element={<Employe />}></Route>
          </Route>
          <Route path="/signin" element={<Login />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
