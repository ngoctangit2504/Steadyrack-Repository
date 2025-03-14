import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routers/index";

import { CartProvider } from './contexts/CartContext';
import Header from './layouts/Header.jsx';
import Cart from './components/cart/Cart.jsx';


const App = () => {
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

        <Cart />

  </CartProvider>
  );
};

export default App;