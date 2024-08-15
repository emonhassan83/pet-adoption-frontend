"use client";

import { useState, useEffect } from "react";
import { Box, Container, Grid, Pagination } from "@mui/material";
import axios from "axios";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import PetCard from "./components/petCard/PetCard";

const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    species: "",
    age: "",
    location: "",
    color: "",
    gender: "",
  });

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets`,
          // {
          //   params: {
          //     limit: 10,
          //     page,
          //     ...filters,
          //   },
          // }
        );
        setPets(data.data);
        setTotalPages(data.totalPages);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, [page, filters]);

  

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ display: "flex", gap: 4 }}>
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <Box sx={{ flex: 1 }}>
          <Grid container spacing={4}>
            {pets.map((pet: any) => (
              <Grid item xs={12} sm={6} md={4} key={pet.id}>
                <PetCard pet={pet} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            sx={{ mt: 4 }}
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PetsPage;
