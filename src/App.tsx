import React, { useState } from "react";
import "./App.css";
import MoodDetail from "./detail/MoodDetail";
import { Mood } from "./detail/mood";

function App() {
  const [moodList, setMoodList] = useState(new Array<Mood>());
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <MoodDetail moodList={moodList} setMoodList={setMoodList}></MoodDetail>
      </main>
    </div>
  );
}

export default App;
