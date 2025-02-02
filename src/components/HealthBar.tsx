import React from "react";

interface HealthBarProps {
  currentHealth: number;
  maxHealth: number;
  onTakeDamage: (damage: number) => void;
}

const HealthBar: React.FC<HealthBarProps> = ({
  currentHealth,
  maxHealth,
  onTakeDamage,
}) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  // Determine the background color based on health percentage
  const barColor =
    healthPercentage > 50
      ? "bg-green-500"
      : healthPercentage > 20
      ? "bg-orange-500"
      : "bg-red-500";

  return (
    <div className="w-full border-2 border-black relative group rounded-lg">
      <div
        className={`h-5 ${barColor} rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer`}
        style={{ width: `${healthPercentage}%` }}
      ></div>

      {/* Tooltip for currentHealth, only visible on hover */}
      <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white bg-black rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {currentHealth} / {maxHealth}
      </div>
    </div>
  );
};

export default HealthBar;
