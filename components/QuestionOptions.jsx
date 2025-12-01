import React, { useEffect } from "react";

const QuestionOptions = ({ question, selectedAnswer, selectAnswerHandler }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (["A", "B", "C", "D"].includes(key)) {
        event.preventDefault();
        selectAnswerHandler(question.id, key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [question.id, selectAnswerHandler]);

  return (
    <div className="space-y-4">
      {question.options.map((option) => {
        const optionLetter = option.split(".")[0];
        const optionText = option.substring(2).trim();
        const isSelected = selectedAnswer === optionLetter;

        return (
          <button
            key={optionLetter}
            onClick={() => selectAnswerHandler(question.id, optionLetter)}
            className={`
              option-button w-full text-left p-4 rounded-lg border-2 transition duration-150
              ${
                isSelected
                  ? "bg-indigo-600 border-indigo-700 text-white shadow-md transform scale-[1.01]"
                  : "bg-white border-gray-300 hover:bg-gray-50 text-gray-800"
              }
            `}
          >
            <span className="font-bold mr-2">{optionLetter}.</span> {optionText}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionOptions;
