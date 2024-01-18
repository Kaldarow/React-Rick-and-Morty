import React from "react";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Mainroutes from "./Mainroutes"

const App = () => {
  return (
    <>
      <Navbar />
      <Mainroutes />
      <Layout />
    </>
  );
};

export default App;
