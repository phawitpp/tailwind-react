import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/HomeComponent";
import Aboutme from "./Component/Aboutme";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="bg-gradient-to-tr from-blue-600 to-red-500 min-h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
