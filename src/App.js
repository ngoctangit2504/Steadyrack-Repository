import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routers/index";

const App = () => {
  return (
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
  );
};

export default App;