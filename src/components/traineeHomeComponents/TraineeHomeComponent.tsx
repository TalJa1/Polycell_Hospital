import React, { useState } from "react";
import TraineeHomeCarouselCp from "./TraineeHomeCarouselCp";
import TraineeHomeListCourseCp from "./TraineeHomeListCourseCp";
import { Box } from "@mui/material";
import { Radio } from "antd";

const TraineeHomeComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const handleChange = (e: any) => {
    setSelectedTab(e.target.value);
  };

  return (
    <div>
      <TraineeHomeCarouselCp />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(246, 249, 255)",
        }}
      >
        <Box
          sx={{
            width: "70%",
          }}
        >
          {/* <FilterCourseCp /> */}
          <div>
            <Box
              sx={{
                paddingTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Radio.Group value={selectedTab} onChange={handleChange} size="large">
                <Radio.Button
                  value="ALL"
                  style={
                    selectedTab === "ALL" ? selectedButtonStyle : buttonStyle
                  }
                >
                  All
                </Radio.Button>
                <Radio.Button
                  value="Category 1"
                  style={
                    selectedTab === "Category 1"
                      ? selectedButtonStyle
                      : buttonStyle
                  }
                >
                  Category 1
                </Radio.Button>
                <Radio.Button
                  value="Category 2"
                  style={
                    selectedTab === "Category 2"
                      ? selectedButtonStyle
                      : buttonStyle
                  }
                >
                  Category 2
                </Radio.Button>
              </Radio.Group>
            </Box>
          </div>
          <TraineeHomeListCourseCp />

          {/* <TabbarCourse/> */}

          {/* <TraineeHomeListCourseCp /> */}
        </Box>
      </Box>
    </div>
  );
};

export default TraineeHomeComponent;

const buttonStyle = {
  // background: "none",
  color: "black",
  border: "none",
};

const selectedButtonStyle = {
  background:
    "linear-gradient(90deg, rgb(17, 182, 122) 0%, rgb(0, 148, 68) 100%)",
  color: "white",
  border: "none",
};
