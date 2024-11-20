// src/routes/index.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WithSubnavigation from "../components/navigation";
import FaleConosco from "../pages/FaleConosco";
import Home from "../pages/Home";
import Produtos from "../pages/Propositos";
import História from "../pages/Serviços";

const AppRoutes = () => {
  return (
    <Router>
      <WithSubnavigation />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FaleConosco />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/historia" element={<História />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
