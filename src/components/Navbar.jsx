import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sloth from "../assets/sloth.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={sloth} alt="Logo" className="logo-img" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}