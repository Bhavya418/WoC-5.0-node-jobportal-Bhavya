import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Community from "./components/Community";
import About from "./components/About";

function App() {
  
  return (
    <div className="App">
      <Router>
          <Navbar />
          
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home  />}></Route>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/community" element={<Community />} />
              <Route exact path="/trending" element={<Trending />} />
              <Route exact path="/home" element={<Home  />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
