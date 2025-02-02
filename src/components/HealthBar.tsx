import React from 'react';

interface HealthBarProps {
    currentHealth: number;
    maxHealth: number;
    onTakeDamage: (damage: number) => void;
}

const HealthBar: React.FC<HealthBarProps> = ({ currentHealth, maxHealth, onTakeDamage }) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  // Determine the background color based on health percentage
  const barColor =
    healthPercentage > 50 ? 'bg-green-500' : healthPercentage > 20 ? 'bg-orange-500' : 'bg-red-500';

  return (
    <div className="w-full border-2 border-black rounded-lg">
      <div
        className={`h-5 ${barColor} rounded-md transition-all duration-300 ease-in-out`}
        style={{ width: `${healthPercentage}%` }}
      ></div>
      <div className="text-center mt-1">
        {currentHealth} / {maxHealth}
      </div>
      <button
        onClick={() => onTakeDamage(10)} // Call the onTakeDamage function with 10 damage
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Take 10 Damage
      </button>
    </div>
  );
};

export default HealthBar;