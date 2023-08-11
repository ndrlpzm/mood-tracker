import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { returnLatestMoods } from "./data/apiMock";
import "./App.css";
import MoodDetail from "./detail/MoodDetail";
import Home from "./home/Home";
import { Mood } from "./detail/mood";

function App() {
  const [moodList, setMoodList] = useState(new Array<Mood>());
  const { data, error, isLoading } = useSWR(
    "../data/apiMock.ts",
    returnLatestMoods
  );
  useEffect(() => {
    setMoodList(data ?? []);
  }, [data]);
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Home moodList={moodList} isLoading={isLoading}></Home>
        <MoodDetail moodList={moodList} setMoodList={setMoodList}></MoodDetail>
      </main>
    </div>
  );
}

export default App;
