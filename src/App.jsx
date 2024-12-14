// import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/layout.jsx";
import Homepage from "./pages/homePage.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Policy from "./pages/policy.jsx"; // Class name should start with uppercase
import PageNotFound from "./pages/pagenotFound.jsx"; // Class name should start with uppercase
import Register from './pages/auth/register.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/login.jsx';
import Dashboard from './pages/user/dashboard.jsx';
import { GiPrivate } from 'react-icons/gi';
import PrivateRoute from './components/layout/privateRoute.jsx';
// import { AuthProvider } from './context/auth.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='' element={<PrivateRoute />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
