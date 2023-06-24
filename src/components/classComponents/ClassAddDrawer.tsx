import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";

const ClassAddDrawer: React.FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    console.log("OPEN")
    setIsOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setIsOpenDrawer(false);
  };

  return (
    <Box>
      <Button onClick={handleDrawerOpen} color="inherit">
        Enroll student
      </Button>
      <Drawer
        anchor="right"
        open={isOpenDrawer}
        onClose={handleDrawerClose}
        // Add 'DrawerProps' type here
        // Example: type DrawerProps = import("@mui/material/Drawer").DrawerProps;
        // ...other props if needed
      >
        {/* Drawer content goes here */}
        <div>Drawer Content</div>
      </Drawer>
    </Box>
  );
};

export default ClassAddDrawer;
