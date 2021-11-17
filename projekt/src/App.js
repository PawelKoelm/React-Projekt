import './App.css';
import Menu from './Components/Menu/Menu';
import Site from './Components/Site/Site';
import Contact from './Components/Contact/Contact';
import TitleBar from './Components/TitleBar/TitleBar';

function App() {
  return (
    <div className = "main_body">
      <TitleBar/>
      <Menu/>
      <Site/>
      <Contact />
    </div>
  );
}

export default App;
