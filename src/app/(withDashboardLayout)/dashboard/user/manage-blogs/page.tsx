"use client";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useDeleteBlogMutation, useGetMyBlogsQuery } from "@/redux/api/blogApi";
import { toast } from "sonner";

const ManageMyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const { data, isLoading } = useGetMyBlogsQuery([]);
  const [deleteBlog] = useDeleteBlogMutation();

  const handleEditClick = (pet: any) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleAdoptDelete = async (id: any) => {
    try {
        const res = await deleteBlog(id);
        console.log(res);
  
        if (res?.data?.id) {
          toast.success("Blog deleted successfully!");
        }
      } catch (error: any) {
        toast.error(error.message);
        console.error(error.message);
      }
  };

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
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box display="flex" gap={1}>
            <IconButton
              onClick={() => handleEditClick(row)}
              color="primary"
              aria-label="delete"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAdoptDelete(row?.id)}
              color="primary"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
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
          <h1>Loading.....</h1>
        )}
      </Box>
    </>
  );
};

export default ManageMyPage;
