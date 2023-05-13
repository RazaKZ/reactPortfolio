import Sidebar from "./component/Sidebar";
import { Routes, Route } from 'react-router-dom'
import About from "./component/about";
import Home from "./component/home";
import Resume from "./component/resume";
import Portfolio from "./component/portfolio";
import Service from "./component/service";
import Contact from "./component/contact";

function App() {
  return (
    <div className="App">
      <Sidebar />
     
      <Routes>

        {/* <Route path="/" element={<Sidebar />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />} > </Route>
        <Route path="/portfolio" element = {<Portfolio />} > </Route>
        <Route path="/service" element = {<Service />} > </Route>
        <Route path="contact" element = {<Contact/>}></Route>
      </Routes>



    </div>
  );
}

export default App;
