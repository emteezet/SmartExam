import React, { useState } from "react";
import Link from "next/link";
import QuestionOptions from "./QuestionOptions"; // Ensure path is correct

const ExamPage = ({
  question,
  questions,
  userAnswers,
  currentQuestionIndex,
  totalQuestions,
  timeLeft,
  selectedAnswer,
  selectAnswerHandler,
  nextQuestionHandler,
  finishExamHandler,
  previousQuestionHandler,
  jumpToQuestionHandler,
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [showSubmitWarning, setShowSubmitWarning] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState({}); // Tracking flagged questions

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const unansweredIndices = questions
    .map((q, idx) => (userAnswers[q.id] ? null : idx))
    .filter((idx) => idx !== null);

  const handleSubmitAttempt = () => {
    if (unansweredIndices.length > 0) {
      setShowSubmitWarning(true);
    } else {
      finishExamHandler(false);
    }
  };

  const toggleFlagHandler = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [question.id]: !prev[question.id],
    }));
  };

  return (
    <div>
      {/* Warning Modal (Leave Exam) */}
      {showWarning && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm mx-4">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg font-bold text-gray-800">Leave Exam?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to leave this exam? Your progress will be
              lost and you'll need to start over.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowWarning(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Continue Exam
              </button>
              <Link href="/exam" className="flex-1">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
                  Leave Exam
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Submission Warning Modal (Unanswered Questions) */}
      {showSubmitWarning && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 border border-orange-100">
            <div className="flex items-center mb-4 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-xl font-bold">Unanswered Questions</h3>
            </div>
            <p className="text-gray-600 mb-6 font-medium">
              You have {unansweredIndices.length} questions left unanswered. What would you like to do?
            </p>

            <div className="mb-8 overflow-y-auto max-h-40 p-2 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 px-2">Jump to:</p>
              <div className="flex flex-wrap gap-2">
                {unansweredIndices.map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      jumpToQuestionHandler(idx);
                      setShowSubmitWarning(false);
                    }}
                    className="h-10 w-10 bg-white border-2 border-orange-200 text-orange-600 rounded-lg font-bold hover:bg-orange-50 hover:border-orange-400 transition-all"
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => finishExamHandler(false)}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg"
              >
                Submit Anyway
              </button>
              <button
                onClick={() => setShowSubmitWarning(false)}
                className="w-full bg-white border-2 border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition duration-200"
              >
                Go Back to Questions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Area */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setShowWarning(true)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition duration-200 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Quit
        </button>

        <div
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl shadow-inner font-mono font-bold transition-all duration-300 ${timeLeft <= 30
            ? "bg-red-100 text-red-600 animate-pulse border border-red-200"
            : "bg-indigo-50 text-indigo-700 border border-indigo-100"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xl">
            {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Progress & Pagination */}
      <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
          <div className="text-sm font-bold text-gray-400">
            {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% Complete
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div
            className="bg-indigo-600 h-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>

        {/* Question numbers grid */}
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const isCurrent = idx === currentQuestionIndex;
            const isFlagged = flaggedQuestions[idx + 1]; // Mocking using index+1 or real ID if available. Let's use idx+1 for now as a simple mock ID.
            // Wait, we should use the actual question IDs. But questions are loaded in SubjectExam. 
            // For simplicity in this mock, let's assume index alignment.

            return (
              <button
                key={idx}
                onClick={() => jumpToQuestionHandler && jumpToQuestionHandler(idx)}
                className={`
                  relative h-9 w-9 rounded-lg font-bold transition-all duration-200 text-xs
                  ${isCurrent
                    ? "bg-indigo-600 text-white shadow-md ring-2 ring-indigo-300 scale-110"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600"
                  }
                `}
              >
                {idx + 1}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Area */}
      <div className="relative bg-white p-8 rounded-2xl mb-6 shadow-sm border border-gray-100 min-h-[120px] flex flex-col justify-center">
        <button
          onClick={toggleFlagHandler}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${flaggedQuestions[question.id]
            ? "bg-orange-100 text-orange-600"
            : "bg-gray-100 text-gray-400 hover:text-orange-400"
            }`}
          title="Flag for review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={flaggedQuestions[question.id] ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-1 6 1 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight">
          {question.text}
        </h2>
      </div>

      {/* Options Area */}
      <div className="mb-10">
        <QuestionOptions
          question={question}
          selectedAnswer={selectedAnswer}
          selectAnswerHandler={selectAnswerHandler}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center bg-gray-50 p-4 -mx-6 -mb-6 md:-mx-10 md:-mb-10 rounded-b-xl border-t border-gray-100">
        <button
          onClick={previousQuestionHandler}
          disabled={isFirstQuestion}
          className="flex items-center gap-2 px-6 py-3 font-bold text-gray-600 disabled:opacity-30 transition-all hover:text-indigo-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <div className="flex gap-4">
          {!isLastQuestion ? (
            <button
              onClick={nextQuestionHandler}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmitAttempt}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-10 rounded-xl transition-all shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-0.5"
            >
              Submit Exam
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
