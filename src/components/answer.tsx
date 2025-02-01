interface answerProps{
    answerStr:string;
}

const Answer: React.FC<answerProps> = (props) => {
    return (<div>
        <h1>{props.answerStr}</h1>
    </div>)
}

export default Answer