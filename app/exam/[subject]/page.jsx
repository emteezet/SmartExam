"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import ExamPage from "../../../components/exam/ExamPage";
import StartPage from "../../../components/exam/StartPage";
import ResultsPage from "../../../components/exam/ResultsPage";

// Subject-specific questions database
// Subject-specific questions database with multi-type support
const subjectQuestions = {
  javascript: [
    {
      id: 1,
      type: "mcq",
      text: "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
      options: ["A. let", "B. const", "C. var", "D. static"],
      correctAnswer: "B",
    },
    {
      id: 2,
      type: "true_false",
      text: "JavaScript is a statically typed language.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: 3,
      type: "fill_blanks",
      text: "The _______ method is used to add one or more elements to the end of an array.",
      correctAnswer: "push",
    },
  ],
  python: [
    {
      id: 1,
      type: "mcq",
      text: "Which of the following is a mutable data type in Python?",
      options: ["A. String", "B. Tuple", "C. List", "D. None"],
      correctAnswer: "C",
    },
    {
      id: 2,
      type: "true_false",
      text: "In Python, Indentation is used to define blocks of code.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 3,
      type: "fill_blanks",
      text: "Python uses the _______ keyword to create a function.",
      correctAnswer: "def",
    },
  ],
  geography: [
    {
      id: 1,
      type: "mcq",
      text: "What is the largest continent by area?",
      options: ["A. Africa", "B. Asia", "C. Europe", "D. Antarctica"],
      correctAnswer: "B",
    },
    {
      id: 2,
      type: "true_false",
      text: "The Nile is the longest river in the world.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
  ],
  cybersecurity: [
    {
      id: 1,
      type: "mcq",
      text: "What does 'VPN' stand for?",
      options: [
        "A. Virtual Private Network",
        "B. Very Public Network",
        "C. Virtual Protocol Number",
        "D. Virtual Proxy Node",
      ],
      correctAnswer: "A",
    },
    {
      id: 2,
      type: "fill_blanks",
      text: "_______ Auth is a security process in which users provide two different authentication factors to verify themselves.",
      correctAnswer: "Two-Factor",
    },
  ],
  history: [
    {
      id: 1,
      type: "mcq",
      text: "In which year did World War II end?",
      options: ["A. 1943", "B. 1944", "C. 1945", "D. 1946"],
      correctAnswer: "C",
    },
    {
      id: 2,
      type: "true_false",
      text: "The Magna Carta was signed in 1215.",
      options: ["True", "False"],
      correctAnswer: "True",
    },
  ],
  biology: [
    {
      id: 1,
      type: "mcq",
      text: "What is the powerhouse of the cell?",
      options: ["A. Nucleus", "B. Mitochondria", "C. Ribosome", "D. Lysosome"],
      correctAnswer: "B",
    },
    {
      id: 2,
      type: "fill_blanks",
      text: "DNA stands for _______ acid.",
      correctAnswer: "Deoxyribonucleic",
    },
  ],
};

const EXAM_DURATION_SECONDS = 120; // 2 minutes per exam

export default function SubjectExam() {
  const params = useParams();
  const subject = params?.subject || "";

  const [examState, setExamState] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Get subject-specific questions
  useEffect(() => {
    const subjectQs = subjectQuestions[subject] || [];
    setQuestions(subjectQs);
  }, [subject]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const selectedAnswer = userAnswers[currentQuestion?.id];

  const finishExam = useCallback(
    (isTimeUp = false) => {
      let finalScore = 0;
      questions.forEach((q) => {
        const userAnswer = userAnswers[q.id];
        const correctAnswer = q.correctAnswer;

        if (q.type === "fill_blanks") {
          if (
            userAnswer?.toString().trim().toLowerCase() ===
            correctAnswer.toString().trim().toLowerCase()
          ) {
            finalScore++;
          }
        } else {
          if (userAnswer === correctAnswer) {
            finalScore++;
          }
        }
      });
      setScore(finalScore);
      setExamState("results");
    },
    [questions, userAnswers]
  );

  // Timer
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

  const previousQuestionHandler = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const jumpToQuestionHandler = (questionIndex) => {
    if (questionIndex >= 0 && questionIndex < totalQuestions) {
      setCurrentQuestionIndex(questionIndex);
    }
  };

  let content;
  switch (examState) {
    case "exam":
      content = (
        <ExamPage
          question={currentQuestion}
          questions={questions}
          userAnswers={userAnswers}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          timeLeft={timeLeft}
          selectedAnswer={selectedAnswer}
          selectAnswerHandler={selectAnswerHandler}
          nextQuestionHandler={nextQuestionHandler}
          previousQuestionHandler={previousQuestionHandler}
          jumpToQuestionHandler={jumpToQuestionHandler}
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
          subject={subject}
        />
      );
      break;
    case "start":
    default:
      content = (
        <StartPage
          totalQuestions={totalQuestions}
          startExamHandler={startExamHandler}
          subject={subject}
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
}
