import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import GraphForm from "../components/Graph/GraphForm";
import GraphData from "../components/GraphData/GraphData";

const MainRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />        
        <Route path="/graph" element={<GraphForm />} />        
        <Route path="/graphData" element={<GraphData />} />        
      </Route>
    </Routes>
  );
};

export default MainRoutes;
