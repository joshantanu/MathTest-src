import React, { useState } from 'react';
import Answer from "./Answer";
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const factors = 13;
//let excludedNumbers = [10, 5, 11, 15];




const ProblemTable = (props) => {
    const [excludedNumbers, setexcludedNumbers] = useState([10, 5, 11, 15])
    // useEffect(() => {
    const getUnique = () => {
        let randomNum;
        do {
            randomNum = getRandom(props.min, props.max)
        } while (excludedNumbers.includes(randomNum));
        setexcludedNumbers([...excludedNumbers, randomNum]);
        return randomNum;
    }

    const FactorTable = () => {
        const rn = getUnique();
        return (
            <>
                {[...Array(factors)].map((i, factor) => (
                    <div>{rn} X {factor} = <Answer answer={(rn * factor)} /></div>
                ))}
            </>)
    }
    //     let tableOf = getUnique();

    //     console.log(excludedNumbers)
    // }, [])

    return (
        <>
            {[...Array(4)].map((i, val) => (
                <div className="mui-col-xs-6 mui-col-md-3 operation">
                    <FactorTable />
                </div>
            ))}
        </>
    )
};
export default ProblemTable;