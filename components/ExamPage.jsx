import React, { useState } from "react";
import Link from "next/link";
import QuestionOptions from "./QuestionOptions"; // Ensure path is correct

const ExamPage = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  timeLeft,
  selectedAnswer,
  selectAnswerHandler,
  nextQuestionHandler,
  finishExamHandler,
  previousQuestionHandler,
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div>
      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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

      {/* Back to Subjects Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowWarning(true)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition duration-200 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
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
          Back to Subjects
        </button>
      </div>

      {/* Timer & Status Bar */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-indigo-200">
        <div className="text-lg font-bold text-gray-700">
          Question <span>{currentQuestionIndex + 1}</span> of {totalQuestions}
        </div>
        <div
          className={`flex items-center space-x-2 p-2 rounded-lg shadow-inner font-bold transition-colors duration-300 ${
            timeLeft <= 10
              ? "bg-red-200 text-red-800 animate-pulse"
              : "bg-green-100 text-green-700"
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
          <span>{timeLeft}s</span>
        </div>
      </div>

      {/* Question Area */}
      <div className="bg-indigo-50 p-6 rounded-xl mb-8 shadow-lg border-l-4 border-indigo-500">
        <p className="text-xl font-semibold text-gray-800">
          {currentQuestionIndex + 1}. {question.text}
        </p>
      </div>

      {/* Options Area */}
      <QuestionOptions
        question={question}
        selectedAnswer={selectedAnswer}
        selectAnswerHandler={selectAnswerHandler}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
        <button
          onClick={previousQuestionHandler}
          disabled={isFirstQuestion}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-[1.03] flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>

        <div className="flex gap-3">
          {!isLastQuestion && (
            <button
              onClick={nextQuestionHandler}
              disabled={!selectedAnswer}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-[1.03] flex items-center gap-2"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {isLastQuestion && (
            <button
              onClick={() => finishExamHandler(false)}
              disabled={!selectedAnswer}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl transform hover:scale-[1.03] disabled:bg-gray-400 disabled:cursor-not-allowed"
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
