import React, { useState } from "react";
const Answer = (props) => {
    const [inputAnswer, setInputAnswer] = useState(0);
    return (
        <input type="tel" size="3"
            placeholder="="
            onChange={(e) => setInputAnswer(e.target.value)}
            className={inputAnswer === props.answer.toString() && "success"}
        />
    )
};
export default Answer;