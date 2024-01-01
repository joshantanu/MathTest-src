import React from 'react';

const DifficultyLevel = (props) => {
    const setLimit = (e) => {
        const evalNum = (tgt) => {
            return parseInt(e.target.getAttribute(tgt))
        }
        props.setLimit(evalNum("min"), evalNum("max"), evalNum("multimin"), evalNum("multimax"));
    }
    return (
        <div><br />Difficulty Levels: &nbsp;
            <button href="#" min={10} max={199} multimin={3} multimax={12} onClick={setLimit}>1</button> 
             &nbsp;  <button href="#" min={100} max={299} multimin={6} multimax={13} onClick={setLimit}>2</button> 
             &nbsp;  <button href="#" min={150} max={499} multimin={7} multimax={15} onClick={setLimit}>3</button>
        </div>
    )
}
export default DifficultyLevel;