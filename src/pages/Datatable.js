import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { InputText } from 'primereact/inputtext';

function MyTable() {
    const [data, setData] = useState([{ name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'London' },
    { name: 'Tom', age: 35, city: 'Paris' },
    { name: 'Mike', age: 40, city: 'Berlin' },
    { name: 'Emily', age: 28, city: 'Tokyo' },
    { name: 'Chris', age: 32, city: 'Sydney' },
    { name: 'Sarah', age: 27, city: 'Toronto' }]); // Replace [...] with your actual table data

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [sortField, setSortField] = useState('');
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
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
                <Column field="age" header="Age" sortable />
                <Column field="city" header="City" sortable />
            </DataTable>
        </div>
    );
}

export default MyTable;
