import React, {useReducer } from "react";
import "./App.css";
import {MoodDetailWrapper} from "./detail/MoodDetail";
import Home from "./home/Home";
import { Mood } from "./data/classes/mood";
import { MoodsProvider } from "./data/moodReducer";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <MoodsProvider>
    <div className="App">
      {/* <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/mood" className="nav-item">
          Add new mood
        </Link>
      </nav> */}
      <header className="App-header"></header>
      <main>
      <Routes>
        <Route
          path="/"
          element={<Home></Home>}
        ></Route>
        <Route
          path="/mood/:idParam"
          element={
            <MoodDetailWrapper></MoodDetailWrapper>
          }
        ></Route>
      </Routes></main>
    </div>
    </MoodsProvider>
  );
}

export default App;
