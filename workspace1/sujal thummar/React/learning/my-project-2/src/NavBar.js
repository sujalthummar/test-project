import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/users" ? "active" : ""
                }`}
                to="/users"
              >
                Users
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/usersdata" ? "active" : ""
                }`}
                to="/usersdata"
              >
                Users Data
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/table" ? "active" : ""
                }`}
                to="/table"
              >
                Table
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/table-dum" ? "active" : ""
                }`}
                to="/table-dum"
              >
                Dummy Table
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/demo-state" ? "active" : ""
                }`}
                to="/demo-state"
              >
                DemoState
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default NavBar;
