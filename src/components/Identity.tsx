import React, { useState, useEffect } from "react";
import Answer from "./answer";
import answerData from "../data/cyber-questions.json";

interface QuestionProps {
  question: string;
  answers: string[];
  correct: boolean[];
}

const Identity: React.FC = () => {
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
      <div className="flex flex-col items-center mb-[3rem]">
        <h1 className="text-primary text-lg">
          "Identify Theft Isn't a Joke Jim!" - Dwight
        </h1>
        <img src="./bubbleboy_guy_fawkes.png" className="w-64 h-auto" />
      </div>
      <section className="px-12 flex flex-col items-center justify-center gap-8">
        <div className="text-primary text-xl">{currentQuestion.question}</div>
        <div className="h-48 w-full grid grid-rows-2 grid-cols-2 gap-4">
          {currentQuestion.answers.map((answer, index) => (
            <div className="flex justify-center" key={index}>
              <Answer
                answerStr={answer}
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
