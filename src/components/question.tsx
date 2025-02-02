import Answer from "./answer"
import { useEffect, useState } from "react";

interface questionProps{
    question:string;
    answers:string[];
    correct:boolean[];
    disaster: string;
}

const Question: React.FC<questionProps> = (props) => {
    
    let time = props.disaster === "fire" ? 5 : 10
    const [timer, setTimer] = useState(time)
    const [timerText, setTimerText] = useState("")
    const [userCorrect, setUserCorrect] = useState(true)


useEffect(() => {
    const interval = setInterval(() => {
        setTimer(prevTimer => {
            if(prevTimer>0){
                return prevTimer - 1
            }else{
                console.log(flip)
                setTimerText("Times Up!")
                return 0
            }
        })
    },1000)
    return () => clearInterval(interval);
}, [timer])
    
    let fire = (props.disaster === "fire")
    let flip = (props.disaster === "flood")
    let pet = (props.disaster === "pet")
    let cast = (props.disaster === "crash")

    return (<>
    <div className={flip ? 'font-semibold font-sans text-center underline rotate-180' : 'font-semibold font-sans text-center underline'}>
        {props.question}
    </div>
    <div className="text-center">Time remaining:</div>
    <div className="text-center">{timer}</div>
    <div className="text-center">{timerText}</div>
    <div className="grid grid-cols-2 w-1/2 mt-1 gap-1 text-justify">
        {props.answers.map((res, index) => (
            <div>
            <Answer answerStr = {res} correctness={props.correct[index]}></Answer>
            </div>
        ))}
    </div>
    <div className={cast ? '' : 'hidden'}>
        <img src = "./bubbleboy_cast.png"/>
    </div>
    <div className={pet ? '' : 'hidden'}>
        <img src = "./bubbleboy_sad.png"/>
    </div>
    <div className={fire ? '' : 'hidden'}>
        <img src = "./house_and_boy_fire.png"/>
    </div>
    <div className={flip ? '' : 'hidden'}>
        <img src = "./flood_house.png"/>
    </div>
    <div>
        {/*hacker*/}
    </div>
    <div>
        {/*farm*/}
    </div>
    <div>
        {/**/}
    </div>
    </>)
}

export default Question