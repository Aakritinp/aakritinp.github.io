import { BrowserRouter as Router } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="bg-pink-200 py-4 text-center text-pink-700">
          <p>© 2024 Aakriti Mishra. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              Twitter
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
