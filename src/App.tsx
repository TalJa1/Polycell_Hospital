// import "./App.css";
import * as React from "react";
import Home from "./layouts/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Menubar /> */}
      <Route path="/" Component={Home} />
      <Route path="/communty" />
      <Route path="/" />
    </Routes>
  );
}

export default App;
