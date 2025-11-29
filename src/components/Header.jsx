import React from "react";
import { FiPhone } from "react-icons/fi";

const Header = ({ setCurrentPage }) => {
  const phoneNumber = "918888888888";

  return (
    <>
      <style>{`
        .header-container {
          width: 100%;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f7efdf;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar {
          display: flex;
          gap: 16px;
          font-size: 15px;
          color: #5a402e;
          font-weight: 600;
          cursor: pointer;
        }

        .nav-item:hover {
          opacity: 0.6;
        }

        .header-center img {
          height: 42px;
        }

      `}</style>

      <header className="header-container">

        <nav className="navbar">
          <div className="nav-item" onClick={() => setCurrentPage("home")}>
            Home
          </div>
          <div className="nav-item" onClick={() => setCurrentPage("about")}>
            About
          </div>
          <div className="nav-item" onClick={() => setCurrentPage("contact")}>
            Contact
          </div>
        </nav>

        <div className="header-center">
          <img src="/logo.jpg" alt="Logo" />
        </div>

        <div
          className="header-right"
          onClick={() => (window.location.href = `tel:${phoneNumber}`)}
        >
          <FiPhone />
        </div>

      </header>
    </>
  );
};

export default Header;
