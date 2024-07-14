import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Home } from './Home';
// import { Announces } from './Announces';

const App=()=> {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="announces" element={<Announces />} /> */}
          {/* Add more routes here */}
        </Routes>
      </Router>
  )
}

export default App;
