import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routers/index";
import CartProvider from "../src/contexts/CartContext.jsx";

const App = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 2000, once: true });
    }
  }, []);
  return (
    <CartProvider>
    <Router>
      <nav>
        <ul>
          <li><Link to="/"></Link></li>
        </ul>
      </nav>
      <Routes>
      {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;