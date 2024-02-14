import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Components */}
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
