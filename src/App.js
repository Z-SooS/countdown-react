import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  //TO-DO Uncomment when needed

  /* const words = require("word-list-json");

  words.length = words.lengths[9];
  const firstFourLetter = words.lengths[3];
  const gameWords = words.slice(firstFourLetter); */
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
