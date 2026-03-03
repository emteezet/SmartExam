import React from "react";

const EXAM_DURATION_SECONDS = 120;

const StartPage = ({ totalQuestions, startExamHandler, subject, hasSavedProgress }) => {
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
        Test your knowledge with <strong>{totalQuestions} questions</strong> and
        a <strong>{EXAM_DURATION_SECONDS}-second limit</strong>.
      </p>

      {hasSavedProgress && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-8 text-left animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-4">
            <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-amber-900">Resume Previous Attempt?</h4>
              <p className="text-sm text-amber-700">We found an unfinished exam session. Would you like to continue from where you left off?</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => startExamHandler(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Resume Progress
            </button>
            <button
              onClick={() => startExamHandler(false)}
              className="bg-white border-2 border-amber-200 text-amber-600 font-bold py-2 px-6 rounded-xl hover:bg-amber-100 transition-all active:scale-95"
            >
              Start Fresh
            </button>
          </div>
        </div>
      )}

      {!hasSavedProgress && (
        <>
          <div className="bg-blue-50 border-l-4 border-indigo-600 p-4 mb-8 text-left">
            <div className="text-sm text-gray-700">
              <strong>Tips:</strong>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Read questions carefully before answering</li>
                <li>You can navigate between questions</li>
                <li>Answer all questions before time runs out</li>
                <li>Your answers are saved automatically</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => startExamHandler(false)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-xl transform hover:scale-[1.02] active:scale-100"
          >
            Start Exam Now →
          </button>
        </>
      )}
    </div>
  );
};

export default StartPage;
