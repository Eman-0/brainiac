import './App.css';
import FetchHeroes from './components/fetch-heroes';


function App() {
  return (
    <div className="App">
      <div className='score-board'><p>Max Score: 12</p> <p>Current Score: </p></div>
      <FetchHeroes/>
    </div>
  );
}

export default App;
