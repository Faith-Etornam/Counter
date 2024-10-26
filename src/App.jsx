import { useState } from 'react';
import './App.css';

function App() {
  
  const [number, setNumber] = useState(0)

  return (
    <div className='container'>
      
    <h1>Count: {number}</h1>

      <button onClick={() => {
        number > 0 
        ? setNumber(number - 1):
        alert(`Cannot decrease any further`)
      }} disabled= {number <= 0}>-</button>

      <button onClick={() => {
        setNumber(0)
      }}>Reset</button>

      <button onClick={() => {
      number < 100 
      ? setNumber(number + 1):
      alert(`Cannot exceed 100`)
      }} disabled= {number >= 100}>+</button>

      <progress value={number} max={100}></progress>
      <span>{number}%</span>

    </div>
  )
}

export default App
