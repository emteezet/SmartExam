import React, { useEffect } from "react";

const QuestionOptions = ({ question, selectedAnswer, selectAnswerHandler }) => {
  useEffect(() => {
    if (question.type === "mcq" || question.type === "true_false") {
      const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if (question.type === "mcq" && ["A", "B", "C", "D"].includes(key)) {
          event.preventDefault();
          selectAnswerHandler(question.id, key);
        } else if (question.type === "true_false") {
          if (key === "T") selectAnswerHandler(question.id, "True");
          if (key === "F") selectAnswerHandler(question.id, "False");
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [question.id, question.type, selectAnswerHandler]);

  // Render Multiple Choice
  if (question.type === "mcq") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => {
          const optionLetter = option.split(".")[0];
          const optionText = option.substring(2).trim();
          const isSelected = selectedAnswer === optionLetter;

          return (
            <button
              key={optionLetter}
              onClick={() => selectAnswerHandler(question.id, optionLetter)}
              className={`
                option-button w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                ${isSelected
                  ? "bg-indigo-600 border-indigo-700 text-white shadow-lg transform scale-[1.02]"
                  : "bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-800"
                }
              `}
            >
              <span className="font-bold mr-2">{optionLetter}.</span> {optionText}
            </button>
          );
        })}
      </div>
    );
  }

  // Render True/False
  if (question.type === "true_false") {
    return (
      <div className="grid grid-cols-2 gap-6">
        {["True", "False"].map((option) => {
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={option}
              onClick={() => selectAnswerHandler(question.id, option)}
              className={`
                option-button w-full text-center py-6 px-4 rounded-xl border-2 transition-all duration-200 font-bold text-lg
                ${isSelected
                  ? option === "True"
                    ? "bg-emerald-600 border-emerald-700 text-white shadow-lg transform scale-[1.02]"
                    : "bg-rose-600 border-rose-700 text-white shadow-lg transform scale-[1.02]"
                  : "bg-white border-gray-200 hover:bg-gray-50 text-gray-800"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  // Render Fill in the Blanks
  if (question.type === "fill_blanks") {
    return (
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type your answer below:
        </label>
        <input
          type="text"
          value={selectedAnswer || ""}
          onChange={(e) => selectAnswerHandler(question.id, e.target.value)}
          placeholder="Your answer..."
          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 text-lg"
          autoFocus
        />
        <p className="text-sm text-gray-500 italic">
          Tip: Ensure spelling is correct. Answer is case-insensitive during grading.
        </p>
      </div>
    );
  }

  return null;
};

export default QuestionOptions;
