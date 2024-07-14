
import './App.css';
import Bas from './Screen/bas';


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Screen/home';
import { Announces } from './Screen/Announces';

import AddEvent from './Screen/AddEvent';
import ListeEmail from './Screen/listeEmail';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announces" element={<Announces />} />
        <Route path="/AddEvent" element={<AddEvent />} />
        <Route path="/ListeEmail" element={<ListeEmail />} />
      {/* <ListeEmail/> */}
      {/* <AddEvent/> */}
        {/* Add more routes here */}
      </Routes>
    </Router>
  );

}

export default App;
