import React, { useState, useEffect } from 'react';
import './App.css';  // Make sure this import is correct

function App() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 10;

  function increment() {
    setCount(prev => (prev < max ? prev + 1 : prev));
  }

  function decrement() {
    setCount(prev => (prev > min ? prev - 1 : prev));
  }

  function reset() {
    setCount(0);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowUp') increment();
      else if (event.key === 'ArrowDown') decrement();
      else if (event.key.toLowerCase() === 'r') reset();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2 className="count">{count}</h2>
      <div>
        <button onClick={decrement} className="button">-</button>
        <button onClick={increment} className="button">+</button>
      </div>
      <button onClick={reset} className="resetButton">Reset</button>
      <p className="info">
        Min: {min} | Max: {max} <br />
        Use ArrowUp / ArrowDown or R keys for control
      </p>
    </div>
  );
}

export default App;
