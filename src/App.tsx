import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
