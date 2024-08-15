import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

const FilterSidebar = ({ filters, setFilters }: { filters: any; setFilters: React.Dispatch<React.SetStateAction<any>> }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setFilters({
      species: "",
      age: "",
      location: "",
      color: "",
      gender: "",
    });
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "25%" },
        padding: 2,
        backgroundColor: "#f0f4f8",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" component="h3" mb={2} fontWeight={600}>
        Filter Pets
      </Typography>
      <TextField
        select
        label="Species"
        name="species"
        value={filters.species}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="dog">Dog</MenuItem>
        <MenuItem value="cat">Cat</MenuItem>
        {/* Add more options as needed */}
      </TextField>
      <TextField
        select
        label="Age"
        name="age"
        value={filters.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="puppy">Puppy</MenuItem>
        <MenuItem value="adult">Adult</MenuItem>
        <MenuItem value="senior">Senior</MenuItem>
        {/* Add more options as needed */}
      </TextField>
      <TextField
        select
        label="Location"
        name="location"
        value={filters.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Any</MenuItem>
        {/* Add location options here */}
      </TextField>
      <TextField
        select
        label="Color"
        name="color"
        value={filters.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Any</MenuItem>
        {/* Add color options here */}
      </TextField>
      <TextField
        select
        label="Gender"
        name="gender"
        value={filters.gender}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleReset}
        sx={{ mt: 2 }}
        fullWidth
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;
