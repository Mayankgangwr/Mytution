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

function DuesTable() {
    const [data, setData] = useState([
        {
            name: "Jane",
            standrad: 10,
            dues: 1500,
            action: <button class="btn btn-secondary btn-rounded">
                remind
            </button>,
        },
        {
            name: "Jane",
            standrad: 10,
            dues: 1500,
            action: <button class="btn btn-secondary btn-rounded">
                remind
            </button>,
        },
        {
            name: "Jane",
            standrad: 10,
            dues: 1500,
            action: <button class="btn btn-secondary btn-rounded">
                remind
            </button>,
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
                        <div class="d-flex align-items-center justify-content-center">
                            <div class="ms-0">
                                <p class="fw-bold mb-1">Mayank Gangwar</p>
                                <p class="text-muted mb-0">10th Class</p>
                            </div>
                        </div>
                    )}
                    sortable
                />
                <Column
                    field="dues"
                    header="Due Amount"
                    headerClassName="TableHeader"
                    sortable
                />
                <Column
                    field="action"
                    header="Action"
                    headerClassName="TableHeader"
                />
            </DataTable>
        </div>
    );
}

export default DuesTable;
