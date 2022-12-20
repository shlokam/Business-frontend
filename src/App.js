import './App.css';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HashRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Teams from './components/Teams';
import VideoSection from './components/VideoSection';
import Details from './components/Details';
import WaysToWork from './components/WaysToWork';
import BeautifulPage from './components/BeautifulPage';
import Reviews from './components/Reviews';
import Resource from './components/Resource';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
      <Teams/>
      <VideoSection/>
      <Details/>
      <WaysToWork/>
      <BeautifulPage/>
      <Reviews/>
      <Resource/>
      <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
