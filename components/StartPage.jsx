import React from "react";

const EXAM_DURATION_SECONDS = 120;

const StartPage = ({ totalQuestions, startExamHandler, subject }) => {
  const subjectNames = {
    javascript: "JavaScript",
    python: "Python",
    geography: "Geography",
    cybersecurity: "Cybersecurity",
    history: "History",
    biology: "Biology",
  };

  const displaySubject = subjectNames[subject] || "Exam";

  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-2 tracking-tight">
        {displaySubject} Exam
      </h1>
      <p className="text-gray-600 mb-8">
        Test your knowledge with <strong>{totalQuestions} questions</strong> and a{" "}
        <strong>{EXAM_DURATION_SECONDS}-second limit</strong>.
      </p>
      <div className="bg-blue-50 border-l-4 border-indigo-600 p-4 mb-8 text-left">
        <p className="text-sm text-gray-700">
          <strong>Tips:</strong>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Read questions carefully before answering</li>
            <li>You can navigate between questions</li>
            <li>Answer all questions before time runs out</li>
            <li>Your answers are saved automatically</li>
          </ul>
        </p>
      </div>
      <button
        onClick={startExamHandler}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-xl transform hover:scale-[1.02] active:scale-100"
      >
        Start Exam Now →
      </button>
    </div>
  );
};

export default StartPage;
