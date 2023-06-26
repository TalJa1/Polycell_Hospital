import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import UploadFileIcon from "@mui/icons-material/UploadFile";

const FormActivityUrl : React.FC = () => {
    const [age, setAge] = useState<string>("");
  
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string);
    };
  
    const categories: string[] = [
      "science",
      "sports",
      "business",
      "politics",
      "entertainment",
      "technology",
      "world",
      "all",
    ];
  
    return (
      <React.Fragment>
       <Box sx={{ padding: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
              Adding new URL
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  
                >
                  Name*
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="title"
                  name="title"
                //   label="Title"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  
                >
                  External URL*
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="title"
                  name="title"
                //   label="Title"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  
                >
                  Description
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  id="outlined-multiline-static"
                //   label="Content"
                  multiline
                  fullWidth
                  rows={4}
                />
              </Grid>

              
              {/* <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} /> */}
              <Grid item xs={12} sm={2}>
                <Button variant="contained">
                  Save
                </Button>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={5} />
            </Grid>
          </Box>
      </React.Fragment>
    );
  };

export default FormActivityUrl