import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clone from "./Main";
import Search from "./Components/Header/Searchitems";
import Offers from "./Components/Header/Offers";
import Menu from "./Components/Main/Container-3/Menu/Menu";
import UserLogin from "./Components/Accounts/UserLogin";
import UserRegister from "./Components/Accounts/UserRegister";
import PageNotFound from "./Components/Error/Error";
import DashboardSign from "./Components/Accounts/Login";
import AdminDashboard from './Components/Admin/Admin_dashboard';
import AddResturants from './Components/Admin/features/AddResturants'
import Cart from './Components/Main/Container-3/Menu/Cart'
// testing app.js
function App() {
  const handleLogin = (isLoggedIn) => {
    console.log("User login status:", isLoggedIn);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminDasboard" element={<AdminDashboard/>}/>
        <Route path="/addresturants" element={<AddResturants/>}/>
        <Route path="/dashboard/:user_id" element={<Clone />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route Path="/sign" element={<DashboardSign />} />
        <Route path="/" element={<UserLogin onLogin={handleLogin} />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
