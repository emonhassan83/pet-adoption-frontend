"use client";

import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import Image from "next/image";
import assets from "@/assets";

const UsersTableSection = () => {
  const { data, isLoading } = useGetAllUsersQuery({});
    // console.log(data);

  const columns: GridColDef[] = [
    { field: "name", headerName: "User Name", flex: 1 },
    {
        field: "profilePhoto",
        headerName: "User Image",
        flex: 1,
        renderCell: ({ row }) => {
          return (
            <Box>
              <Image src={row?.profilePhoto || assets.images.placeholder_img} width={40} height={40} alt="User Image" />
            </Box>
          );
        },
      },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Cell", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 }
  ];

  return (
   <>
    <Box >
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
        <LoadingPage/>
      )}
    </Box>
   </>
  );
};

export default UsersTableSection;
