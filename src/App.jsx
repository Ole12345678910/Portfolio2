import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ReactFrameworkCA from "./pages/articles/ReactFrameworkCA";
import ProjectExam2 from "./pages/articles/ProjectExam2";
import FCAJS2 from "./pages/articles/FCAJS2";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/reactframeworkca" element={<ReactFrameworkCA />} />
            <Route path="/project/projectexam2" element={<ProjectExam2 />} />
            <Route path="/project/fcajs2" element={<FCAJS2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
