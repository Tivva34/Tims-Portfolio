import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
     <div className="container">
    <div className="page not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
    </div>
  );
}