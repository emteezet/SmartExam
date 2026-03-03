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
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showProctorWarning, setShowProctorWarning] = useState(false);
  const [hasSavedProgress, setHasSavedProgress] = useState(false);

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(`exam_progress_${subject}`);
    if (savedData) {
      setHasSavedProgress(true);
    }
  }, [subject]);

  const loadSavedProgress = () => {
    const savedData = localStorage.getItem(`exam_progress_${subject}`);
    if (savedData) {
      const { answers, time, index } = JSON.parse(savedData);
      setUserAnswers(answers);
      setTimeLeft(time);
      setCurrentQuestionIndex(index);
      setExamState("exam");
    }
  };

  useEffect(() => {
    if (examState === "exam") {
      localStorage.setItem(`exam_progress_${subject}`, JSON.stringify({
        answers: userAnswers,
        time: timeLeft,
        index: currentQuestionIndex
      }));
    }
  }, [userAnswers, timeLeft, currentQuestionIndex, examState, subject]);

  // Function to finish the exam - hoisted via function declaration
  function finishExam(isTimeUp = false) {
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

    if (isTimeUp) {
      setShowTimeUpModal(true);
    } else {
      setExamState("results");
      localStorage.removeItem(`exam_progress_${subject}`);
    }
  }

  // Proctoring: Tab Switching Detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && examState === "exam") {
        setTabSwitchCount(prev => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            finishExam(true); // Auto-submit on 3rd switch
          } else {
            setShowProctorWarning(true);
          }
          return newCount;
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [examState]); // Removed finishExam from deps as it's now stable


  // Get subject-specific questions
  useEffect(() => {
    const subjectQs = subjectQuestions[subject] || [];
    setQuestions(subjectQs);
  }, [subject]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const selectedAnswer = userAnswers[currentQuestion?.id];



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
  }, [examState]);


  const startExamHandler = (isResume = false) => {
    if (!isResume) {
      localStorage.removeItem(`exam_progress_${subject}`);
      setCurrentQuestionIndex(0);
      setTimeLeft(EXAM_DURATION_SECONDS);
      setUserAnswers({});
      setScore(0);
    } else {
      loadSavedProgress();
    }
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
          tabSwitchCount={tabSwitchCount}
          showProctorWarning={showProctorWarning}
          onCloseProctorWarning={() => setShowProctorWarning(false)}
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
          hasSavedProgress={hasSavedProgress}
        />
      );
      break;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100">
      {/* Time's Up Modal */}
      {showTimeUpModal && (
        <div className="fixed inset-0 backdrop-blur-xl flex items-center justify-center z-[100]">
          <div className="bg-white rounded-[32px] shadow-2xl p-10 max-w-sm mx-4 text-center border border-slate-100">
            <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-8 text-rose-500 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">TIME'S UP!</h3>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Your time has expired. All answered questions have been saved and submitted automatically.
            </p>
            <button
              onClick={() => {
                setShowTimeUpModal(false);
                setExamState("results");
                localStorage.removeItem(`exam_progress_${subject}`);
              }}
              className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 transform hover:-translate-y-1 active:scale-95"
            >
              See Results
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-6 md:p-10 border border-gray-200">
        {content}
      </div>
    </div>
  );
}
