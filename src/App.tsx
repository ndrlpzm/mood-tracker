import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MoodDetail from './detail/MoodDetail';

function App() {
  const [moods, setMoods] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <MoodDetail></MoodDetail>
      </main>
    </div>
  );
}

export default App;
