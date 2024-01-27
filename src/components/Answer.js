import React, { useState } from "react";
const Answer = (props) => {
    const [inputAnswer, setInputAnswer] = useState(0);
    //inputAnswer === props.answer.toString() && props.setAnwer()
    const answerChange = (e) => {
        setInputAnswer(e.target.value);
        e.target.classList.remove("error");
    }
    return (
        <input type="tel" size="3"
            placeholder="="
            className="answerField"
            onChange={answerChange}
            data-answer={inputAnswer === props.answer.toString() && "true"}
        />
    )
};
export default Answer;