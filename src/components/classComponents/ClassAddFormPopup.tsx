import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Grid,
  IconButton,
  InputLabel,
  Pagination,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { RootState } from "../../reduxs/Root";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTraineeTotalSuccess,
  fetchTraineesRequest,
  fetchTraineesSuccess,
} from "../../actions/traineeAction";
import traineeApi from "../../api/traineeApi";
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import ClassAddDrawer from "./ClassAddDrawer";
import { Trainee } from "../../models/traineeModel";

interface ClassAddFormProps {
  selectTraineeList: GridRowSelectionModel;
  setSelectTraineeList: React.Dispatch<
    React.SetStateAction<GridRowSelectionModel>
  >;
}

const ClassAddFormPopup: React.FC<ClassAddFormProps> = ({
  selectTraineeList,
  setSelectTraineeList,
}) => {
  const { trainees, allTrainees } = useSelector(
    (state: RootState) => state.trainee
  );
  const [open, setOpen] = React.useState(false);
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const [rowSelectedModel, setRowSelectedModel] =
    React.useState<GridRowSelectionModel>([]);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [selectedTrainees, setSelectedTrainees] = useState<
    (Trainee | undefined)[]
  >([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setRowSelectionModel([...selectTraineeList]);
    setOpen(false);
  };

  // const handleSave = () => {
  //   setSelectTraineeList(rowSelectionModel);
  //   setOpen(false);
  // };

  const handleAddToSelectTrainee = () => {
    var item = rowSelectionModel.map((e) =>
      allTrainees.find((i) => i.id === e)
    );
    console.log(item);
    setSelectedTrainees(item);
    setSelectTraineeList(rowSelectionModel);
    setRowSelectedModel(rowSelectionModel);
    setIsOpenDrawer(false);
  };

  const handleDrawerOpen = () => {
    console.log("OPEN");
    setIsOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    var list = selectedTrainees.map((e) => e?.id) as string[];
    setRowSelectionModel([...list]);
    setIsOpenDrawer(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#000",
        }}
        onClick={handleClickOpen}
      >
        List student
      </Button>
      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "white", textAlign: "center" }}
            >
              Add Trainee
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <Button
                onClick={handleDrawerOpen}
                sx={{
                  bgcolor: "white",
                  marginRight: "10px"
                }}
              >
                Enroll student
              </Button>

              <Button
                
                sx={{
                  bgcolor: "white",
                }}
              >
                Import
              </Button>
              {/* <Button autoFocus color="inherit" onClick={handleSave}>
                Save
              </Button> */}
            </Box>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <Box>
            {/* <TableStudent
              rowSelectionModel={rowSelectionModel}
              setRowSelectionModel={setRowSelectionModel}
            /> */}
            <DataGrid
              rows={selectedTrainees}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[5]}
              pagination
            />
          </Box>

          <Box
            sx={{
              paddingTop: "10px",
              float: "right",
            }}
          ></Box>
          <Dialog
            fullWidth
            maxWidth={"lg"}
            open={isOpenDrawer}
            onClose={handleDrawerClose}
          >
            {/* Drawer content goes here */}
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleDrawerClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  List student
                </Typography>
                <Button color="inherit" onClick={handleAddToSelectTrainee}>
                  Add
                </Button>
              </Toolbar>
            </AppBar>
            <DialogContent dividers>
              <Box>
                <TableStudent
                  rowSelectionModel={rowSelectionModel}
                  setRowSelectionModel={setRowSelectionModel}
                />
              </Box>

              <Box
                sx={{
                  paddingTop: "10px",
                  float: "right",
                }}
              ></Box>
            </DialogContent>
          </Dialog>
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface TableStudentProps {
  rowSelectionModel: GridRowSelectionModel;
  setRowSelectionModel: (selectionModel: GridRowSelectionModel) => void;
}

function TableStudent({
  rowSelectionModel,
  setRowSelectionModel,
}: TableStudentProps) {
  const dispatch = useDispatch();
  const { trainees, total } = useSelector((state: RootState) => state.trainee);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  const fetchTrainees = useCallback(async () => {
    try {
      const param = {
        page: paginationModel.page + 1,
        size: "10",
      };

      const response = await traineeApi.getTraineeList(param);
      const { data } = response;

      dispatch(fetchTraineesSuccess(data.items));
      dispatch(fetchTraineeTotalSuccess(data.totalItems));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch, paginationModel.page]);

  useEffect(() => {
    fetchTrainees();
    console.log("Hello");
  }, [fetchTrainees]);

  const setRowSelectModels = (
    newRowSelectionModel: GridRowSelectionModel,
    detail: GridCallbackDetails<any>
  ) => {
    setRowSelectionModel(newRowSelectionModel);
    console.log(detail.reason);
    // setSelectedTrainees([...]);
  };

  return (
    <>
      <DataGrid
        rows={trainees}
        rowCount={total}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        pagination
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
          // console.log(detail)
          // setSelectedTrainees([...]);
        }}
        rowSelectionModel={rowSelectionModel}
        checkboxSelection
        keepNonExistentRowsSelected
      />
    </>
  );
}

export default ClassAddFormPopup;

const columns: GridColDef[] = [
  { field: "code", headerName: "Code", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
    sortable: false,
  },
  {
    field: "birthdate",
    headerName: "Birhdate",
    width: 200,
    sortable: false,
  },
  {
    field: "title",
    headerName: "Tilte",
    sortable: false,
    width: 200,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

interface CustomToolbarProps {
  setFilterButtonEl: React.Dispatch<
    React.SetStateAction<HTMLButtonElement | null>
  >;
}

function CustomToolbar({ setFilterButtonEl }: CustomToolbarProps) {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonEl} />
    </GridToolbarContainer>
  );
}
