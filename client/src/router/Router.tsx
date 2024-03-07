import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import HomePage from "../pages/homePage/HomePage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import AdminPage from "../pages/adminPage/AdminPage";
import NewEmployee from "../pages/newEmployee/NewEmployee";
import { UserProvider } from "../context/UserContext";

function Router() {
  return (
    <UserProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/Home" element={<HomePage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Admin" element={<AdminPage />} />
              <Route path="/newEmployee" element={<NewEmployee />} />
          </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default Router;
