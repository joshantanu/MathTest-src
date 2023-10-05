import './css/main.css';
import Header from './components/Header';
import Problem from './components/Problem';
import { useRef, useState } from 'react';
import Footer from './components/Footer';
import DifficultyLevel from './components/DifficultyLevel';

function App() {
  const [addSubMax, setAddSubMax] = useState({min:10,max:100});
  //const maxNum = useRef();
  const setLimit = (min,max) => {
    setAddSubMax({min,max})
  }
  return (
    <div className="mui-container-fluid">
      <Header />
      {console.log(addSubMax.min,addSubMax.max)}
      <div className="mui-container-fluid">
        {/* Set Limit <input type="tel" ref={maxNum} size="4" maxLength="4" /> <button onClick={setLimit}>Go</button> */}
        <DifficultyLevel setLimit={setLimit} />
        <h3>Addition</h3>
        <div className="mui-row">
          {[...Array(4)].map(() => (
            <Problem operator="+" min={addSubMax.min} max={addSubMax.max} />
          ))}
        </div><br />
        <div className="mui-divider"></div>
        <h3>Subtraction</h3>
        <div className="mui-row">
          {[...Array(4)].map(() => (
            <Problem operator="-" min={addSubMax.min} max={addSubMax.max} />
          ))}
        </div><br />
        <div className="mui-divider"></div>
        <h3>Multiplication</h3>
        <div className="mui-row">
          {[...Array(4)].map(() => (
            <Problem operator="X" min={2} max={12} />
          ))}
        </div><br />
      </div>
      <Footer />
    </div>
  );
}
export default App;
