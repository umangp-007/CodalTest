import React, { useState } from 'react';
import './Header.scss'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
      <div className="container-fluid">
        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Brand */}
        <a className="navbar-brand" href="#">
          IPSUM
        </a>


        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link browse-hover">
                Browse Categories
              </a>
              <ul className="sub-menu-items">
                <li>
                  <a className="dropdown-item" href="#">
                    Lubricants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Chemicals
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Supplies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Equipment
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Auto Parts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Purchased Products
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link browse-hover">
               Who We Serve
              </a>
              <ul className="sub-menu-items">
                <li>
                    <a className="dropdown-item" href="#">
                        Option 1
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Option 2
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Option 3
                    </a>
                    </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link browse-hover">
              What We Do
              </a>
              <ul className="sub-menu-items">
                <li>
                    <a className="dropdown-item" href="#">
                        Option 1
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Option 2
                    </a>
                    </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link browse-hover">
              Who We Are
              </a>
              <ul className="sub-menu-items">
                <li>
                    <a className="dropdown-item" href="#">
                        Option 1
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Option 2
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Option 3
                    </a>
                    </li>
              </ul>
            </li>
            
          </ul>

          {/* Search Bar */}
          <form className="d-flex custom-search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by keyword, brand, or SKU"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

       
        </div>
       {/* Icons */}
        <div>
            <ul className="navbar-nav ms-3 d-flex flex-row">
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="bi bi-person"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="bi bi-cart"></i>
                </a>
                </li>
            </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
