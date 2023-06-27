import { Box, IconButton } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const ParticipantsCp: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id : any) => {
    console.log("Group ID >>>>>>>> ", id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Class Name", width: 130 },
    { field: "createdDate", headerName: "Created date", width: 130 },
    {
      field: "amounts",
      headerName: "Amounts",
      type: "number",
      width: 90,
    },
    {
      field: "option",
      headerName: "Options",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <span>
          {/* <Link to={``}>
            <VisibilityIcon sx={{ color: "blue" }}/>
          </Link> */}
          <IconButton aria-label="view" onClick={() => handleClickOpen(params.row.id)}>
            <VisibilityIcon sx={{ color: "blue" }} />
          </IconButton>
        </span>
      ),
    },
  ];

  const rows = [
    { id: 1, name: "LMS221", createdDate: "20/10/2022", amounts: 30 },
    { id: 2, name: "LMS220", createdDate: "20/10/2022", amounts: 22 },
    { id: 3, name: "LMS205", createdDate: "20/10/2022", amounts: 25 },
    { id: 4, name: "LMS226", createdDate: "20/10/2022", amounts: 33 },
    { id: 5, name: "LMS227", createdDate: "20/10/2022", amounts: 31 },
    { id: 6, name: "LMS228", createdDate: "20/10/2022", amounts: 19 },
    { id: 7, name: "LMS229", createdDate: "20/10/2022", amounts: 30 },
    { id: 8, name: "LMS222", createdDate: "20/10/2022", amounts: 30 },
    { id: 9, name: "LMS223", createdDate: "20/10/2022", amounts: 30 },
    { id: 10, name: "LMS224", createdDate: "20/10/2022", amounts: 30 },
  ];
  
  const columnsTrainees: GridColDef[] = [
    { field: "id", headerName: "Trainee ID", width: 130 },
    { field: "name", headerName: "Class Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 , sortable: false},
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
      sortable: false
    },
  ];
  
  const rowsTrainees = [
    {
      id: "SE161560",
      name: "Luu Duc Hoa",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161561",
      name: "Duong Tam",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161562",
      name: "Thai Lan",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161563",
      name: "Huan Nhi",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161564",
      name: "Lien Hoa",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161565",
      name: "Vu Hoa",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161566",
      name: "Minh Ngoc",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161567",
      name: "Tieu Vu",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161568",
      name: "Chau Tan",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
    {
      id: "SE161569",
      name: "Chau Tan Tai",
      email: "tai@gmail.com",
      phone: "0909999888",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#ececec",
        height: "fit-content",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        rowSelection={false}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Dialog
        sx={{ width: "80%", position: "right" }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              List trainees
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <DataGrid
          rows={rowsTrainees}
          columns={columnsTrainees}
          rowSelection={false}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Dialog>
    </Box>
  );
};

export default ParticipantsCp;
