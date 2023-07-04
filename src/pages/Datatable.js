import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './DataTable.css';

// Additional theme CSS if needed
import "primereact/resources/themes/saga-blue/theme.css";
import { Paginator } from "primereact/paginator";
import { InputText } from "primereact/inputtext";

function MyTable() {
  const [data, setData] = useState([
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
    {
      name: "Jane",
      standrad: 10,
      monthfees: 1500,
      admitat: "12/04/2023",
      subject: "Maths, Science, English",
    },
  ]); // Replace [...] with your actual table data

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
      >
        <Column field="name" header="Name" headerClassName="TableHeader" headerStyle={{
          display: "flex",
          justifyContent: "center"
        }}
          body={(rowData) =>
            <div class="d-flex align-items-center">
              <div class="ms-0">
                <p class="fw-bold mb-1">Prince Gangwar</p>
                <p class="text-muted mb-0">
                  10<sup>th</sup> (₹1500)
                </p>
              </div>
            </div>
          }
          sortable />
        <Column field="admitat" header="Join At" headerClassName="TableHeader" headerStyle={{
          display: "flex",
          justifyContent: "center"
        }}
          body={(rowData) => <>{rowData.admitat}</>} sortable />
        <Column field="subjects" header="subject" headerClassName="TableHeader"
          body={(rowData) => <>{rowData.subject}</>}
        />
        <Column field="action" header="Action" headerClassName="TableHeader"
          body={(rowData) => <>{rowData.name}
          </>}
        />
      </DataTable>
    </div>
  );
}

export default MyTable;
