import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './DataTable.css';
import { Menu } from 'primereact/menu';

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
      >
        <Column field="name" header="Name" headerClassName="TableHeader"
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
        <Column field="admitat" header="Join At" headerClassName="TableHeader"
          body={(rowData) => <>{rowData.admitat}</>} sortable />
        <Column field="subjects" header="subject" headerClassName="TableHeader"
          body={(rowData) => <>{rowData.subject}</>}
        />
        <Column field="action" header="Action" headerClassName="TableHeader"
          body={(rowData) => <>
            <Menu
              style={{ width: "110px" }}
              model={[
                {
                  label: 'Update',
                  icon: 'pi pi-refresh',
                  command: () => { handleUpdate(1) }
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-times',
                  command: () => { handledelete(1) }
                }
              ]} popup ref={menuRight} id="popup_menu_right" popupAlignment="left" />
            <i className="pi pi-ellipsis-v" style={{ cursor: "pointer" }} onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup ></i>
          </>}
        />
      </DataTable>
    </div>
  );
}

export default MyTable;
