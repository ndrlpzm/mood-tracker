import "./App.css";
import Home from "./home/Home";
import { Routes, Route, NavLink } from "react-router-dom";
import MoodDetail from "./detail/MoodDetail";
import { ToastProvider } from "./data/toastContext";
import { ToastComponent } from "./common-components/Toast";
import NewMood from "./detail/NewMood";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/moods/new">
              <button className="filled-button">New mood</button>
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/moods/:moodId" element={<MoodDetail />}></Route>
            <Route path="/moods/new" element={<NewMood />}></Route>
          </Routes>
          <ToastComponent></ToastComponent>
        </main>
        <footer></footer>
      </div>
    </ToastProvider>
  );
}

export default App;
