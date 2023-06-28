import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormActivityAssignment: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
        Adding new URL
      </Typography>

      <AssignmentGenerator />

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
          <Button variant="contained">Save and display</Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained">Cancel</Button>
        </Grid>
        <Grid item xs={12} sm={5} />
      </Grid>
    </React.Fragment>
  );
};

const strongStyle = {
  fontSize: "30px",
};

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content: any) => {
    setEditorContent(content);
  };

  return <ReactQuill value={editorContent} onChange={handleChange} />;
};

export const AssignmentGenerator = () => {

  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <strong style={strongStyle}>General</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <RichTextEditor />
          
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <strong style={strongStyle}>Available</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <strong style={strongStyle}>Submission types</strong>
          </Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

export default FormActivityAssignment;
