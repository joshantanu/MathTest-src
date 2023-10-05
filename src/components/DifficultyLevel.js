const DifficultyLevel = (props) => {
    const setLimit = (e) => {
        props.setLimit(eval(e.target.getAttribute("min")), eval(e.target.getAttribute("max")));
    }
    return (
        <div>Difficulty Levels: &nbsp;
            <button href="#" min={10} max={199} onClick={setLimit}>1</button> 
             &nbsp;  <button href="#" min={100} max={299} onClick={setLimit}>2</button> 
             &nbsp;  <button href="#" min={150} max={399} onClick={setLimit}>3</button>
        </div>
    )
}
export default DifficultyLevel;