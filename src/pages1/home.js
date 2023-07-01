import React from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
const arr = [1, 2, 3, 4, 5];
const Home = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid main">
        <div className="row block">
          <h4 className="text-center fs-1 my-2 text-dark block-heading">
            BATCHES
          </h4>
          {arr.map((el) => (
            <div className="col-xl-2 col-lg-2 col-md-3 col-4 col-home mt-1">
              <div class="card">
                <div
                  class="card-body text-center"
                  style={{ padding: "12px 0" }}
                >
                  <h5 class="card-title">08:00 AM</h5>
                  <h6 class="card-title mb-4">
                    10<sup>th</sup>(Maths)
                  </h6>

                  <button type="button" class="btn btn-info">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row block1 mt-2">
          <h4 className="text-center fs-1 my-2 text-dark block-heading">
            STUDENTS
          </h4>
          <div
            className="col-12 mt-1 col-accounts"
            style={{
              overflowX: "auto",
              padding: "3px",
              borderRadius: "19px",
              boxShadow: "1px 1px 4px #000",
            }}
          >
            <table class="table align-middle mb-0 bg-white">
              <thead class="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Admit At</th>
                  <th>Subjects</th>
                  <th className="me-1"></th>
                </tr>
              </thead>
              <tbody>
                {arr.map((el) => (
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="ms-0">
                          <p class="fw-bold mb-1">Prince Gangwar</p>
                          <p class="text-muted mb-0">
                            10<sup>th</sup> (₹1500)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">12/04/2023</p>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">Maths, Science, English</p>
                    </td>
                    <td className="pe-3">
                      <i class="fas fa-ellipsis-vertical"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 text-center mt-3">
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: "150px" }}
            >
              All students
            </button>
          </div>
        </div>
        <div className="row block2 mt-2">
          <h4 className="text-center fs-1 my-2 text-dark block-heading">
            Accounts
          </h4>
          <div
            className="col-12 mt-1 col-accounts"
            style={{
              overflowX: "auto",
              padding: "3px",
              borderRadius: "19px",
              boxShadow: "1px 1px 4px #000",
            }}
          >
            <table class="table align-middle mb-0 bg-white">
              <thead class="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-0">
                        <p class="fw-bold mb-1">Prince Gangwar</p>
                        <p class="text-muted mb-0">10th Class</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">1500</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">12/04/2023</p>
                  </td>
                  <td>
                    <span
                      class="badge badge-success rounded-pill d-inline py-2 px-3"
                      style={{ fontSize: "14px" }}
                    >
                      Done
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-0">
                        <p class="fw-bold mb-1">Mayank Gangwar</p>
                        <p class="text-muted mb-0">10th Class</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">1500</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">12/04/2023</p>
                  </td>
                  <td>
                    <span
                      class="badge badge-primary rounded-pill d-inline py-2 px-3"
                      style={{ fontSize: "14px" }}
                    >
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-0">
                        <p class="fw-bold mb-1">Prashant Gangwar</p>
                        <p class="text-muted mb-0">10th Class</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">1500</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">12/04/2023</p>
                  </td>
                  <td>
                    <span
                      class="badge badge-danger rounded-pill d-inline py-2 px-3"
                      style={{ fontSize: "14px" }}
                    >
                      Failed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 text-center mt-3">
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: "150px" }}
            >
              All Accounts
            </button>
          </div>
        </div>
        <div className="row block3 mt-2">
          <h4 className="text-center fs-1 my-2 text-dark block-heading">
            Dues
          </h4>
          <div
            className="col-12 mt-1 col-accounts"
            style={{
              overflowX: "auto",
              padding: "3px",
              borderRadius: "19px",
              boxShadow: "1px 1px 4px #000",
            }}
          >
            <table class="table align-middle mb-0 bg-white">
              <thead class="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Due Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-0">
                        <p class="fw-bold mb-1">Prince Gangwar</p>
                        <p class="text-muted mb-0">10th Class</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">1500</p>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-rounded">
                      remind
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-0">
                        <p class="fw-bold mb-1">Mayank Gangwar</p>
                        <p class="text-muted mb-0">10th Class</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">1000</p>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-rounded">
                      remind
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="ms-0">
                        <p class="fw-bold mb-1">Prashant Gangwar</p>
                        <p class="text-muted mb-0">10th Class</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">500</p>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-rounded">
                      remind
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 text-center mt-3">
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: "150px" }}
            >
              All Dues
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
