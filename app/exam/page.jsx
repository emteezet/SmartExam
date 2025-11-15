"use client";

import React, { useState, useEffect, useCallback } from "react";
import ExamPage from "../../components/ExamPage";
import StartPage from "../../components/StartPage";
import ResultsPage from "../../components/ResultsPage";

// ----------------------------------------------------------------------
// 🧩 DATA MOCK (Replace this with a fetch to your Next.js API/MongoDB)
// ----------------------------------------------------------------------

const initialQuestions = [
  {
    id: 1,
    text: "Which programming language is typically used for front-end web development, alongside HTML and CSS?",
    options: ["A. Python", "B. Java", "C. JavaScript", "D. C++"],
    correctAnswer: "C",
  },
  {
    id: 2,
    text: "The primary purpose of a firewall is to:",
    options: [
      "A. Increase internet speed",
      "B. Prevent unauthorized access to a network",
      "C. Clean up disk space",
      "D. Optimize search results",
    ],
    correctAnswer: "B",
  },
  {
    id: 3,
    text: "What is the capital city of Nigeria?",
    options: ["A. Lagos", "B. Abuja", "C. Kano", "D. Ibadan"],
    correctAnswer: "B",
  },
];

const EXAM_DURATION_SECONDS = 60;

// ----------------------------------------------------------------------
// 🚀 MAIN APP CONTAINER: App
// ----------------------------------------------------------------------

const ExamApp = () => {
  const [examState, setExamState] = useState("start"); // 'start', 'exam', 'results'
  const [questions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [userAnswers, setUserAnswers] = useState({}); // { questionId: 'A' }
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const selectedAnswer = userAnswers[currentQuestion?.id];

  // Handler to calculate score and transition to results screen
  const finishExam = useCallback(
    (isTimeUp = false) => {
      let finalScore = 0;
      questions.forEach((q) => {
        if (userAnswers[q.id] === q.correctAnswer) {
          finalScore++;
        }
      });

      setScore(finalScore);
      setExamState("results");
    },
    [questions, userAnswers]
  );

  // Timer Effect
  useEffect(() => {
    if (examState !== "exam") return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          finishExam(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [examState, finishExam]);

  // Handlers passed to child components
  const startExamHandler = () => {
    setCurrentQuestionIndex(0);
    setTimeLeft(EXAM_DURATION_SECONDS);
    setUserAnswers({});
    setScore(0);
    setExamState("exam");
  };

  const selectAnswerHandler = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const nextQuestionHandler = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Render the appropriate Page/View based on examState
  let content;
  switch (examState) {
    case "exam":
      content = (
        <ExamPage
          question={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          timeLeft={timeLeft}
          selectedAnswer={selectedAnswer}
          selectAnswerHandler={selectAnswerHandler}
          nextQuestionHandler={nextQuestionHandler}
          finishExamHandler={finishExam}
        />
      );
      break;
    case "results":
      content = (
        <ResultsPage
          score={score}
          totalQuestions={totalQuestions}
          timeLeft={timeLeft}
          startExamHandler={startExamHandler}
        />
      );
      break;
    case "start":
    default:
      content = (
        <StartPage
          totalQuestions={totalQuestions}
          startExamHandler={startExamHandler}
        />
      );
      break;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-6 md:p-10 border border-gray-200">
        {content}
      </div>
    </div>
  );
};

export default ExamApp;
