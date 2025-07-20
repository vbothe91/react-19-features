import { useState } from 'react'
import './App.css';
import Parent from './components/Parent.jsx';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log('App render 🖥️');

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const expensiveComputation = () => {
    console.log('Expensive computation running...');

    return count1 * 2;
  }

  return (
    <>
      <h1>Vite + React 19</h1>

      <button onClick={incrementCount2}>
        Counter 2 : {count2}
      </button>

      <Parent count1={count1} incrementCount1={incrementCount1}  />
    
      <h3>Result = {expensiveComputation()}</h3>
    </>
  )
}

export default App
