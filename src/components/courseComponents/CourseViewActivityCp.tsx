import { Box, Typography } from "@mui/material";
import React from "react";
import { Topic } from "../../models/programAddModel";

const CourseViewActivityCp: React.FC<{ activity: Topic }> = ({ activity }) => {
  return (
    <>
      {activity.slots?.map((value, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #E6E6E6",
            boxShadow: "none",
            backgroundColor: "white",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",

                  border: "1px solid #E6E6E6",
                  backgroundColor: "#fff",
                  marginRight: "10px",
                  borderRadius: "5px",
                }}
              />

              <Box>
                <Typography variant="subtitle1">{value.type}</Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: "30px",
                  border: "1px solid #E6E6E6",
                  backgroundColor: "#fff",
                  marginRight: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  Mask as done
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CourseViewActivityCp;
