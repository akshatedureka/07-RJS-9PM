import logo from './logo.svg';
import './App.css';
import useCalc from "./hooks/useCalc";

function App() {
  
  const [count,increment,decrement,reset] = useCalc(0,10);
  
  return (
    <div className="App">
      <h3>Count....{count}</h3>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Decr</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
