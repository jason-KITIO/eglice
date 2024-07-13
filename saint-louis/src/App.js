// import logo from './logo.svg';
import './App.css';
import Bas from './Screen/bas';
import AddEvent from './Screen/AddEvent';
import ListeEmail from './Screen/listeEmail';
import Annonce from './Screen/annonce';

function App() {
  return (
    <div className="App">

      {/* <ListeEmail/> */}
      <AddEvent/>
      {/* <Bas/> */}
      <Annonce/>
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
}

export default App;
