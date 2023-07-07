import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import classApi from "../../api/classApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import { fetchClassByProgramId } from "../../actions/classAction";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Class, Overlap } from "../../models/classManagementModel";
import { formatTimeSlot } from "../../utils/formatDay";
import { useNavigate } from "react-router-dom";
import { ErrorItem } from "../../utils/constant";

type ChooseClassEnrollProps = {
  dialogOpen: boolean;
  handleCloseDialog: () => void;
};

const ChooseClassEnroll: React.FC<ChooseClassEnrollProps> = ({
  dialogOpen,
  handleCloseDialog,
}) => {
  const navigate = useNavigate();
  const { list } = useSelector((state: RootState) => state.class);
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = useState<GridRowSelectionModel>();
  const [listOverlap, setListOverlap] = useState<Overlap[]>([]);
  const [overlapErrors, setOverlapErrors] = useState<ErrorItem[]>([]);
  const [openWarningOverlap, setOpenWarningOverlap] = useState(false);





  const fetchClass = useCallback(async () => {
    try {
      const param = {
        page: 0,
        size: 999,
        filterAnd:
          "status|eq|PENDING&program.id|jn|73574861-62eb-4965-9ebc-cecbb50ea11f",
      };

      const response = await classApi.getClassesByProgramId(param);
      const { data } = response;

      //   console.log(data);
      dispatch(fetchClassByProgramId(data.items));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch]);

  console.log(list);

  useEffect(() => {
    fetchClass();
  }, [fetchClass]);

  const processedList = list.map((item: Class) => {
    console.log(formatTimeSlot(item.generalSchedule));
    return {
      ...item,
      trainerName: item.trainer?.name || "",
      programName: item.program?.name || "",
      cycleName: item.cycle?.name || "",
      generalSchedule: formatTimeSlot(item.generalSchedule),
    };
  });

  const handleSave = async () => {
    try {
      const param = {
        classId: selectedRow?.at(0),
        traineeId: "524a14d5-2cd4-48fb-b66a-fd195823a1b6",
      };

      
    //   console.log(param);

      const response = await classApi.enrollToClassByTrainee(param);
      const { data, status } = response;

      if (status === 200) {
        if (data.overlappedSchedule === null) {
          // console.log("Post request successful:", response.data);
        //   navigate("/class-management");
        handleCloseDialogOverlap();
        } else {
          setListOverlap(data.overlappedSchedule);
        //   console.log(data.overlappedSchedule)
          createError(data.overlappedSchedule);
          handleOpenDialogOverlap();
        }
      }
      console.log(response)
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  };


  const createError = (overlappedSchedules: any) => {

    var listError: ErrorItem[] = [];
    console.log(overlappedSchedules);
    const errorItem: ErrorItem = {
        id: "",
        email: "",
        overlappedDayTimes: [overlappedSchedules.overlappedDayTimes],
      };
      listError.push(errorItem);
      setOverlapErrors([...listError]);
  };

  const handleOpenDialogOverlap = () => {
    setOpenWarningOverlap(true);
  };

  const handleCloseDialogOverlap = () => {
    setOpenWarningOverlap(false);
  };

  return (
    <Box>
        <Dialog open={dialogOpen} onClose={handleCloseDialog} fullScreen>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Enroll to class
          </Typography>
          <Button autoFocus color="inherit" onClick={handleSave}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <DataGrid
          rows={processedList}
          columns={columns}
          disableDensitySelector
          slots={{
            toolbar: CustomToolbar,
          }}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setSelectedRow(newRowSelectionModel);
          }}
        />
      </DialogContent>
    </Dialog>
    <Dialog
        open={openWarningOverlap}
        onClose={handleCloseDialogOverlap}
        fullWidth
        maxWidth="md"
      >
        <div style={styles.dialogWrapper}>
          <DialogTitle sx={styles.dialogTitle}>Warning</DialogTitle>
          <DialogContent sx={styles.dialogContent}>
            <div style={styles.dialogContentScrollable}>
              You are overlapped
            </div>
          </DialogContent>
          <DialogActions sx={styles.dialogActions}>
            <Button
              onClick={handleCloseDialogOverlap}
              autoFocus
              variant="contained"
              color="primary"
            >
              Okay
            </Button>
          </DialogActions>
        </div>

      </Dialog>
    </Box>
    
  );
};

export default ChooseClassEnroll;

const columns: GridColDef[] = [
  { field: "code", headerName: "Code", width: 100 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "trainerName", headerName: "Trainer", width: 100 },
  { field: "generalSchedule", headerName: "General Schedule", width: 200 },
  { field: "programName", headerName: "Program Name", width: 300 },
  { field: "startDate", headerName: "Start Date", width: 100 },
  { field: "endDate", headerName: "End Date", width: 100 },
];

interface CustomToolbarProps {
  setFilterButtonEl: React.Dispatch<
    React.SetStateAction<HTMLButtonElement | null>
  >;
}

function CustomToolbar({ setFilterButtonEl }: CustomToolbarProps) {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <GridToolbarFilterButton ref={setFilterButtonEl} />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

const styles = {
    dialogWrapper: {
      backgroundColor: "#f2f2f2",
      padding: "20px",
      borderRadius: "4px",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    },
    dialogTitle: {
      backgroundColor: "#e0e0e0",
      fontSize: "20px",
      padding: "10px",
      textAlign: "center",
      color: "#333",
      fontWeight: "bold",
    },
    dialogContent: {
      margin: "20px 0",
      padding: "20px", // Increase padding as desired
      backgroundColor: "#fff",
      height: "300px", // Set desired height for scrollable content
      overflow: "auto", // Enable scrollbar when content exceeds height
    },
    dialogContentScrollable: {
      padding: "0",
    },
    email: {
      fontWeight: "bold",
      paddingBottom: "5px",
    },
    overlappedTimes: {
      fontStyle: "italic",
      paddingBottom: "5px",
    },
    overlappedList: {
      margin: "10px 0",
      padding: "0",
      listStyleType: "disc",
      fontSize: "14px",
    },
    overlappedListItem: {
      marginBottom: "8px",
    },
    divider: {
      margin: "16px 0",
      backgroundColor: "#e0e0e0",
    },
    dialogActions: {
      marginTop: "20px",
      padding: "10px",
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
    },
  };