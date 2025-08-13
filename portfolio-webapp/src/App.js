import './App.css';
import ScrollToTopOnRefresh from "./components/ScrollToTopOnRefresh";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens";

function App() {
  return (
    <>
      <ScrollToTopOnRefresh />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
