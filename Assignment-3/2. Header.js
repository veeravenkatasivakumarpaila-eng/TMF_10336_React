import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => (
  <header>
    <div className="brand">
      <div className="logo">
        <img
      src="http://icon-library.com/images/free-movies-icon/free-movies-icon-16.jpg"
      height="60"
      width="60"
    />
      </div>
      <div>
        <h1>MovieBox</h1>
        <p>Book tickets · Discover · Watch</p>
      </div>
    </div>
    <nav className="controls">
      <button className="btn">Sign in</button>
      <button className="btn primary">Register</button>
    </nav>
  </header>
);

const root = createRoot(document.getElementById("root"));
root.render(<Header/>);
