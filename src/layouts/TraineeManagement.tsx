import React from "react";
import Menubar from "../components/Menubar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TraineeManagementTable from "../components/StudentManagementTable";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const TraineeManagement: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <TraineeManagementTable />
      </main>
    </div>
  );
};

export default TraineeManagement;
