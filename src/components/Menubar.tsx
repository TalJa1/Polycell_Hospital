import React from "react";
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

const Menubar: React.FC = () => {
  const { collapseSidebar, broken, toggleSidebar } = useProSidebar();
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
        <Menu>
          <MenuItem icon={<AccessibilityIcon />} component={<Link to="/" />}>
            Home
          </MenuItem>
          <MenuItem component={<Link to="/about" />}>About</MenuItem>
          <MenuItem component={<Link to="/" />}>Community</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <div style={{ marginBottom: "16px" }}>
          {broken && (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          )}
        </div>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
};

export default Menubar;
