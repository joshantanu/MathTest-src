import Answer from "./Answer";
const getRN = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Problem = (props) => {
    let val1 = getRN(props.min, props.max);
    let val2 = getRN(props.min, val1-1);
    let answer = 0;
    if (props.operator === "+") {
        answer = val1 + val2;
    } else if (props.operator === "-") {
        answer = val1 - val2;
    } else if (props.operator === "X") {
        val2 = getRN(props.min, 9);
        answer = val1 * val2
    }
    return (
        <div className="mui-col-xs-3 operation">
            <div>{val1}</div><span>{props.operator}</span>
            <div>{val2}</div>
            <div className="mui-divider"></div>
            <Answer answer={answer} />
        </div>
    )
};
export default Problem;