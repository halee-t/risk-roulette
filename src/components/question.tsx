import Answer from "./answer"
import answerData from "../data/questions.json";

interface questionProps{
    question:string;
    answers:string[];
    correct:boolean[];
    onTakeDamage: (damage: number) => void;
    onGetPoints: (earn: number) => void;
}

const Question: React.FC<questionProps> = (props) => {
    return (<>
    <div className="font-semibold font-sans text-center underline">
        {props.question}
    </div>
    <div className="h-64 grid grid-rows-{2} grid-cols-2 gap-4 flex align-bottom">
        {props.answers.map((res, index) => (
            <div className="flex justify-center">
                <Answer 
                    answerStr = {res} 
                    onTakeDamage={props.onTakeDamage}
                    onGetPoints={props.onGetPoints}
                    correctness={props.correct[index]}
                />
            </div>
        ))}
    </div>
    </>)
}


export default Question