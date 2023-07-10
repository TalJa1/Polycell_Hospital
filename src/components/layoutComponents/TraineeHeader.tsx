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
  Switch,
  Tab,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { EditModeContext } from "../../provider/EditModeProvider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxs/Root";
import { loginUser } from "../../actions/userAction";

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

interface HeaderProps {
  title: string;
}

const TraineeHeader: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const { editMode, handleEditModeChange } = React.useContext(EditModeContext);
  const { role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [windowTop, setWindowTop] = React.useState<number>(0);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const action1 = loginUser(false, "", "");
    dispatch(action1);
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
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  );

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setWindowTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position={windowTop === 0 ? "static" : "fixed"}>
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
                if (role === "TRAINEE") {
                  navigate("/course-list-page");
                } else {
                  navigate("/home");
                }
              }}
              sx={{
                color: "black",
              }}
            />
            <Tab
              label="My courses"
              onClick={() => navigate("/trainee-course-page")}
              sx={{
                color: "black",
              }}
            />
            {role === "TRAINEE" && (
              <Tab
                label="Attendance"
                onClick={() => navigate("/trainee-attendance")}
                sx={{
                  color: "black",
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
            <Link to="/schedule-page">
              <IconButton size="large">
                <CalendarMonthIcon
                  sx={{
                    color: "#1B5461",
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
      {renderMenu}
      {/* {props.title !== "" ? (
        <Box>
          <h1 className="header-title">{props.title}</h1>
          <hr className="hr-style" />
        </Box>
      ) : null} */}
    </Box>
  );
};

export default TraineeHeader;


