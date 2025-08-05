import './App.css';
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  LandingPage, 
  AboutMePage,
  BlockchainIdentityApp,
  CurriculumMappingTool,
  MatureMissionWebsite,
  PristineSmilesWebsite
} from "./screens";

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            {/* General Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/projects/blockchain-identity-app" element={<BlockchainIdentityApp />} />
            <Route path="/projects/curriculum-mapping-tool" element={<CurriculumMappingTool />} />
            <Route path="/projects/mature-mission-website" element={<MatureMissionWebsite />} />
            <Route path="/projects/pristine-smiles-website" element={<PristineSmilesWebsite />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar
          toastClassName="bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
          bodyClassName="px-4 py-2"
          progressClassName="bg-indigo-300"
        />
      </BrowserRouter>
    </>
    
  );
}

export default App;
