import React, {useEffect, useState} from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as adminRequests from "../../api/AdminRequests"
import useCustomNavigate from "../../hooks/UseNavigate";

export default function AdminPage() {


  const navigate = useCustomNavigate();

const columns: GridColDef[]=[
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phoneNumber', headerName: 'PhoneNumber', width: 130},
    { field: 'jobTitle', headerName: 'JobTitle', width: 200},
    { field: 'salary', headerName: 'Salary', type: 'number', width: 100},
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleUpdate(params.row)}>Update</button>
          <button onClick={() => handleDelete(params.row.id)}>Delete</button>
        </div>
      ),
    },
  ];

  const [rows, setRows] = useState<any[]>([]); // Initialize rows state

  useEffect(() => {
    async function fetchData() {
      const data = await adminRequests.getAllUsers();
      setRows(data || []); 
    }

    fetchData(); 
  }, []); 
  
  const handleUpdate = async (row: any) => {
    await adminRequests.updateEmployee({
      name: row.name as string,
      email: row.email as string,
      phoneNumber: row.phoneNumber as string,
      jobTitle: row.jobTitle as string,
      salary: +(row.salary as string),
    })
  };

  const handleDelete = async (id: number) => {
    await adminRequests.deleteEmployee(id);
  };

  

    return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
      />
      <button onClick={() => {navigate("/newEmployee")}}>Add Employee</button>
      </div>);

} 