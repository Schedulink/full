import "./App.css";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Header";
import Home from "./components/Homepage/Home";
import Main from "./components/main/Main";
// import Footer from './components/Footer';
import Login from "./components/Login/Fac_login";
import Missing from "./components/Missing";
import For_pass from "./components/Login/For_pass";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/For_pass" element={<For_pass />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Missing />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
