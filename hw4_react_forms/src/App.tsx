import './App.css';
import ControlledComponent from './Components/ControlledComponent';
import Header from './Components/Header';
import StreetImg from './Components/StreetImg';


function App() {
  return (
    <div className="App">
      <div className='right-container'>
        <Header />
        <ControlledComponent/>
      </div>
      <div className='left-container'>
        <StreetImg/>
      </div>
    </div>
  );
}

export default App;
