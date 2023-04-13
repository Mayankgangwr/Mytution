import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

const BottomNav = () => {
  const links = [
    "bollywood",
    "hollywood",
    "south",
    "dubbed",
    "upcoming",
    "popular",
  ];
  return (
    <>
      <div className="container-fluid d-mobile bg-light-grey px-0 m-pading fixed-bottom">
        <div className="row">
          <div className="col-20 nav-bottom-item">
            <Link to="/" className="btn p-1">
              <i class="fas fa-house"></i>
            </Link>
          </div>
          <div className="col-20 nav-bottom-item">
            <Link to="/" className="btn p-1">
              <i class="fas fa-house"></i>
            </Link>
          </div>
          <div className="col-20 nav-bottom-item">
            <Link to="/" className="btn p-1">
              <i class="fas fa-house"></i>
            </Link>
          </div>
          <div className="col-20 nav-bottom-item">
            <Link to="/" className="btn p-1">
              <i class="fas fa-house"></i>
            </Link>
          </div>
          <div className="col-20 nav-bottom-item">
            <Link to="/" className="btn p-1">
              <i class="fas fa-house"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BottomNav;
