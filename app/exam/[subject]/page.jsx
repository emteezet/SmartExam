"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import ExamPage from "../../../components/exam/ExamPage";
import StartPage from "../../../components/exam/StartPage";
import ResultsPage from "../../../components/exam/ResultsPage";

// Subject-specific questions database
const subjectQuestions = {
  javascript: [
    {
      id: 1,
      text: "Which keyword is used to declare a variable in JavaScript that cannot be reassigned?",
      options: ["A. let", "B. const", "C. var", "D. static"],
      correctAnswer: "B",
    },
    {
      id: 2,
      text: "What does 'async' mean in JavaScript?",
      options: [
        "A. Asynchronous programming",
        "B. Automatic synchronization",
        "C. Async syntax error",
        "D. None of the above",
      ],
      correctAnswer: "A",
    },
    {
      id: 3,
      text: "Which method is used to add elements to the end of an array?",
      options: ["A. push()", "B. pop()", "C. shift()", "D. unshift()"],
      correctAnswer: "A",
    },
  ],
  python: [
    {
      id: 1,
      text: "Which of the following is a mutable data type in Python?",
      options: ["A. String", "B. Tuple", "C. List", "D. None"],
      correctAnswer: "C",
    },
    {
      id: 2,
      text: "How do you create a function in Python?",
      options: [
        "A. function myFunc():",
        "B. def myFunc():",
        "C. func myFunc():",
        "D. define myFunc():",
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      text: "What is the output of: print(2 ** 3)?",
      options: ["A. 6", "B. 8", "C. 5", "D. 9"],
      correctAnswer: "B",
    },
  ],
  geography: [
    {
      id: 1,
      text: "What is the largest continent by area?",
      options: ["A. Africa", "B. Asia", "C. Europe", "D. Antarctica"],
      correctAnswer: "B",
    },
    {
      id: 2,
      text: "Which country has the most islands?",
      options: ["A. Norway", "B. Sweden", "C. Finland", "D. Canada"],
      correctAnswer: "B",
    },
    {
      id: 3,
      text: "What is the capital of Japan?",
      options: ["A. Osaka", "B. Tokyo", "C. Kyoto", "D. Hiroshima"],
      correctAnswer: "B",
    },
  ],
  cybersecurity: [
    {
      id: 1,
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
      text: "What is a common method to protect against phishing attacks?",
      options: [
        "A. Use weak passwords",
        "B. Enable 2FA",
        "C. Click suspicious links",
        "D. Share credentials",
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      text: "What does 'SSL' provide?",
      options: [
        "A. Secure data transmission",
        "B. File storage",
        "C. Email filtering",
        "D. User authentication",
      ],
      correctAnswer: "A",
    },
  ],
  history: [
    {
      id: 1,
      text: "In which year did World War II end?",
      options: ["A. 1943", "B. 1944", "C. 1945", "D. 1946"],
      correctAnswer: "C",
    },
    {
      id: 2,
      text: "Who was the first President of the United States?",
      options: [
        "A. Thomas Jefferson",
        "B. George Washington",
        "C. Benjamin Franklin",
        "D. John Adams",
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      text: "The Renaissance began in which country?",
      options: ["A. France", "B. Germany", "C. Italy", "D. Spain"],
      correctAnswer: "C",
    },
  ],
  biology: [
    {
      id: 1,
      text: "What is the powerhouse of the cell?",
      options: ["A. Nucleus", "B. Mitochondria", "C. Ribosome", "D. Lysosome"],
      correctAnswer: "B",
    },
    {
      id: 2,
      text: "How many chambers does a human heart have?",
      options: ["A. 2", "B. 3", "C. 4", "D. 6"],
      correctAnswer: "C",
    },
    {
      id: 3,
      text: "What is the basic unit of life?",
      options: ["A. Atom", "B. Molecule", "C. Cell", "D. Organ"],
      correctAnswer: "C",
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
        if (userAnswers[q.id] === q.correctAnswer) {
          finalScore++;
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
