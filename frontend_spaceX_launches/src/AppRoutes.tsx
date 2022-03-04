import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
