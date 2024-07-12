import logo from './logo.svg';
import './App.css';

import { HeadScreen } from './components/headScreen';
import { Navbar } from './components/navbar';
import { Paroisse } from './components/nosParoisse';
import { Horaires } from './components/horaires';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeadScreen/>
      <Paroisse/>
      <Horaires/>
    </div>
  );
}

export default App;
