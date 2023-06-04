import React from "react";
import "../styles/Home.css";
import Menubar from "../components/Menubar";
import Postdata from "../components/ClassManagement";
import AddClass from "./AddClass";

const home: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <AddClass />
      </main>
    </div>
  );
};

export default home;
