import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import Menubar from "../components/Menubar";
import ClassAddForm from "../components/ClassAddForm";

const AddClass: React.FC = () => {
  

  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <div>
          <Header title="Add Class" imageUrl="" />
            <ClassAddForm/>
          <Footer />
        </div>
      </main>
    </div>
  );
};





export default AddClass;
