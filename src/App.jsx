// import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/layout.jsx";
import HomePage from "./pages/homePage.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Policy from "./pages/policy.jsx"; // Class name should start with uppercase
import PageNotFound from "./pages/pagenotFound.jsx"; // Class name should start with uppercase

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
