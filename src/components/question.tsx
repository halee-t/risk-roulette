import Answer from "./answer"
import answerData from "../data/questions.json";

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
    <div className="h-64 grid grid-rows-{2} grid-cols-2 gap-4 flex align-bottom">
        {props.answers.map((res, index) => (
            <div className="flex justify-center">
                <Answer answerStr = {res} correctness={props.correct[index]}></Answer>
            </div>
        ))}
    </div>
    </>)
}


export default Question