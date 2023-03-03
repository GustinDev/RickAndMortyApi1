import "./App.css";
//Imports
import Characters from "./components/Characters/Characters";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Characters />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
