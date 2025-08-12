import './App.css';
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { 
  LandingPage
} from './screens';

function App() {
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        toastClassName="bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
        bodyClassName="px-4 py-2"
        progressClassName="bg-indigo-300"
      />
    </>
  );
}

export default App;
