import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="page not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p>Go back to <Link to="/">Home</Link></p>
        <p>Contact me if you have any questions on the <Link to="/contact">Contact</Link> page.</p>
        <p>Or check out my <Link to="/about">About</Link> page to learn more about me.</p>
        <p>Feel free to explore other sections of the site!</p>
      </div>
    </div>
  );
}