import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import User from "../views/User";
import NotFound from "../views/NotFound";
import Layout from "../components/Layout";

const App = () => (
  <HashRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
        <Route component={NotFound} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
