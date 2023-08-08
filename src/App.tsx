import { type ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Router dom é uma dependencia que instala
import "./App.css";

import Finances from "./pages/Finances";
import Home from "./pages/Home";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Finances" element={<Finances />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
