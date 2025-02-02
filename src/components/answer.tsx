import React, { useState } from "react";

interface answerProps {
  answerStr: string;
  onTakeDamage: (damage: number) => void;
  correctness: boolean;
  disableAllAnswers: boolean;
  onAnswerSelected: (isCorrect: boolean) => void;
  isAnswerCorrect: boolean;
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
      ]);

      //take damage on wrong answers
      if (!props.correctness) {
        props.onTakeDamage(10);
      }

      props.onAnswerSelected(props.correctness);
    }
  };

  return (
    <div>
      <button
        className={`w-[28rem] h-20 bg-white text-black font-semibold rounded-lg ring ring-2 ring-primary
          shadow-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2
          focus:ring-primaryDark focus:ring-opacity-50 px-2 ${buttonStyle.join(
            " "
          )}`}
        onClick={checkAnswer}
        disabled={props.disableAllAnswers || isAnswered} // Disable if the correct answer is selected
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
