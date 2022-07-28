import Routes from "../../Routes";
import React from "react";
import { useState } from "react";
//styles
import '../Styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="h1-website-title">D&D 5e Character Creator</h1>
      <Link className="get-started-btn" to='/raceSelection'>Get Started</Link>
    </div>
  );
};

export default Header;
