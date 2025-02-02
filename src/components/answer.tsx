import React, { useState } from 'react';

interface answerProps{
    answerStr:string;
    correctness: boolean;
}

const Answer: React.FC<answerProps> = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const checkAnswer = () => {
        if (isVisible === true){
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        if (props.correctness === true){
            document.body.style.background = "rgb(0, 255, 0)";
        } else {
            document.body.style.background = "rgb(255, 0, 0)";
        }
    }
    
    return (
    <div>
        <button className="w-full h-20 px-20 py-2 bg-white text-black font-semibold rounded-lg 
        shadow-md hover:bg-yellow-100 focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:ring-opacity-50 ml-20" onClick={checkAnswer}>
            {props.answerStr}
        </button>
        <div className= {`mt-4 p-6 text-center flex justify-center bg-green-100 border border-green-400 text-green-700 rounded-lg ${
          isVisible ? 'block' : 'hidden'
        }`}>
            {props.correctness.toString()}
        </div>
    </div>)
}



export default Answer;