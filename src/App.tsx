// import "./App.css";
import * as React from "react";
import Home from "./layouts/Home";
import Loginpage from "./components/Loginpage";
import { Route, Routes } from "react-router-dom";
import ClassManagement from "./layouts/ClassManagement";

function App() {
  return (
    <Routes>
      {/* <Menubar /> */}
      <Route path="/" Component={Home} />
      <Route path="/class-management" Component={ClassManagement} />
      <Route path="/communty" />
      <Route path="/" />
      <Route path="/login" Component={Loginpage} />
    </Routes>
  );
}

export default App;
