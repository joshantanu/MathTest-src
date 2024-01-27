import './css/main.css';
import Header from './components/Header';
import Problem from './components/Problem';
import { useState } from 'react';
import Footer from './components/Footer';
// import DifficultyLevel from './components/DifficultyLevel';
import React from 'react';

function App() {
  const [addSubLimit, setaddSubLimit] = useState({min:250,max:699});
  const [multiLimit, setmultiLimit] = useState({min:6,max:14});
  //const maxNum = useRef();
  // const setLimit = (min,max,multiMin,multiMax) => {
  //   setaddSubLimit({min,max})
  //   setmultiLimit({min:multiMin,max:multiMax})
  // }
  return (
    <div className="mui-container-fluid">
      <Header />
      {console.log(addSubLimit.min,addSubLimit.max)}
      <div className="mui-container-fluid">
        {/* Set Limit <input type="tel" ref={maxNum} size="4" maxLength="4" /> <button onClick={setLimit}>Go</button> */}
        {/* <DifficultyLevel setLimit={setLimit} /> */}
        <h3>Addition</h3>
        <div className="mui-row">
          {[...Array(4)].map(() => (
            <Problem operator="+" min={addSubLimit.min} max={addSubLimit.max} />
          ))}
        </div><br />
        <div className="mui-divider"></div>
        <h3>Subtraction</h3>
        <div className="mui-row">
          {[...Array(4)].map(() => (
            <Problem operator="-" min={addSubLimit.min} max={addSubLimit.max} />
          ))}
        </div><br />
        <div className="mui-divider"></div>
        <h3>Multiplication</h3>
        <div className="mui-row">
          {console.log(multiLimit.min, multiLimit.max)}
          {[...Array(4)].map(() => (
            <Problem operator="X" min={multiLimit.min} max={multiLimit.max} />
          ))}
        </div><br />
      </div>
      <Footer />
    </div>
  );
}
export default App;
