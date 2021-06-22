import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/ImageSlider';
import {Data} from './components/Data';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={Data} className="image"/>
    </div>
  );
}

export default App;
