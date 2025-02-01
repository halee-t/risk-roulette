import Answer from "./answer"
interface questionProps{
    question:string;
    answers:string[];
}

const Question: React.FC<questionProps> = (props) => {
    return (<>
    <div>
        <h1>{props.question}</h1>
    </div>
    <div className="flex flex-col w-1/2 mt-1 gap-1">
        {props.answers.map((res) => (
            <Answer answerStr = {res}></Answer>
        ))}
    </div>
    </>)
}


export default Question