import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const FilterCourseCp = () => {
  const [age, setAge] = React.useState("0");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [sortBy, setSortBy] = React.useState("0");

  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleSearch = () => {
    // Add your search logic here
    console.log("Performing search...");
  };
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <FormControl>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={10}>Category 1</MenuItem>
          <MenuItem value={20}>Category 2</MenuItem>
          <MenuItem value={30}>Category 3</MenuItem>
        </Select>
      </FormControl>
      <TextField variant="outlined" size="small" placeholder="Search" />
      <FormControl>
        <Select
          value={sortBy}
          onChange={handleChangeSortBy}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value={0}>Popular courses</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterCourseCp;
