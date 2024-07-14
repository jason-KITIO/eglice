
 import './App.css';
import Bas from './Screen/bas';


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Home } from './Screen/home';
 import { Announces } from './Screen/Announces';


const App=()=> { 
  return (
     <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/announces" element={ <Announces /> } /> 
          {/* Add more routes here */}
        </Routes>
      </Router>
  );

}

export default App;
