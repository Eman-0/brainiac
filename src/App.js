import './App.css';
import FetchHeroes from './components/fetch-heroes';
import {useState} from "react";

function App() {
  const [curScore, setCurScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0)
  return (
    <div className="app">
      <div className="score-board"><p>Best Score: {maxScore}</p> <p>Current Score: {curScore}</p></div>
      <FetchHeroes curScore={curScore} setCurScore={setCurScore} maxScore={maxScore} setMaxScore={setMaxScore}/> 
    </div>
  );
}

export default App;
