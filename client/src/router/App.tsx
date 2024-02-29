import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import HomePage from "../pages/homePage/HomePage";
import RegisterPage from "../pages/registerPage/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
