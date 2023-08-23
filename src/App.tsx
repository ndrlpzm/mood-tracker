import React, { useEffect, useReducer } from "react";
import useSWR from "swr";
import { returnLatestMoods } from "./data/apiMock";
import "./App.css";
import MoodDetail from "./detail/MoodDetail";
import Home from "./home/Home";
import { Mood } from "./data/classes/mood";
import moodsReducer from "./data/moodReducer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [moodList, dispatch] = useReducer(moodsReducer, new Array<Mood>());
  const { data, isLoading } = useSWR("/api/v1/moods", returnLatestMoods);
  useEffect(() => {
    dispatch({
      type: "replace",
      mood: new Mood(-1,0,new Date(),"",[]),
      moodIndex: -1,
      newList: data ?? [],
    });
  }, [data]);
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/mood" className="nav-item">
          Add new mood
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home moodList={moodList} isLoading={isLoading}></Home>}
        ></Route>
        <Route
          path="/mood"
          element={
            <MoodDetail
              moodList={moodList}
              dispatchMoods={dispatch}
            ></MoodDetail>
          }
        ></Route>
      </Routes>
      <header className="App-header"></header>
      <main></main>
    </div>
  );
}

export default App;
