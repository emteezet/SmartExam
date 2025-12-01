import React from "react";
import Link from "next/link";

const ResultsPage = ({
  score,
  totalQuestions,
  timeLeft,
  startExamHandler,
  subject,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const performanceMessage =
    percentage >= 80
      ? "Excellent work! 🎉"
      : percentage >= 60
      ? "Good effort! 👍"
      : percentage >= 40
      ? "Keep practicing! 💪"
      : "Try again! 📖";

  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">
        {timeLeft === 0 ? "Time's Up! Exam Submitted" : "Exam Complete!"}
      </h2>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-4 border-indigo-400 p-8 rounded-2xl shadow-2xl inline-block max-w-full w-96 mb-6">
        <p className="text-xl text-gray-700 mb-4 font-semibold">
          Your Final Score:
        </p>
        <p className="text-7xl font-extrabold text-indigo-800">
          {score} / {totalQuestions}
        </p>
        <p className="text-2xl font-bold text-emerald-600 mt-4">
          {percentage}%
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-3">
          {performanceMessage}
        </p>
      </div>

      <p className="text-gray-600 mt-8 text-sm max-w-md mx-auto">
        Great job completing the {subject} exam! Your score has been recorded.
      </p>

      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={startExamHandler}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md transform hover:scale-105"
        >
          Retake Exam
        </button>
        <Link href="/exam">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md transform hover:scale-105">
            Choose Another Subject
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
