import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Award from './components/Award';

function App() {
  return (
    <div className="App">
     <NavbarComponent/>

     <div>
       <Jumbotron/>
     </div>

     <div>
       <About/>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L80,218.7C160,181,320,107,480,96C640,85,800,139,960,165.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
     </div>

    <br/>

     <div>
       <Experience/>
     </div>

     <br/>

     <div className='mt-4'>
       <Skill/>
     </div>

    <br/>

    <div>
      <Award/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L80,218.7C160,181,320,107,480,96C640,85,800,139,960,165.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
    </div>
  );
}

export default App;
