import React, { useState, useEffect } from "react";
import Answer from "./answer";
import answerData from "../data/farm-questions.json";

interface QuestionProps {
  question: string;
  answers: string[];
  correct: boolean[];
}

interface FarmProps {
  onTakeDamage: (damage: number) => void;
  onGetPoints: (earn: number) => void;
  onTimeExpire: () => void;
}

const Farm: React.FC<FarmProps> = ({
  onTakeDamage,
  onGetPoints,
  onTimeExpire,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps | null>(
    null
  );

  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          onTakeDamage(10);
          onTimeExpire();
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

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
          Franklin was in way over his head when he decided to pursue farming.
          He didn't consider the unpredictable weather conditions, loss of
          livestock, or failing equipment
        </h1>
        <h1>Answer in {timer} seconds</h1>
        <img
          src="./farm_bubbleboy.png"
          className="w-80 h-auto object-cover overflow-hidden -mt-20"
        />
      </div>
      <section className="px-12 mt-4 flex flex-col items-center justify-center gap-8">
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

export default Farm;
