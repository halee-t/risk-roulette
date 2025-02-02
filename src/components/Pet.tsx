import React, { useState, useEffect } from "react";
import Answer from "./answer";
import answerData from "../data/pet-questions.json";

interface QuestionProps {
  question: string;
  answers: string[];
  correct: boolean[];
}

interface PetProps {
  onTakeDamage: (damage: number) => void;
  onGetPoints: (earn: number) => void
}

const Pet: React.FC<PetProps> = ( {onTakeDamage, onGetPoints} ) => {
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
    <div className="font-semibold font-sans text-center flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-[3rem] px-24">
        <h1 className="text-primary text-lg">
          Franklin thought remembering to take care of himself was hard...now he
          has to remember to fed, entertain, and clean up after two living
          beings.
        </h1>
        <img
          src="./bubbleboy_dog.png"
          className="w-80 h-auto object-cover overflow-hidden -mt-32"
        />
      </div>
      <section className="px-12 flex flex-col items-center justify-center gap-8">
        <div className="text-primary text-xl">{currentQuestion.question}</div>
        <div className="h-48 w-full grid grid-rows-2 grid-cols-2 gap-4">
          {currentQuestion.answers.map((answer, index) => (
            <div className="flex justify-center" key={index}>
              <Answer
                answerStr={answer}
                onTakeDamage={onTakeDamage}
                onGetPoints={onGetPoints}
                correctness={currentQuestion.correct[index]}
              ></Answer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pet;
