import React from "react";

interface ScoreProps {
  points: number;
  onGetPoints: (getPoints: number) => void;
}

const Score: React.FC<ScoreProps> = ({ points, onGetPoints }) => {
  const pointsStart = points;

  return (
    <>
      <div className="text-center text-2xl font-semibold text-black">
        <img src="./trophy.png" className="w-32 mb-4" />
        <p className="text-5xl">{points}</p>
      </div>
      {/*<button onClick={() => onGetPoints(1)}>Add points</button>*/}
    </>
  );
};

export default Score;
