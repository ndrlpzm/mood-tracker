import "./App.css";
import { MoodDetailWrapper } from "./detail/MoodDetail";
import Home from "./home/Home";
import { MoodsProvider } from "./data/moodReducer";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <MoodsProvider>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/mood/new">
              <button className="filled-button">New mood</button>
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/mood/:idParam"
              element={<MoodDetailWrapper></MoodDetailWrapper>}
            ></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>
    </MoodsProvider>
  );
}

export default App;
