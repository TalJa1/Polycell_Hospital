import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  makeStyles,
} from "@mui/material";

import React, { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { RootState } from "../../reduxs/Root";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImportTraineeSuccess,
  fetchTraineeTotalSuccess,
  fetchTraineesSuccess,
} from "../../actions/traineeAction";
import traineeApi from "../../api/traineeApi";
import {
  DataGrid,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GridCallbackDetails,
  GridCellParams,
  GridColDef,
  GridFilterItem,
  GridFilterModel,
  GridRowClassNameParams,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  getGridStringOperators,
} from "@mui/x-data-grid";
import { Trainee } from "../../models/traineeModel";
import { ErrorItem } from "../../utils/constant";
import WarningIcon from "@mui/icons-material/Warning";
import "../../styles/ErrorOverLap.css"; // Import the CSS file

interface ClassAddFormProps {
  selectTraineeList: GridRowSelectionModel;
  setSelectTraineeList: React.Dispatch<
    React.SetStateAction<GridRowSelectionModel>
  >;
  overlapErrors: GridRowSelectionModel;
  overlapErrorsDescription: ErrorItem[];
}

const ClassAddFormPopup: React.FC<ClassAddFormProps> = ({
  selectTraineeList,
  setSelectTraineeList,
  overlapErrors,
  overlapErrorsDescription,
}) => {
  console.log(overlapErrors);

  const { trainees, allTrainees } = useSelector(
    (state: RootState) => state.trainee
  );
  const dispatch = useDispatch();
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
    console.log("SET TRAINEE");
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

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      importTrainee(file);
    }
  }

  const importTrainee = async (file: File) => {
    try {
      const response = await traineeApi.importTrainee(file);
      var listItem = response.data as Trainee[];
      dispatch(fetchImportTraineeSuccess(response.data));
      // console.log(allTrainees)
      var newTrainee = response.data.map(
        (e: any) => e?.id
      ) as GridRowSelectionModel;
      console.log(newTrainee);
      setRowSelectionModel([...rowSelectionModel, ...newTrainee]);
      setSelectTraineeList([...newTrainee]);
      setSelectedTrainees(listItem);
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  };

  const getRowClassName = (params: GridRowClassNameParams): string => {
    if (overlapErrors.includes(params.id)) {
      return "selected-row";
    }
    return "";
  };

  const renderCell = (params: GridCellParams): React.ReactNode => {
    if (overlapErrors.includes(params.id) && params.field === "errorColumn") {
      const errorItem = overlapErrorsDescription.find(
        (item) => item.id === params.id
      );
      if (errorItem) {
        return (
          <>
            <Tooltip title={"Overlap: " + errorItem.overlappedDayTimes.join(', ')}>
              <WarningIcon />
            </Tooltip>
          </>
        );

        // <span style={{
        //   display: "flex"
        // }}>

        //   {errorItem.overlappedDayTimes.join(', ')}
        //   </span>;
      }
    }
    return params.value as React.ReactNode;
  };

  const errorColumn: GridColDef = {
    field: "errorColumn",
    headerName: "",
    width: 300,
    sortable: false,
    filterable: false,
    renderCell: renderCell,
  };

  const columnsWithErrorMessage: GridColDef[] = [...columns, errorColumn];

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
                  bgcolor: "black",
                  color: "white",
                  marginRight: "10px",
                  "&:hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
              >
                Enroll student
              </Button>

              <Button
                sx={{
                  bgcolor: "black",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
              >
                <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
                  Import from file
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </label>
              </Button>

              {/* <Button autoFocus color="inherit" onClick={handleSave}>
                Save
              </Button> */}
            </Box>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          <Box>
            <DataGrid
              sx={{
                "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
                  {
                    display: "none",
                  },
                "& .MuiDataGrid-cellCheckbox > span": {
                  display: "none",
                },
                "& .MuiDataGrid-row.Mui-selected ": {
                  backgroundColor: "#ffffcc",
                },
              }}
              rows={selectedTrainees}
              columns={columnsWithErrorMessage}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[5]}
              pagination
              rowSelectionModel={overlapErrors}
              checkboxSelection
              keepNonExistentRowsSelected
              getRowClassName={getRowClassName}
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

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const [filterParams, setFilterParams] = useState<any>({});

  const fetchTrainees = useCallback(async () => {
    try {
      const param = {
        page: paginationModel.page + 1,
        size: "10",
        ...filterParams,
      };

      console.log(param);

      const response = await traineeApi.getTraineeList(param);
      const { data } = response;

      dispatch(fetchTraineesSuccess(data.items));
      dispatch(fetchTraineeTotalSuccess(data.totalItems));
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  }, [dispatch, paginationModel.page]);

  const handleFilterChange = useCallback(
    async (filterModel: GridFilterModel) => {
      // Extract the filter values from the filter model
      const { items, quickFilterValues } = filterModel;
      // const filterParams: any = {};
      var tmpParam: any = {};

      // Iterate over the filter items and add the filter parameters to the filterParams object
      if (items.length > 0) {
        items.forEach((filterItem: GridFilterItem) => {
          const { field, operator, value } = filterItem;
          console.log(filterItem);
          // var filterKey = "";
          // `filter[${field}][${operator}]`;
          if (field === "title" && value !== "") {
            // filterKey = field;
            tmpParam = {
              title: value,
            };
          } else {
            tmpParam = {};
          }

          // filterParams[filterKey] = value;
        });
      } else {
        tmpParam = {};
      }
      setFilterParams(tmpParam);

      // console.log(filterParams);
      console.log(items);

      // Apply the filter parameters to the server-side API call and update the trainees list
      const param = {
        page: 0,
        size: "10",
        ...tmpParam,
      };

      console.log(param);

      const response = await traineeApi.getTraineeList(param);
      const { data } = response;

      console.log(data);
      dispatch(fetchTraineesSuccess(data.items));
      dispatch(fetchTraineeTotalSuccess(data.totalItems));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchTrainees();
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
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
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
        filterMode="server"
        onFilterModelChange={handleFilterChange}
      />
    </>
  );
}

export default ClassAddFormPopup;

const columns: GridColDef[] = [
  { field: "code", headerName: "Code", width: 90, filterable: false },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    filterable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    filterable: false,
    sortable: false,
  },
  {
    field: "birthdate",
    headerName: "Birhdate",
    width: 150,
    filterable: false,
    sortable: false,
  },
  {
    field: "title",
    headerName: "Tilte",
    sortable: false,
    width: 200,
    filterOperators: getGridStringOperators().filter((op) =>
      ["equals"].includes(op.value)
    ),
  },
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
