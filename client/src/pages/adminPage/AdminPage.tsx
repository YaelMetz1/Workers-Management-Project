import React, {useEffect, useState} from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as adminRequests from "../../api/AdminRequests"
import EditEmployee from "./shared/editEmployee/EditEmployee"
import AddEmployee from "./shared/addEmployee/AddEmployee";

export default function AdminPage() {



  const [rows, setRows] = useState<any[]>([]); // Initialize rows state
  const [editDialog, setEditDialog] =useState(false);
  const [addDialog, setAddDialog] =useState(false);
  const [userDetails, setUserDetails] =useState();


const columns: GridColDef[]=[
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 170 },
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

  const fetchData = async ()=> {
    const data = await adminRequests.getAllUsers();
    setRows(data || []); 
  }

  useEffect(() => {
    fetchData(); 
  }, []); 
  
  const handleUpdate = async (row: any) => {
    setUserDetails(row);
    setEditDialog(true);
  };

  const handleDelete = async (id: number) => {
    await adminRequests.deleteEmployee(id);
    fetchData();
  };

  const handleToggleAddDialog = () => {
    setAddDialog(!addDialog);
    fetchData();
  };

  const handleToggleEditDialog = () => {
    setEditDialog(!editDialog);
    fetchData();
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
      <button onClick={() => setAddDialog(true)}>Add Employee</button>
      {addDialog && <AddEmployee onClose={handleToggleAddDialog} />}
      {editDialog && <EditEmployee user={userDetails} onClose={handleToggleEditDialog} />}
      </div>)

} 
