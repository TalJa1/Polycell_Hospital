import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
  Paper,
  Slide,
  Switch,
  Tab,
  useScrollTrigger,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { EditModeContext } from "../../provider/EditModeProvider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import { loginUser } from "../../actions/userAction";
import { setCurrentPage } from "../../actions/currentPageAction";
import { SessionData } from "../../utils/constant";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll: React.FC<Props> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

interface HeaderProps {
  title: string;
}

const TraineeHeader: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const { editMode, handleEditModeChange } = React.useContext(EditModeContext);
  // const { id } = useSelector((state: RootState) => state.user);
  const { currentPage } = useSelector((state: RootState) => state.currentPage);

  const [sessionData, setSessionData] = React.useState<SessionData | null>(
    localStorage.getItem("sessionData")
      ? JSON.parse(localStorage.getItem("sessionData") || "")
      : null
  );

  console.log(sessionData);

  const { role } = sessionData!;

  const dispatch = useDispatch();

  // const [isSchedulePage, setIsSchedulePage] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("sessionData");
    handleEditModeChange(false);
    navigate("/");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <Divider />
      <MenuItem
        onClick={() => {
          handleLogout();
        }}
      >
        Log out
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar
            sx={{
              backgroundColor: "#E6E6E6",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {props.title !== "" ? (
                <Box>
                  <strong className="header-title" style={{ color: "black" }}>
                    {props.title}
                  </strong>
                </Box>
              ) : null}
              <Tab
                label="Home"
                onClick={() => {
                  dispatch(setCurrentPage("home"));
                  if (role === "TRAINEE") {
                    navigate("/course-list-page");
                  } else {
                    navigate("/home");
                  }
                }}
                sx={{
                  color: currentPage === "home" ? "blue" : "black",
                  borderBottom:
                    currentPage === "home" ? "2px solid blue" : "none",
                }}
              />
              <Tab
                label="My courses"
                onClick={() => {
                  dispatch(setCurrentPage("myCourses"));
                  navigate("/trainee-course-page");
                }}
                sx={{
                  color: currentPage === "myCourses" ? "blue" : "black",
                  borderBottom:
                    currentPage === "myCourses" ? "2px solid blue" : "none",
                }}
              />
              {role === "TRAINEE" && (
                <Tab
                  label="Attendance"
                  onClick={() => {
                    dispatch(setCurrentPage("attendance"));
                    navigate("/trainee-attendance");
                  }}
                  sx={{
                    color: currentPage === "attendance" ? "blue" : "black",
                    borderBottom:
                      currentPage === "attendance" ? "2px solid blue" : "none",
                  }}
                />
              )}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { md: "flex" }, color: "#1B5461" }}>
              <Search>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Course"
                    inputProps={{ "aria-label": "search course" }}
                  />
                  <IconButton type="button" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Search>
              <Link
                to="/schedule-page"
                onClick={() => {
                  dispatch(setCurrentPage("schedule"));
                }}
              >
                <IconButton size="large">
                  <CalendarMonthIcon
                    sx={{
                      color: currentPage === "schedule" ? "blue" : "#1B5461",
                      borderBottom:
                        currentPage === "schedule" ? "2px solid blue" : "none",
                    }}
                  />
                </IconButton>
              </Link>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {role === "TRAINEE" ? (
                <></>
              ) : (
                <>
                  <Divider orientation="vertical" flexItem />
                  <FormControlLabel
                    label="Edit mode"
                    control={
                      <Switch
                        checked={editMode}
                        onChange={() => handleEditModeChange(!editMode)}
                      />
                    }
                  />
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {renderMenu}
    </Box>
  );
};

export default TraineeHeader;
