import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import HomePage from "../pages/homePage/HomePage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import AdminPage from "../pages/adminPage/AdminPage";
import { UserProvider } from "../context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/Home" element={<HomePage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Admin" element={<AdminPage />} />
          </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
