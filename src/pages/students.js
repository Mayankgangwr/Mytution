import React from "react";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import "./home.css";
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
];
const Students = () => {
    return (
        <>
            <Nav />
            <div className="container-fluid main">
                <div className="row block">
                    <h4 className="text-center fs-1 my-2 text-dark block-heading">
                        All STUDENTS
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
                </div>
            </div>
            <BottomNav />
        </>
    );
};

export default Students;
