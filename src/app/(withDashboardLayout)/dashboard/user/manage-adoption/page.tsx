"use client";

import { useGetMyAdoptionRequestsQuery } from "@/redux/api/adoptionApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageAdoptionPage = () => {
    const { data, isLoading } = useGetMyAdoptionRequestsQuery({});
    console.log(data);
  
    const columns: GridColDef[] = [
      {
          field: "user.name",
          headerName: "Req. User",
          flex: 1,
          renderCell: ({ row }) => {
            return <Box>{row.user ? row.user.name : "Unknown"}</Box>;
          },
        },
      {
          field: "user.email",
          headerName: "User Email",
          flex: 1,
          renderCell: ({ row }) => {
            return <Box>{row.user ? row.user.email : "Unknown"}</Box>;
          },
        },
      {
          field: "pet.name",
          headerName: "Pet Name",
          flex: 1,
          renderCell: ({ row }) => {
            return <Box>{row.pet ? row.pet.name : "Unknown"}</Box>;
          },
        },
      {
        field: "image",
        headerName: "Pet Image",
        flex: 1,
        renderCell: ({ row }) => {
          return (
            <Box>
              <Image src={row.pet.image} width={40} height={40} alt="Pet Image" />
            </Box>
          );
        },
      },
      { field: "animalSleep", headerName: "Animal Sleep", flex: 1 },
      { field: "status", headerName: "Status", flex: 1 },
      {
        field: "action",
        headerName: "Action",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell: ({ row }) => {
          return (
            <IconButton color="primary" aria-label="delete">
              <DeleteIcon />
            </IconButton>
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

export default ManageAdoptionPage;