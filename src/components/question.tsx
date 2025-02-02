import React, { useState } from "react";
import Answer from "./answer";
import answerData from "../data/questions.json";

interface questionProps {
  question: string;
  answers: string[];
  correct: boolean[];
  onTakeDamage: (damage: number) => void;
}

const Question: React.FC<questionProps> = (props) => {
  const [disableAllAnswers, setDisableAllAnswers] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(
    null
  );

  const handleAnswerSelection = (isCorrect: boolean) => {
    if (isCorrect) {
      setAnsweredCorrectly(true); // Set this to true only when the user picks the correct answer
      setDisableAllAnswers(true); // Disable all answers when the correct one is clicked
    } else {
      setAnsweredCorrectly(false); // Keep allowing selection if the answer is wrong
    }
  };

  return (
    <>
      <div className="font-semibold font-sans text-center underline">
        {props.question}
      </div>
      <div className="h-64 grid grid-rows-{2} grid-cols-2 gap-4 flex align-bottom">
        {props.answers.map((res, index) => (
          <div className="flex justify-center">
            <Answer
              answerStr={res}
              onTakeDamage={props.onTakeDamage}
              correctness={props.correct[index]}
              disableAllAnswers={disableAllAnswers}
              onAnswerSelected={handleAnswerSelection} // Pass the handler to Answer
              isAnswerCorrect={answeredCorrectly === true}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
