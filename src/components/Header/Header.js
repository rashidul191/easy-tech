import React from "react";

const Header = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/home">
            Easy-Tech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-4">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/order">
                  Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
