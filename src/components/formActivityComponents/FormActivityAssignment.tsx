import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const FormActivityAssignment : React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
        Adding new URL
      </Typography>
      
      <Box
        sx={{
          height: "20px",
        }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Button variant="contained">Save and return course</Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" >
            Save and display
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained">Cancel</Button>
        </Grid>
        <Grid item xs={12} sm={5} />
      </Grid>
    </React.Fragment>
  )
}

export default FormActivityAssignment