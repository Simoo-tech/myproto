import "./App.scss";
import Home from "./views/home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navs from "./component/header/Nav";
import About from "./views/about/About";
import Resume from "./views/resume/Resume";
import Contact from "./views/contact/Contact";
import Protofilo from "./views/protofolio/protofilo";
import { useEffect, useState } from "react";
import Loading from "./component/loading/loading";
function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, {});
  return (
    <Router basename="/myproto">
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Navs />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Protofilo />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
