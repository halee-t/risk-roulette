import React, { useState, useEffect } from "react";
import Answer from "./answer";
import answerData from "../data/cyber-questions.json";

interface QuestionProps {
  question: string;
  answers: string[];
  correct: boolean[];
}

interface IdentifyProps {
  onTakeDamage: (damage: number) => void;
}

const Identity: React.FC<IdentifyProps> = ({ onTakeDamage }) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps | null>(
    null
  );

  useEffect(() => {
    // Pick a random question from the answerData
    const randomQuestionIndex = Math.floor(
      Math.random() * answerData.questions.length
    ); // Random question from the selected tile
    const selectedQuestion = answerData.questions[randomQuestionIndex];

    setCurrentQuestion(selectedQuestion);
  }, []);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }
  return (
    <div className="font-semibold font-sans text-center flex flex-col items-center">
      <div className="">
        <h1>insert scenario still</h1>
        <h1>insert pic still</h1>
      </div>
      <section className="px-12 flex flex-col items-center justify-center ring ring-2 ring-red gap-8">
        <div className="underline">{currentQuestion.question}</div>
        <div className="h-48 w-full grid grid-rows-2 grid-cols-2 ">
          {currentQuestion.answers.map((answer, index) => (
            <div className="flex justify-center" key={index}>
              <Answer
                answerStr={answer}
                onTakeDamage={onTakeDamage}
                correctness={currentQuestion.correct[index]}
              ></Answer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Identity;
