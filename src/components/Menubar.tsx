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
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../assets/imgs/logo51.png";

const Menubar: React.FC = () => {
  const { collapseSidebar, broken, toggleSidebar, collapsed } = useProSidebar();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        breakPoint="lg"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            // backgroundColor: "red",
            // width: "100%"
            height: "100vh",
          },
        }}
      >
        {collapsed ? (
          <div className="menutittle">
            <span>I</span>
          </div>
        ) : (
          <div className="menutittle">
            <img className="image" src={logo} alt="" style={{color : "black"}} />
            {/* <span>INKWELL</span> */}
          </div>
        )}
        <Menu>
          <MenuItem icon={<AccessibilityIcon />} component={<Link to="/" />}>
            Home
          </MenuItem>
          <MenuItem icon={<InfoIcon />} component={<Link to="/about" />}>
            About
          </MenuItem>
          <MenuItem icon={<ForumIcon />} component={<Link to="/" />}>
            Community
          </MenuItem>
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
