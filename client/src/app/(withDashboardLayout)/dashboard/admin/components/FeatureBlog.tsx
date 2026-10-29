"use client";

import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import {
  useGetAllBlogsQuery,
} from "@/redux/api/blogApi";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";

const FeatureBlogs = () => {
  const { data, isLoading } = useGetAllBlogsQuery([]);

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Blog Title",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Author",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{row.author ? row.author.name : "Unknown"}</Box>;
      },
    },
    {
      field: "email",
      headerName: "Author Email",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{row.author ? row.author.email : "Unknown"}</Box>;
      },
    },
    {
      field: "image",
      headerName: "Blog Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.image} width={40} height={40} alt="Pet Image" />
          </Box>
        );
      },
    },
    { field: "category", headerName: "Blog Category", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <>
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
          <LoadingPage/>
        )}
      </Box>
    </>
  );
};

export default FeatureBlogs;
