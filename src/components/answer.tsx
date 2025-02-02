import React, { useState } from "react";

interface answerProps {
  answerStr: string;
  correctness: boolean;
}

const Answer: React.FC<answerProps> = (props) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [buttonStyle, setButtonStyle] = useState<string[]>([]); // State to track button style for correctness

  const checkAnswer = () => {
    if (!isAnswered) {
      setIsAnswered(true); // Mark that the user has answered
      setButtonStyle([
        ...(props.correctness
          ? ["bg-green-500", "hover:bg-green-600"]
          : ["bg-red-500", "hover:bg-red-600"]),
      ]); // Apply the correct or incorrect colors
    }
  };

  return (
    <div>
      <button
        className="w-[28rem] h-20 bg-white text-black font-semibold rounded-lg 
        shadow-md hover:bg-yellow-100 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:ring-opacity-50"
        onClick={checkAnswer}
      >
        {props.answerStr}
      </button>
      {isAnswered && (
        <div
          className={`text-center flex justify-center border text-white rounded-lg ${
            props.correctness ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {props.correctness ? "Correct!" : "Incorrect!"}
        </div>
      )}
    </div>
  );
};

export default Answer;
