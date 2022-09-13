import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavbar from "./components/MainNavbar/MainNavbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Background } from "./components/Background/Background";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Background />
        <MainNavbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
