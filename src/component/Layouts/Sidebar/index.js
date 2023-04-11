import React, { useState } from "react";
import "./sidebar.css";

function Sidebar() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  function goToPage(url) {
    setCurrentPage(url);
    window.location.pathname = url;
  }
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }

  return (
    <aside className="sidebar">
      <div className="menu-mobile">
        <div className="hamburger-lines" onClick={toggleSidebar}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a
            onClick={() => goToPage("/")}
            className={currentPage === "/" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li className="sidebar-item">
          <a
            onClick={() => goToPage("/services")}
            className={currentPage === "/services" ? "active" : ""}
          >
            Services
          </a>
        </li>
        <li className="sidebar-item">
          <a
            onClick={() => goToPage("/news")}
            className={currentPage === "/news" ? "active" : ""}
          >
            News
          </a>
        </li>
        <li className="sidebar-item">
          <a
            onClick={() => goToPage("/blog")}
            className={currentPage === "/blog" ? "active" : ""}
          >
            Blog
          </a>
        </li>
        <li className="sidebar-item">
          <a
            onClick={() => goToPage("/contact")}
            className={currentPage === "/contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
