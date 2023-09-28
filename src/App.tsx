import "./App.css";
import {MoodDetailWrapper} from "./detail/MoodDetail";
import Home from "./home/Home";
import { MoodsProvider } from "./data/moodReducer";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <MoodsProvider>
    <div className="App">
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
