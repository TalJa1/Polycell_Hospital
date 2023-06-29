import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface QuizQuestionDialogAddFromBankProps {
  open: boolean;
  onClose: () => void;
  dialogTitle: string;
  children?: React.ReactNode;
}

const QuizQuestionDialogAddFromBank: React.FC<
  QuizQuestionDialogAddFromBankProps
> = ({ open, onClose, dialogTitle, children }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, question: "1 + 1 = ?", selected: false },
    { id: 2, question: "2 + 2 = ?", selected: false },
    { id: 3, question: "3 + 3 = ?", selected: false },
  ]);

  const handleCheckboxAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setIsCheckedAll(checked);
    const updatedQuestions = questions.map((q) => ({ ...q, selected: checked }));
    setQuestions(updatedQuestions);
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const checked = event.target.checked;
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, selected: checked } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddToList = () => {
    const selectedQuestions = questions.filter((q) => q.selected);
    // Do something with the selected questions, e.g., add them to the list
    console.log(selectedQuestions);
  };

  return (
    <>
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
                <InputLabel>Question bank</InputLabel>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Select fullWidth>
                  <MenuItem>Category 1</MenuItem>
                  <MenuItem>Category 2</MenuItem>
                  <MenuItem>Category 3</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={3}>
                <InputLabel>List question</InputLabel>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isCheckedAll}
                      onChange={handleCheckboxAllChange}
                      color="primary"
                    />
                  }
                  label="Select All Questions"
                />
              </Grid>
              {questions.map((question) => (
                <Grid item xs={12} sm={12} key={question.id}>
                  <Card>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={question.selected}
                            onChange={(e) =>
                              handleCheckboxChange(e, question.id)
                            }
                            color="primary"
                          />
                        }
                        label={question.question}
                      />
                      {/* <Typography variant="subtitle1">
                        {question.question}
                      </Typography> */}
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              <Grid item xs={12} sm={5}>
                <Button variant="contained" onClick={handleAddToList}>
                  Add Selected Questions to List
                </Button>
              </Grid>
              <Grid item xs={12} sm={5} />
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizQuestionDialogAddFromBank;
