import { Avatar, Box, Rating, Typography, styled } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Program } from "../../models/programAddModel";

const CourseDetailOverview: React.FC = () => {

  const location = useLocation();
  const program: Program = location.state?.program;

  return (
    <div
      style={{
        display: "flex",
        margin: "20px 0"
      }}
    >
      <AuthorBox className="author">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <AuthorName>
          <Typography variant="h6">Code</Typography>
          <Typography variant="body1" color="ActiveBorder">{program.code}</Typography>
        </AuthorName>
      </AuthorBox>
      <CategoryBox className="category">
        <Typography variant="h6">Department</Typography>
        <Typography variant="body1" color="ActiveBorder">{program.department?.name}</Typography>
      </CategoryBox>
      
    </div>
  );
};

export default CourseDetailOverview;

const AuthorBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "20px",

  paddingRight: "20px",
  borderRight: "1px solid rgb(221, 221, 221)",
});


const AuthorName = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "20px",
//   marginRight: "20px",
//   paddingRight: "20px",
//   marginTop: "-3px",
//   borderRight: "1px solid rgb(221, 221, 221)",
});

const CategoryBox = styled(Box)({

  marginRight: "20px",
  paddingRight: "20px",

});

