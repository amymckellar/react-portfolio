import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Amy McKellar </h1>
      <header>Portfolio</header>
      <div>
        <a href="#about" onClick={() => handlePageChange("About")}>
          About Me
        </a>
        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
        <a href="#resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
