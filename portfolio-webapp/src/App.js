import './App.css';
import { ToastContainer } from "react-toastify";
import { 
  Header, Hero, About, Skills, Projects, Contact, Footer, ScrollToTop
} from './components';

function App() {

  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
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
