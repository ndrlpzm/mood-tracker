import React, { useEffect, useReducer } from "react";
import useSWR from "swr";
import { returnLatestMoods } from "./data/apiMock";
import "./App.css";
import MoodDetail from "./detail/MoodDetail";
import Home from "./home/Home";
import { Mood } from "./detail/mood";
import moodsReducer from "./data/moodReducer";

function App() {
  const [moodList, dispatch] = useReducer(moodsReducer, new Array<Mood>());
  const { data, isLoading } = useSWR(
    "/api/v1/moods",
    returnLatestMoods
  );
  useEffect(() => {
    dispatch({
      type: 'replace',
      mood: new Mood(),
      moodIndex: -1,
      newList:data ?? []
    });
  }, [data]);
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Home moodList={moodList} isLoading={isLoading}></Home>
        <MoodDetail moodList={moodList} dispatchMoods={dispatch}></MoodDetail>
      </main>
    </div>
  );
}

export default App;
