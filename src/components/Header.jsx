import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Header;
