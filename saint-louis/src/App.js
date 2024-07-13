 HEAD

// import logo from './logo.svg';
 origin/Jason_KITIO
import './App.css';
import Bas from './Screen/bas';

import { HeadScreen } from './components/headScreen';
import { Navbar } from './components/navbar';
import { Paroisse } from './components/nosParoisse';
import { Horaires } from './components/horaires';
import { Information } from './components/information';

function App() {
  return (
    <div className="App">
 HEAD
      <Navbar/>
      <HeadScreen/>
      <Paroisse/>
      <Horaires/>
      <Information/>

      <Bas/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
 origin/Jason_KITIO
    </div>
  );
}

export default App;
