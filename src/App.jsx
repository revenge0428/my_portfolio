import logo from './logo.svg';
import './App.css';
import {Contact} from './contact';
import {Home} from './home';
import {About} from './about';
import {Portfolio} from './portfolio';
import {Footer} from './footer';

function App() {
  return (
    <>
    <div className="Container">
      <ul className="nav-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <Home />
      <About />
      <Portfolio />
    </div>
    <Contact />
    <Footer />
    </>
  );
}

export default App;
