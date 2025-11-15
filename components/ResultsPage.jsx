import React from "react";

const ResultsPage = ({ score, totalQuestions, timeLeft, startExamHandler }) => (
  <div className="text-center">
    <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">
      {timeLeft === 0 ? "Time's Up! Exam Submitted" : "Results Summary"}
    </h2>
    <div className="bg-white border-4 border-indigo-400 p-8 rounded-2xl shadow-2xl inline-block max-w-full w-96">
      <p className="text-xl text-gray-700 mb-4 font-semibold">
        Your Final Score:
      </p>
      <p className="text-7xl font-extrabold text-indigo-800">
        {score} / {totalQuestions}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Success Rate: **{Math.round((score / totalQuestions) * 100)}%**
      </p>
    </div>

    <p className="text-gray-500 mt-8 text-sm">
      (Phase 2: This score would now be saved to your user profile.)
    </p>
    <button
      onClick={startExamHandler}
      className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
    >
      Return to Start
    </button>
  </div>
);

export default ResultsPage;
