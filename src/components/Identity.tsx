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

  const [disableAllAnswers, setDisableAllAnswers] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(
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

  const handleAnswerSelection = (isCorrect: boolean) => {
    if (answeredCorrectly === null) {
      if (!isCorrect) {
        onTakeDamage(10); // Take damage if the answer is incorrect
      }
    }
    setAnsweredCorrectly(isCorrect);
    setDisableAllAnswers(true); // Disable all answers when one is selected
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }
  return (
    <div className="font-semibold font-sans text-center flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-[3rem] px-24">
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
                onTakeDamage={onTakeDamage}
                correctness={currentQuestion.correct[index]}
                disableAllAnswers={disableAllAnswers}
                onAnswerSelected={handleAnswerSelection}
                isAnswerCorrect={answeredCorrectly === true}
              ></Answer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Identity;
