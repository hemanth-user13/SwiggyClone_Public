import "./App.css";
import Clone from "./Main";
import Search from "./Components/Header/Searchitems";
import Offers from "./Components/Header/Offers";
import Menu from "./Components/Main/Container-3/Menu/Menu";
import Login from "./Components/Accounts/UserLogin";
import Register from "./Components/Accounts/UserRegister";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Clone /> : <Navigate to="/dashboard" />}
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/menu/:id" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
