import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div
        className="page not-found"
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          😕
        </span>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          404 - Page Not Found
        </h1>
        <p style={{ marginBottom: "2rem", color: "#bbb" }}>
          The page you're looking for doesn't exist.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" className="btn">
            Go back to Home
          </Link>
          <Link to="/contact" className="btn">
            Contact me if you need help
          </Link>
          <Link to="/about" className="btn">
            About
          </Link>
        </div>
        <p style={{ marginTop: "2rem", color: "#bbb" }}>
          Feel free to explore other sections of the site!
        </p>
      </div>
    </div>
  );
}