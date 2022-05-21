import React from "react";

const Header = () => {
  return (
    <div>
      <nav class=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/home">
            Easy-Tech
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-4">
                <a class="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link" href="/order">
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
