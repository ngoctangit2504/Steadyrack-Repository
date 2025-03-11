import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.jsx";

const routes = [
  { path: "/", element: <MainLayout><Home /></MainLayout> }
];

export default routes;