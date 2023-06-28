import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface QuizQuestionDialogAddProps {
  open: boolean;
  onClose: () => void;
  dialogTitle: string;
  children?: React.ReactNode;
}

const QuizQuestionDialogAdd: React.FC<QuizQuestionDialogAddProps> = ({
  open,
  onClose,
  dialogTitle,
  children,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{dialogTitle}</DialogTitle>
      <Divider />
      <DialogContent>
        <Typography variant="h5">
          Random question from an existing category
        </Typography>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <InputLabel>Category</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                // value={age}
                fullWidth
                // onChange={handleChange}
              >
                <MenuItem>Category 1</MenuItem>
                <MenuItem>Category 2</MenuItem>
                <MenuItem>Category 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel>Number of</InputLabel>
              <InputLabel>random question</InputLabel>

            </Grid>
            <Grid item xs={12} sm={9}>
            <Select
                // value={age}
                fullWidth
                // onChange={handleChange}
              >
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>50</MenuItem>

              </Select>
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputLabel>Questions matching this filter: 3</InputLabel>
            </Grid>
            <Grid item xs={12} sm={8}>
              
            </Grid>


            {/* <Grid item xs={12} sm={6} />
              <Grid item xs={12} sm={5} /> */}
            <Grid item xs={12} sm={3}>
              <Button variant="contained">Save</Button>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button variant="contained">Cancel</Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default QuizQuestionDialogAdd;
