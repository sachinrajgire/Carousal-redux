import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/ImageSlider';
import {Data} from './components/Data';
import DataDance from './components/DataDance';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={Data} className="image"/>
       <DataDance />
    </div>
  );
}

export default App;


// Testing


// Testrunner
// Architecture - Mocking / SpeechSynthesis

// Jest- enzyme 
// ---------------------
// Assertion -- Expect to this  - CHoice 1 

// Sinon --- Mocking Libary
// chai 
// Mocha 