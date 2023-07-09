import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./DataTable.css";
import { Menu } from "primereact/menu";
// Additional theme CSS if needed
import "primereact/resources/themes/saga-blue/theme.css";
import { Paginator } from "primereact/paginator";
import { InputText } from "primereact/inputtext";

function AccTable() {
    const [data, setData] = useState([
        {
            name: "Jane",
            standrad: 10,
            monthfees: 1500,
            admitat: "12/04/2023",
            status: <span
                class="badge badge-success rounded-pill d-inline py-2 px-3"
                style={{ fontSize: "14px" }}
            >
                Done
            </span>,
        },
        {
            name: "Jane",
            standrad: 10,
            monthfees: 1500,
            admitat: "12/04/2023",
            status: <span
                class="badge badge-primary rounded-pill d-inline py-2 px-3"
                style={{ fontSize: "14px" }}
            >
                Pending
            </span>,
        },
        {
            name: "Jane",
            standrad: 10,
            monthfees: 1500,
            admitat: "12/04/2023",
            status: <span
                class="badge badge-danger rounded-pill d-inline py-2 px-3"
                style={{ fontSize: "14px" }}
            >
                Failed
            </span>,
        },
    ]); // Replace [...] with your actual table data
    const menuRight = useRef(null);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState(null);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const onSort = (event) => {
        setSortField(event.sortField);
        setSortOrder(event.sortOrder);
    };
    const handleUpdate = (id) => {
        alert("Update");
    };
    const handledelete = (id) => {
        alert("Delete");
    };

    return (
        <div>
            <DataTable
                value={data}
                paginator
                rows={rows}
                first={first}
                totalRecords={data.length}
                onPage={onPageChange}
                sortField={sortField}
                sortOrder={sortOrder}
                onSort={onSort}
                rowsPerPageOptions={[5, 10, 20]}
                paginatorLeft
            >
                <Column
                    field="name"
                    header="Name"
                    headerClassName="TableHeader"
                    body={(rowData) => (
                        <div class="d-flex align-items-center">
                            <div class="ms-0">
                                <p class="fw-bold mb-1">Prince Gangwar</p>
                                <p class="text-muted mb-0">
                                    10<sup>th</sup> (₹1500)
                                </p>
                            </div>
                        </div>
                    )}
                    sortable
                />
                <Column
                    field="monthfees"
                    header="Fees"
                    headerClassName="TableHeader"
                />
                <Column
                    field="admitat"
                    header="Date"
                    headerClassName="TableHeader"
                />
                <Column
                    field="status"
                    header="Status"
                    headerClassName="TableHeader"
                />
            </DataTable>
        </div>
    );
}

export default AccTable;
