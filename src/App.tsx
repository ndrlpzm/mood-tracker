import React,{ useState } from 'react';
import './App.css';
import MoodDetail from './detail/MoodDetail';
import { Mood } from './detail/mood';

function App() {
  const [mood, setMood] = useState(new Mood());
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <MoodDetail mood={mood} setMood={setMood}></MoodDetail>
      </main>
    </div>
  );
}

export default App;
