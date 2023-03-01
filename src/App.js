import "./App.scss";
import Home from "./views/home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navs from "./component/header/Nav";
import About from "./views/about/About";
import Resume from "./views/resume/Resume";
import Contact from "./views/contact/Contact";
import Protofilo from "./views/protofolio/protofilo";
function App() {
  return (
    <div className="App">
      <Navs />
      <Router basename="/myproto">
        <Routes>
          <Route path="/myproto" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Protofilo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
