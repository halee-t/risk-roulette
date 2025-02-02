import React, { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Identity from "./Identity";
import Fire from "./Fire";
import Flood from "./Flood";
import Car from "./Car";
import Pet from "./Pet";
import Farm from "./Farm";

interface Props {
  participants: string[];
}

const colors = [
  "#2985CC", // Darker sky blue
  "#293FCC", // Darker bright blue
  "#4629CC", // Darker purple
  "#9929CC", // Darker violet
  "#CC5929", // Darker coral
  "#29CC91", // Darker pale turquoise
  "#298ECC", // Darker deep sky blue
  "#4A29CC", // Darker royal blue
  "#8429CC", // Darker medium purple
];

export const NewWheel: React.FC<Props> = ({ participants }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  // popup
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  // displays winner name
  const [popupWinner, setPopupWinner] = useState<string | null>(null);

  //controls canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // divides wheel into num of participants
  const numSectors = participants.length;

  useEffect(() => {
    if (canvasRef.current) {
      drawWheel();
    }
  }, [participants, rotation]);

  // seems to control color
  const darkenColor = (color: string, amount: number): string => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);

    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  // Draws wheel. Change numSectors to 8 or whatever it is
  const drawWheel = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const radius = canvas.width / 2;
    const sliceAngle = (2 * Math.PI) / numSectors;

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(radius, radius);
    ctx.rotate(-rotation * (Math.PI / 180));

    // Draw sectors
    for (let i = 0; i < numSectors; i++) {
      const startAngle = i * sliceAngle;
      const endAngle = (i + 1) * sliceAngle;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      const color = darkenColor(colors[i % colors.length], 30);
      ctx.fillStyle = color;
      ctx.fill();

      // Draw the name in the sector
      ctx.save();
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 3;
      ctx.fillText(participants[i] || "", radius * 0.5, 0);
      ctx.restore();
    }

    ctx.rotate(rotation * (Math.PI / 180)); // Reset rotation
    ctx.translate(-radius, -radius);

    // Draw the static indicator
    const indicatorLength = 50;
    const indicatorWidth = 10;
    ctx.save();
    ctx.translate(canvas.width, canvas.height / 2);
    ctx.beginPath();
    ctx.moveTo(-indicatorLength, -indicatorWidth / 2);
    ctx.lineTo(0, -indicatorWidth / 2);
    ctx.lineTo(0, indicatorWidth / 2);
    ctx.lineTo(-indicatorLength, indicatorWidth / 2);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();
  };

  const startSpin = () => {
    // returns if spinning is already true
    if (spinning) return;
    setSpinning(true);

    // Set the number of full rotations and calculate final rotation
    const numFullRotations = Math.random() * 5 + 5; // Between 5 and 10 full rotations
    const totalRotation = numFullRotations * 360;

    // this isn't really needed. Controls clockwise or counter clockwise
    const finalRotation = (rotation - totalRotation) % 360;

    // spin time
    const spinDuration = 6000;

    // TODO figure out what this does
    const easing = (t: number) => {
      // Ease-out cubic
      return 1 - Math.pow(1 - t, 3);
    };

    let startTime: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const t = Math.min(elapsed / spinDuration, 1);
      const easeT = easing(t);
      // don't really need - fixed for set rotation
      const currentRotation = rotation - totalRotation * easeT;

      setRotation(currentRotation);

      if (elapsed < spinDuration) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        determineWinner(finalRotation);
      }
    };

    requestAnimationFrame(animate);
  };

  const determineWinner = (finalRotation: number) => {
    const sliceAngle = 360 / numSectors;
    const normalizedRotation = ((finalRotation % 360) + 360) % 360;
    const winningSector = Math.floor(normalizedRotation / sliceAngle);

    setPopupWinner(participants[winningSector]);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      startConfetti();
    }
  }, [showPopup]);

  const startConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[5rem]">
      <h1 className="text-3xl semibold text-primary mb-[4rem]">
        Oh no....What happened to Homeboy this time???
      </h1>
      {/*This is the wheel itself */}
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ borderRadius: "50%", border: "2px solid black" }}
      />

      <button
        className="mt-[2rem] px-2 py-2 w-32 h-16 text-2xl bg-primary text-white font-semibold rounded-lg 
        shadow-md hover:bg-primaryDark focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:ring-opacity-50"
        onClick={startSpin}
        disabled={participants.length === 0 || spinning}
      >
        Spin
      </button>
      {showPopup && popupWinner && (
        <div className="w-[80%] h-[75%] fixed z-50 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white text-primary px-[1rem] py-[2rem] ring ring-3 ring-primary rounded-lg text-center">
          <button
            onClick={closePopup}
            className="absolute top-2 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
          >
            X
          </button>

          {/* Conditionally Render the Components */}
          {popupWinner === "Fire" && <Fire />}
          {popupWinner === "Flood" && <Flood />}
          {popupWinner === "Pet Sickness" && <Pet />}
          {popupWinner === "Identify Theft" && <Identity />}
          {popupWinner === "Car Accident" && <Car />}
          {popupWinner === "Farm Fiasco" && <Farm />}
        </div>
      )}
    </div>
  );
};
