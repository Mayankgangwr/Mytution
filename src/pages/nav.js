import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const links = ["batches", "students", "accounts", "dues"];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light-green px-0 m-pading fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand mt-2 mt-lg-0 d-mobile logo-6" href="/">
            <h6>
              My<span>Tution</span>
            </h6>
          </Link>
          <div className="ms-auto mt-1 d-mobile">
            <a className="text-reset fw-300 me-2" href="#">
              Login
            </a>
          </div>
          <div
            className="collapse navbar-collapse d-desktop"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand mt-2 mt-lg-0 logo-6" href="/">
              <h6>
                My<span>Tution</span>
              </h6>
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((el) => (
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize fw-300 text-white"
                    href={`/${el}`}
                  >
                    {el}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize fw-300 text-white"
                  href={`/login`}
                >
                  {`Login`}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
