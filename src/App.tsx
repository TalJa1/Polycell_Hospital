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

import TraineeDetail from "./layouts/TraineeDetail";
import ClassListTrainee from "./components/classComponents/ClassListTrainee";
import DocumentPage from "./layouts/trainee/DocumentPage";
import SyllabusPage from "./layouts/trainee/SyllabusPage";
import CoursesPage from "./layouts/trainer/CoursesPage";
import SchedulePage from "./layouts/schedule/SchedulePage";
import CourseFormActivity from "./layouts/trainer/CourseFormActivity";
import QuizPage from "./layouts/quiz/QuizPage";
import TraineeAttendanceCheck from "./layouts/trainee/TraineeAttendanceCheck";

function App() {
  return (
    <Routes>
      {/* <Menubar /> */}
      <Route path="/" Component={Home} />
      <Route path="/class-management" Component={ClassManagement} />
      <Route path="/class-acceptance" Component={ClassAcceptance} />
      <Route path="/class-approval/:id" Component={ClassApproval} />
      <Route path="/class-detail/:id" Component={ClassDetail} />
      <Route path="/trainee-management" Component={TraineeManagement} />
      <Route path="/communty" />
      <Route path="/trainee-course-page" Component={CoursePage} />
      <Route path="/login" Component={Loginpage} />
      <Route path="/add-class" Component={AddClass} />
      <Route path="/class-trainee" Component={ClassListTrainee} />
      <Route path="/trainee-detail" Component={TraineeDetail} />
      <Route path={`/course-detail-page/:programId/:trainerId`} Component={CoursesPage} />
      <Route path={`/document-page`} Component={DocumentPage} />
      <Route path={`/document-page`} Component={DocumentPage} />
      <Route path={`/syllabus-page`} Component={SyllabusPage} />
      <Route path={`/course-view`} Component={CoursesPage} />
      <Route path={`/schedule-page`} Component={SchedulePage} />
      <Route path={`/form-activity/:type`} Component={CourseFormActivity} />
      <Route path={`/quiz-setup`} Component={QuizPage} />
      <Route path={`/trainee-attendance`} Component={TraineeAttendanceCheck} />

    </Routes>
  );
}

export default App;
