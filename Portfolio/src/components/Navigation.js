import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul
      style={{
        backgroundColor: "#BF9270",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <li class="container">
        <a class="navbar-brand">
          <h1>Amy McKellar</h1>
          <header>
            <h4>Portfolio!</h4>
          </header>
        </a>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home"
              ? "btn btn-no-outline btn-md btn-hover-color"
              : "nav-link"
          }
          style={{
            borderRadius: "90px",
            backgroundColor: currentPage === "Home" ? "#3e3e3e" : "transparent",
            color: "white",
            padding: "5px 20px",
          }}
        >
          Home
        </a>
      </li>
      <li type="button" class="btn btn-no-outline btn-hover-color  btn-md">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About"
              ? "btn btn-no-outline btn-md btn-hover-color"
              : "nav-link"
          }
          style={{
            borderRadius: "90px",
            backgroundColor:
              currentPage === "About" ? "#3e3e3e" : "transparent",
            color: "white",
            padding: "5px 20px",
          }}
        >
          About
        </a>
      </li>
      <li type="button" class="btn btn-no-outline btn-hover-color  btn-md">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects"
              ? "btn btn-no-outline btn-md btn-hover-color"
              : "nav-link"
          }
          style={{
            borderRadius: "90px",
            backgroundColor:
              currentPage === "Projects" ? "#3e3e3e" : "transparent",
            color: "white",
            padding: "5px 20px",
          }}
        >
          Projects
        </a>
      </li>
      <li type="button" class="btn btn-no-outline btn-hover-color  btn-md">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "Contact"
              ? "btn btn-no-outline btn-md btn-hover-color"
              : "nav-link"
          }
          style={{
            borderRadius: "90px",
            backgroundColor:
              currentPage === "Contact" ? "#3e3e3e" : "transparent",
            color: "white",
            padding: "5px 20px",
          }}
        >
          {" "}
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
