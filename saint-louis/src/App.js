import './App.css';

import { HeadScreen } from './components/headScreen';
import { Navbar } from './components/navbar';
import { Paroisse } from './components/nosParoisse';
import { Horaires } from './components/horaires';
import { Information } from './components/information';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeadScreen/>
      <Paroisse/>
      <Horaires/>
      <Information/>
    </div>
  );
}

export default App;
