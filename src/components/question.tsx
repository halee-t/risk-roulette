import Answer from "./answer"
import { useEffect, useState } from "react";

interface questionProps{
    question:string;
    answers:string[];
    correct:boolean[];
}



const Question: React.FC<questionProps> = (props) => {
    return (<>
    <div className="font-semibold font-sans text-center underline">
        {props.question}
    </div>
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