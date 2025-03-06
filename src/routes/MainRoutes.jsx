import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings"; 
import Header from "../components/Header";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
