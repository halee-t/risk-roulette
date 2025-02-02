import Answer from "./answer"
import { useEffect, useState } from "react";

interface questionProps{
    question:string;
    answers:string[];
    correct:boolean[];
}



const Question: React.FC<questionProps> = (props) => {
    const [timer, setTimer] = useState(10)

useEffect(() => {
    const interval = setInterval(() => {
        setTimer(prevTimer => {
            if(prevTimer>0){
                return prevTimer - 1
            }else{
                return 0
            }
        })
    },1000)
    return () => clearInterval(interval);
}, [timer])
    
    return (<>
    <div className="font-semibold font-sans text-center underline">
        {props.question}
    </div>
    <div className="text-center">Time remaining:</div>
    <div className="text-center">{timer}</div>
    <div className="grid grid-cols-2 w-1/2 mt-1 gap-1 text-justify">
        {props.answers.map((res, index) => (
            <div>
            <Answer answerStr = {res} correctness={props.correct[index]}></Answer>
            </div>
        ))}
    </div>
    </>)
}


export default Question