import './App.css';
import FetchHeroes from './components/fetch-heroes';
import {useState} from "react";

function App() {
  const [score, setScore] = useState(0);
  
  return (
    <div className="app">
      <div className='score-board'><p>Max Score: 12</p> <p>Current Score: {score}</p></div>
      <FetchHeroes score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
