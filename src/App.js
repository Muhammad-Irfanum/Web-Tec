import logo from './logo.svg';
import './App.css';
import Logic from './func';
import Argument from './argu';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Project from './Portfolio/project';
import Contact from './Portfolio/Contact';

function App() {
  return (
   <div>
      {/* <Logic />
      <Argument /> */}
     <Home />
     <About />
     <Project />
     <Contact />
    </div>
  );
}

export default App;
