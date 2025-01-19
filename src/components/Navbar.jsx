import React from "react";

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "about" ? "active" : ""}`}
            onClick={() => setActivePage("about")}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "skill" ? "active" : ""}`}
            onClick={() => setActivePage("skill")}
          >
            Skill
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "exprience" ? "active" : ""}`}
            onClick={() => setActivePage("exprience")}
          >
            Exprience
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "education" ? "active" : ""}`}
            onClick={() => setActivePage("education")}
          >
            Education
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "projects" ? "active" : ""}`}
            onClick={() => setActivePage("projects")}
          >
            Projects
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "certificates" ? "active" : ""}`}
            onClick={() => setActivePage("certificates")}
          >
            Certificates
          </button>
        </li>
        {/* <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "contact" ? "active" : ""}`}
            onClick={() => setActivePage("contact")}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
