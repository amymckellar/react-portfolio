import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul style={{ background color: "lightblue" }}>
      <li className="nav-item">
        <a class name="nav-link" href="#about" onClick={() => handlePageChange("About")}>
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a class name="nav-link" href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
export default Navigation;
