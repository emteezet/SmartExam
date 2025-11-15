import React from "react";

const EXAM_DURATION_SECONDS = 60; // Define this constant or pass it as a prop

const StartPage = ({ totalQuestions, startExamHandler }) => (
  <div className="text-center">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
      SmartExam CBT Practice
    </h1>
    <p className="text-gray-600 mb-8">
      Prepare for JAMB, GCE, and Post-UTME. This mock exam has **
      {totalQuestions} questions** and a **{EXAM_DURATION_SECONDS}-second
      limit**.
    </p>
    <button
      onClick={startExamHandler}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-xl transform hover:scale-[1.02] active:scale-100"
    >
      Start Exam Now
    </button>
  </div>
);

export default StartPage;
