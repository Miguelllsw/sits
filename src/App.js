import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Renca from "./pages/paginasExternas/Renca";


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renca" element={<Renca />} />
      </Routes>
    </Router>
  );
}

