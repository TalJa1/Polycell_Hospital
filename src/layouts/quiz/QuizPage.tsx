import React from "react";
import Menubar from "../../components/layoutComponents/Menubar";
import QuizCp from "../../components/quizComponents/QuizCp";

const QuizPage: React.FC = () => {
  return (
    <div className="container">
      <Menubar />
      <main className="rightlayout">
        <QuizCp />
      </main>
    </div>
  );
};

export default QuizPage;
