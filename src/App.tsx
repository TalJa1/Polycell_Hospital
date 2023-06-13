// import "./App.css";
import * as React from "react";
import Home from "./layouts/Home";
import Loginpage from "./components/Loginpage";
import { Route, Routes } from "react-router-dom";
import ClassManagement from "./layouts/ClassManagement";
import ClassAcceptance from "./layouts/upperClass/ClassAcceptance";
import ClassApproval from "./layouts/upperClass/ClassApproval";
import AddClass from "./layouts/AddClass";
import TraineeHome from "./layouts/trainee/TraineeHome";
import ClassDetail from "./layouts/ClassDetail";
import CoursePage from "./layouts/trainee/CoursePage";
import TraineeManagement from "./layouts/TraineeManagement";
import ClassListTrainee from "./components/ClassListTrainee";

function App() {
  return (
    <Routes>
      {/* <Menubar /> */}
      <Route path="/" Component={Home} />
      <Route path="/class-management" Component={ClassManagement} />
      <Route path="/class-acceptance" Component={ClassAcceptance} />
      <Route path="/class-approval" Component={ClassApproval} />
      <Route path="/class-detail" Component={ClassDetail} />
      <Route path="/trainee-management" Component={TraineeManagement} />
      <Route path="/communty" />
      <Route path="/trainee-course-page" Component={CoursePage} />
      <Route path="/login" Component={Loginpage} />
      <Route path="/add-class" Component={AddClass} />
      <Route path="/class-trainee" Component={ClassListTrainee} />


    </Routes>
  );
}

export default App;
