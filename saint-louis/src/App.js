<<<<<<< HEAD
 import './App.css';
import Bas from './Screen/bas';

=======
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Home } from './Screen/home';
 import { Announces } from './Screen/Announces';
>>>>>>> routes-test

const App=()=> { 
  return (
<<<<<<< HEAD
    <div className="App">
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
    </div>
  );
=======
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/announces" element={ <Announces /> } /> 
          {/* Add more routes here */}
        </Routes>
      </Router>
  )
>>>>>>> routes-test
}

export default App;
