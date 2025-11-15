import React from "react";
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
}) => {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div>
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
      <div className="flex justify-end mt-10 pt-4 border-t border-gray-200">
        {!isLastQuestion && (
          <button
            onClick={nextQuestionHandler}
            disabled={!selectedAnswer}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-[1.03]"
          >
            Next Question
          </button>
        )}
        {isLastQuestion && (
          <button
            onClick={() => finishExamHandler(false)}
            disabled={!selectedAnswer}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-xl transform hover:scale-[1.03] disabled:bg-gray-400"
          >
            Submit Exam
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
