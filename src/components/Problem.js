import React from 'react';
import Answer from "./Answer";
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let excludedNumbers = [10, 5, 11, 15, 2, 3];
    // useEffect(() => {
    const getUnique = (min,max) => {
        let randomNum = getRandom(min, max);
        // do {
            //randomNum = 
        // } while (excludedNumbers.includes(randomNum) === false);
        if(excludedNumbers.includes(randomNum)){
            excludedNumbers.push(randomNum);
            getUnique(min,max);

        } else {
            return randomNum
        }
    }


const Problem = (props) => {
    let val1 = getUnique(props.min, props.max);
    let val2 = getUnique(props.min, val1-1);
    let answer = 0;
    if (props.operator === "+") {
        answer = val1 + val2;
    } else if (props.operator === "-") {
        answer = val1 - val2;
    } else if (props.operator === "X") {
        console.log(excludedNumbers)
        val2 = getUnique(props.min, props.max);
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