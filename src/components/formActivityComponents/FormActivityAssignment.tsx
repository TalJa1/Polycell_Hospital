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
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import "../../styles/DropdownBox.css";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const FormActivityAssignment: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
        Assignment
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

const FileDropzone: React.FC = () => {
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    // Do something with the dropped files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <div className="dropzone-box">
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>
    </div>
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

const BasicSelect: React.FC<{ contentArray: Array<any> }> = ({
  contentArray,
}) => {
  const [maxFiles, setMaxFiles] = useState<number>(1);

  const handleChange = (event: any) => {
    setMaxFiles(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="max-file-select-label">Max Files</InputLabel>
        <Select
          labelId="max-file-select-label"
          id="max-file-select"
          value={maxFiles.toString()}
          label="Max Files"
          onChange={handleChange}
        >
          {contentArray.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export const AssignmentGenerator = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
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
          <Grid container direction="column" rowGap={2}>
            <Grid item container>
              <Grid item xs={3}>
                Assignment name
              </Grid>
              <Grid item xs={9}>
                <RichTextEditor />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                Description
              </Grid>
              <Grid item xs={9}>
                <RichTextEditor />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                Instruction
              </Grid>
              <Grid item xs={9}>
                <RichTextEditor />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                File submission
              </Grid>
              <Grid item xs={9}>
                <FileDropzone />
                {/* <RichTextEditor /> */}
              </Grid>
            </Grid>
          </Grid>
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
          <Grid container direction="column" rowGap={2}>
            <Grid item container>
              <Grid item xs={3}>
                Allow submission from
              </Grid>
              <Grid item xs={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Controlled picker"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                Due date
              </Grid>
              <Grid item xs={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Controlled picker"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                Cut-off date
              </Grid>
              <Grid item xs={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Controlled picker"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                Remind me to grade by
              </Grid>
              <Grid item xs={9}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Controlled picker"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
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
        <AccordionDetails>
          <Grid container direction="column" rowGap={2}>
            <Grid item container>
              <Grid item xs={3}>
                Max number files upload
              </Grid>
              <Grid item xs={9}>
                <BasicSelect contentArray={MaxfileAmounts} />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                Max size
              </Grid>
              <Grid item xs={9}>
                <BasicSelect contentArray={MaxfileLarge} />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                File type submission
              </Grid>
              <Grid item xs={9}>
                <BasicSelect contentArray={FileTypeSubmission} />
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const MaxfileAmounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const MaxfileLarge = ["1MB", "500KB", "50KB"];
const FileTypeSubmission = ["JPG", "TXT", "JDPG"];

export default FormActivityAssignment;
