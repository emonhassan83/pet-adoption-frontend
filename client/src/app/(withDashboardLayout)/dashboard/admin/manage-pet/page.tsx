"use client";

import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import { Box, IconButton, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import Image from "next/image";
import { useState } from "react";
import UpdatePetModal from "./components/UpdatePetModal";
import { toast } from "sonner";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import Meta from "@/components/Meta/MetaData";

const ManagePet = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  //* define and set query
  const query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;
  const [allPets, setAllPets] = useState<any>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const { data, isLoading } = useGetAllPetsQuery({ ...query });
  const [deletePet] = useDeletePetMutation();

  const pets = data?.getAllPets;
  const meta = data?.meta;
  let pageCount: number;

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleEditClick = (pet: any) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const handleAdoptDelete = async(id: any) =>{
    try {
      const res = await deletePet(id);
      // console.log(res);
      if (res?.data?.id) {
        toast.success("Pet deleted successfully!");
      }
      
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  }

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
    { field: "size", headerName: "Size", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box display="flex" gap={1}>
            <IconButton onClick={() => handleEditClick(row)} color="primary" aria-label="delete">
            <EditIcon />
          </IconButton>
            <IconButton onClick={() => handleAdoptDelete(row.id)} color="primary" aria-label="delete">
            <DeleteIcon />
          </IconButton>
            </Box>
        );
      },
    },
  ];

  return (
    <>
    <Meta
        title="Manager Pet | Petfinder - Pet Adoption Platform & Management System"
        description="This is the admin dashboard of Petfinder where admin can manage their manage pets like delete and update and more."
      />

    <UpdatePetModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        data={selectedPet}
      />
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={pets ?? []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            hideFooterPagination
            slots={{
              footer: () => {
                return (
                  <Box
                    sx={{
                      my: 2,
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Pagination
                      color="primary"
                      count={pageCount}
                      page={page}
                      onChange={handleChange}
                    />
                  </Box>
                );
              },
            }}
          />
        </Box>
      ) : (
        <LoadingPage/>
      )}
    </Box>
    </>
  );
};

export default ManagePet;
