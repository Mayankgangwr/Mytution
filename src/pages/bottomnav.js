import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

const BottomNav = () => {
  return (
    <>
      <div className="container-fluid d-mobile bg-light-grey px-0 m-pading fixed-bottom">
        <div className="row">
          <div className="col-20 nav-bottom-item">
            <NavLink activeClassName="active" className={`btn p-1`} to="/">
              <i class="fas fa-house"></i>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink
              activeClassName="active"
              className={`btn p-1`}
              to="/batches"
            >
              <i class="far fa-clock"></i>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink
              activeClassName="active"
              to="/students"
              className="btn p-1"
            >
              <i class="fas fa-users"></i>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink
              activeClassName="active"
              to="/accounts"
              className="btn p-1"
            >
              <i class="fas fa-file-invoice"></i>
            </NavLink>
          </div>
          <div className="col-20 nav-bottom-item">
            <NavLink activeClassName="active" to="/dues" className="btn p-1">
              <i class="fas fa-indian-rupee-sign"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default BottomNav;
