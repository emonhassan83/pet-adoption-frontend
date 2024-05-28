"use client";

import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditIcon from "@mui/icons-material/Edit";

const ManageUsersPage = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
  //   console.log(data);

  const columns: GridColDef[] = [
    { field: "name", headerName: "User Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "isDeleted", headerName: "User Deleting Status", flex: 1 },
    { field: "status", headerName: "User Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box display="flex" gap={1}>
            <IconButton color="primary" aria-label="delete">
              <ManageAccountsIcon />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={data ?? []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default ManageUsersPage;
