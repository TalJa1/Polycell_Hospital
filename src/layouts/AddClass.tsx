import React, { useState } from "react";
import Header from "../components/layoutComponents/Header";
import Footer from "../components/layoutComponents/Footer";
import { TimePicker } from "@mui/x-date-pickers";
import Menubar from "../components/layoutComponents/Menubar";
import ClassAddForm from "../components/classComponents/ClassAddForm";

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
