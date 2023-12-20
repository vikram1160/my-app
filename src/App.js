import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Education from './components/Education';
import Projects from './components/Projects'
import Techologies from './components/Techologies';
import Footer from './components/Footer';

function App() {
  return (
  <>
   <NavBar/>
    <Home/>
    <Education/>
    <Techologies/>
    <Projects/>
    <Footer/>

    
  </>
   );
}

export default App;
