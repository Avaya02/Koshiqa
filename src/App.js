import "./App.css";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="  w-screen min-h-screen flex flex-col bg-custom-yellow">

    {/* <NavBar/> */}
    <Routes>

    <Route path="/" element={<Home/>} />

    </Routes>



    </div>
  );
}

export default App;
