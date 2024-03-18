// App.js
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [problems, setProblems] = useState([]);
  const [userAnswers, setUserAnswers] = useState(Array(12).fill(''));
  const [showResults, setShowResults] = useState(false);

  function generateProblems() {
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const problems = [];
    for (let i = 0; i < 4; i++) {
      const num1 = generateRandomNumber(1000, 9999);
      const num2 = generateRandomNumber(1000, 9999);
      problems.push({ num1, num2, operator: '+', answer: num1 + num2 });

      const num3 = generateRandomNumber(1000, 9999);
      const num4 = generateRandomNumber(1000, 9999);
      problems.push({ num1: num3, num2: num4, operator: '-', answer: num3 - num4 });

      const num5 = generateRandomNumber(6, 15);
      const num6 = generateRandomNumber(6, 15);
      problems.push({ num1: num5, num2: num6, operator: 'x', answer: num5 * num6 });
    }

    return problems;
  }

  const handleInputChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    problems.forEach((problem, index) => {
      //const correctAnswer = eval(`${problem.num1} ${problem.operator} ${problem.num2}`);
      const correctAnswer = problem.answer;
      const userAnswer = parseInt(userAnswers[index], 10);
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const reset = () => {
    setProblems(generateProblems());
    setUserAnswers(Array(12).fill(''));
    setShowResults(false);
  }

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="mui-container">
      <div class="mui-appbar">
        <table width="100%">
          <tr style={{ verticalAlign: "middle" }}>
            <td class="mui--appbar-height  mui--text-headline mui--text-light">Funatics</td>
            <td class="mui--appbar-height" align="right"></td>
          </tr>
        </table>
      </div>
      <div>
        <div className="mui-row">
          {problems.map((problem, index) => (
            <div key={index} className="mui-col-xs-4 question mui--divider-left mui--divider-right">
              <div className='numbers'>{problem.num1} </div>
              <div className='operator'>{problem.operator}</div>
              <div className='numbers'>{problem.num2} </div>
              <input
                type="tel"
                value={userAnswers[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                disabled={showResults}
                className={showResults && userAnswers[index] != problem.answer && 'incorrect'}
                data-answer={problem.answer}
              />
            </div>
          ))}
        </div>
        <div class="mui-divider"></div>
        <div className='mui--text-center'>
          {!showResults ?
            <button type="submit" className='mui-btn mui-btn--raised mui-btn--primary' onClick={handleSubmit} disabled={showResults}>Submit</button>
            : <button className='mui-btn mui-btn--raised mui-btn--accent' onClick={reset}>New Test</button>
          }

        </div>
      </div>
      {showResults && (
        <div className='mui-panel'>
          <h2>Results</h2>
          <p>Your score: {calculateScore()} out of 12</p>
        </div>
      )}
      © Shantanu Joshi <br /><br />
    </div>
  );
};

export default App;
