interface answerProps{
    answerStr:string;
    correctness: boolean;
}

const Answer: React.FC<answerProps> = (props) => {
    return (<div>
        <h1>{props.answerStr}</h1>
        {/* <h1>{props.correctness.toString()}</h1> */}
    </div>)
}

export default Answer