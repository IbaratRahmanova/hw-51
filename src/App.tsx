import React, {useState} from 'react';
import './App.css';
import Ball from "./Ball/Ball";

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * (36-5+1)+5);
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    setNumbers(newNumbers.sort((a, b) => a - b));
  };

  return (
    <div className="App">
      <h1>Lottery numbers</h1>
      <div className="numbers">
        {numbers.map((number, index) => (
        <Ball key={index} number={number} />
          ))}
      </div>
      <button onClick={generateNumbers}>New Numbers</button>
    </div>
  );
};

export default App;
