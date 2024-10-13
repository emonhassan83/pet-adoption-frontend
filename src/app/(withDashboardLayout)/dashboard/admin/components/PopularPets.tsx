"use client";

import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";

const FeaturePets = () => {
  const { data, isLoading } = useGetAllPetsQuery({});
//   console.log(data);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Pet Name", flex: 1 },
    {
      field: "image",
      headerName: "Pet Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.image} width={40} height={40} alt="Pet Image" />
          </Box>
        );
      },
    },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "color", headerName: "Color", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "size", headerName: "Size", flex: 1 }
  ];

  return (
    <Box sx={{ width: "50%" }}>
      {!isLoading ? (
        <Box my={2}>
        <DataGrid
          rows={data?.slice(0, 5) ?? []}
          columns={columns}
          disableColumnMenu
          hideFooter
          autoHeight
          getRowId={(row) => row.id || row.name}
        />
      </Box>
      ) : (
        <LoadingPage />
      )}
    </Box>
  );
};

export default FeaturePets;
