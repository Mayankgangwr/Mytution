import React from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
import { NavLink } from "react-router-dom";
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const Batchs = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid main">
        <div className="row block">
          <h4 className="text-center fs-1 my-2 text-dark">All BATCHES</h4>
          {arr.map((el) => (
            <div
              key={el}
              className="col-xl-2 col-lg-2 col-md-3 col-4 col-home mt-1"
            >
              <div class="card">
                <div
                  class="card-body text-center"
                  style={{ padding: "12px 0px" }}
                >
                  <h5 class="card-title">08:00 AM</h5>
                  <h6 class="card-title">
                    10<sup>th</sup>(Maths)
                  </h6>

                  <button type="button" class="btn btn-info">
                    <NavLink to="/batchs/12">View More</NavLink>

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Batchs;
