import React from 'react';

interface ScoreProps {
    points: number;
    onGetPoints: (getPoints: number) => void;
}

const Score: React.FC<ScoreProps> = ({points, onGetPoints}) => {
const pointsStart = points;

return (
    <>
        <div className="text-2xl font-bold">
            Score: {points}
        </div>
        {/*<button onClick={() => onGetPoints(1)}>Add points</button>*/}
    </>
  );
}

export default Score;