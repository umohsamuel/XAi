import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
// import Planets from "./components/planets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* <Planets /> */}
    </>
  );
}

export default App;
