import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";

const PetAdoptSection = ({ adoptionRequests }: any) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "pet.name",
      headerName: "Pet Name",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{row.pet ? row.pet.name : "Unknown"}</Box>;
      },
    },
    {
      field: "pet.image",
      headerName: "Pet Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.pet.image} width={40} height={40} alt="Icon" />
          </Box>
        );
      },
    },
    { field: "createdAt", headerName: "Adoption Date", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Button
            variant="text"
            size="small"
            LinkComponent={Link}
            href={`/pets/${row.petId}`}
          >
            View Details
          </Button>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        mt: 8,
        width: {xs: "375px", sm: "100%"},
      }}
    >
      <Typography
        variant="h6"
        color="primary.main"
        textTransform="uppercase"
        mb={2}
      >
        My Adopted Pets
      </Typography>
      <Box my={2}>
        <DataGrid
          rows={adoptionRequests}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </Box>
  );
};

export default PetAdoptSection;
