import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../styles/Menubar.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../assets/imgs/logo51.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from "react-redux";

const Menubar: React.FC = () => {
  const { collapseSidebar, broken, toggleSidebar, collapsed } = useProSidebar();
  const isLogined = useSelector((state: any) => state.user.isLogin);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        breakPoint="xl"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            height: "100%",
          },
        }}
      >
        {collapsed ? (
          <div className="menutittle">
            <span>I</span>
          </div>
        ) : (
          <div className="menutittle">
            <img
              className="image"
              src={logo}
              alt=""
              style={{ color: "black" }}
            />
            {/* <span>INKWELL</span> */}
          </div>
        )}
        <Menu>
          <MenuItem icon={<AccessibilityIcon />} component={<Link to="/" />}>
            Home
          </MenuItem>
          <MenuItem
            icon={<SchoolIcon />}
            component={<Link to="/class-management" />}
          >
            Class
          </MenuItem>
          <MenuItem
            icon={<SchoolIcon />}
            component={<Link to="/class-acceptance" />}
          >
            Class Acceptance
          </MenuItem>
          <MenuItem
            icon={<SchoolIcon />}
            component={<Link to="/trainee-course-page" />}
          >
            Course Page
          </MenuItem>
          <MenuItem icon={<InfoIcon />} component={<Link to="/about" />}>
            About
          </MenuItem>
          <MenuItem icon={<ForumIcon />} component={<Link to="/" />}>
            Community
          </MenuItem>
          {isLogined === false ? (
            <MenuItem icon={<LoginIcon />} component={<Link to="/login" />}>
              Login
            </MenuItem>
          ) : (
            <MenuItem icon={<LogoutIcon />} component={<Link to="/" />}>
              logout
            </MenuItem>
          )}
        </Menu>
        <main className="togglebtn">
          <div style={{ marginBottom: "16px" }}>
            {broken || (
              <div onClick={() => collapseSidebar()}>
                <MenuIcon />
              </div>
            )}
          </div>
        </main>
      </Sidebar>
      {broken && (
        <div className="sb-button" onClick={() => toggleSidebar()}>
          <MenuIcon />
        </div>
      )}
    </div>
  );
};

export default Menubar;
