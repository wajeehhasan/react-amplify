import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loginpage from "./Components/loginpage/loginpage";
import Listpage from "./Components/listpage/listpage";
import Notfound from "./Components/notfound/notfound";
import Navbar from "./Components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/listall" element={<Listpage />} />
        <Route path="/notfound" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
