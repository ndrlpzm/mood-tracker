import "./App.css";
import Home from "./home/Home";
import { MoodsProvider } from "./data/moodReducer";
import { Routes, Route, NavLink } from "react-router-dom";
import MoodDetail from "./detail/MoodDetail";

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
            <Route path="/" element={<Home />}></Route>
            <Route path="/mood/:moodId" element={<MoodDetail />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>
    </MoodsProvider>
  );
}

export default App;
